import { BrandToothOutline } from "../shared/brand-logo"

/**
 * Subtle dental-themed SVG decorations for the hero background.
 * Creates visual identity as a dental/clinical product.
 * Dashed tooth outlines at low opacity — not clipart.
 */
export function DentalDecorations() {
  return (
    <>
      {/* Left tooth outline — rotated, dashed */}
      <div
        className="pointer-events-none absolute -left-8 top-16 hidden h-72 w-72 text-brand-500/[0.07] sm:block lg:-left-4 lg:top-12 lg:h-80 lg:w-80"
        aria-hidden="true"
      >
        <BrandToothOutline className="h-full w-full -rotate-12" dashed />
      </div>

      {/* Right tooth outline — rotated opposite */}
      <div
        className="pointer-events-none absolute -right-12 top-24 hidden h-80 w-80 text-sky-500/[0.06] lg:block lg:-right-8 lg:h-96 lg:w-96"
        aria-hidden="true"
      >
        <BrandToothOutline className="h-full w-full rotate-12" />
      </div>
    </>
  )
}
