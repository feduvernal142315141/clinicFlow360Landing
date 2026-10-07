import Image from "next/image"

/**
 * Real tablet capture of the odontogram with the changes of the voice demo
 * drawn on top. Overlay positions are percentages of the capture (1920×1200),
 * so they stay aligned at any size.
 */

export interface OdontogramChanges {
  /** Caries registered on the mesial surface of tooth 34. */
  mesial34?: boolean
  /** Tooth 36 is the one the doctor has open. */
  active36?: boolean
  /** Caries (ICDAS 4) registered on the occlusal surface of tooth 36. */
  occlusal36?: boolean
  /** Tooth that just reacted to a command. */
  pulse?: 34 | 36
}

// Literal class names so Tailwind can see them.
const zoomClasses = {
  never: "",
  // Zooms into the lower-left quadrant (teeth 31–38)
  mobile: "max-sm:origin-[99%_94%] max-sm:scale-[2.3]",
  always: "origin-[99%_94%] scale-[2.3]",
} as const

const toothColumn = {
  34: { left: "67.6%", width: "5.8%" },
  36: { left: "78.3%", width: "5.9%" },
} as const

const fade = "transition-opacity duration-500"

export function TabletOdontogram({
  changes = {},
  zoom = "never",
  alt,
  sizes,
  icdasLabel,
}: {
  changes?: OdontogramChanges
  zoom?: keyof typeof zoomClasses
  alt: string
  sizes: string
  icdasLabel?: string
}) {
  return (
    <div className="@container relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
      <div className={`absolute inset-0 ${zoomClasses[zoom]}`}>
        <Image src="/landing/screenshots/tablet/odontograma.webp" alt={alt} fill sizes={sizes} className="object-cover" />

        {/* Active tooth frame (36) */}
        <span
          aria-hidden="true"
          className={`absolute rounded-[0.5cqw] border-[0.15cqw] border-brand-400 bg-brand-400/15 ${fade} ${changes.active36 ? "opacity-100" : "opacity-0"}`}
          style={{ ...toothColumn[36], top: "59.7%", height: "28.5%" }}
        />

        {/* Caries on the mesial surface of 34 */}
        <span
          aria-hidden="true"
          className={`absolute bg-red-500/85 ${fade} ${changes.mesial34 ? "opacity-100" : "opacity-0"}`}
          style={{ left: "68.62%", width: "1.15%", top: "68.9%", height: "5.9%", borderRadius: "100% 0 0 100% / 50% 0 0 50%" }}
        />

        {/* Caries on the occlusal surface of 36 */}
        <span
          aria-hidden="true"
          className={`absolute rounded-[0.15cqw] bg-red-500 ${fade} ${changes.occlusal36 ? "opacity-100" : "opacity-0"}`}
          style={{ left: "80.62%", width: "1.51%", top: "70.58%", height: "2.42%" }}
        />
        {icdasLabel && (
          <span
            aria-hidden="true"
            className={`absolute -translate-x-1/2 whitespace-nowrap rounded-[0.3cqw] bg-red-950 px-[0.5cqw] py-[0.1cqw] text-[0.85cqw] font-bold text-red-300 ${fade} ${changes.occlusal36 ? "opacity-100" : "opacity-0"}`}
            style={{ left: "81.25%", top: "88.6%" }}
          >
            {icdasLabel}
          </span>
        )}

        {/* One-off ring on the tooth that just changed */}
        {changes.pulse && (
          <span
            key={changes.pulse}
            aria-hidden="true"
            className="tablet-pulse absolute rounded-[0.6cqw] border-brand-400"
            style={{ ...toothColumn[changes.pulse], top: "59.7%", height: "28.5%" }}
          />
        )}
      </div>
    </div>
  )
}
