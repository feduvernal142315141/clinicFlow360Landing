import Image from "next/image"

/** Framed product capture (1920×1200) with an optional caption. */
export function ScreenshotFrame({
  src,
  alt,
  caption,
  sizes = "(min-width: 1024px) 1024px, 100vw",
  className = "",
}: {
  src: string
  alt: string
  caption?: string
  sizes?: string
  className?: string
}) {
  return (
    <figure className={className}>
      <div
        className="overflow-hidden rounded-2xl shadow-tier-3 sm:rounded-3xl"
        style={{ border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <Image src={src} alt={alt} width={1920} height={1200} sizes={sizes} className="w-full" />
      </div>
      {caption && <figcaption className="mt-3 text-center text-[12px] text-slate-500">{caption}</figcaption>}
    </figure>
  )
}
