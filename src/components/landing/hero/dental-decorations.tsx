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
        <svg className="h-full w-full -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path
            d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <path
            d="M35 32 C35 26 42 25 50 25 C58 25 65 26 65 32 C65 42 58 48 50 48 C42 48 35 42 35 32 Z"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="28" strokeWidth="0.75" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Right tooth outline — rotated opposite */}
      <div
        className="pointer-events-none absolute -right-12 top-24 hidden h-80 w-80 text-sky-500/[0.06] lg:block lg:-right-8 lg:h-96 lg:w-96"
        aria-hidden="true"
      >
        <svg className="h-full w-full rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path
            d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z"
            strokeWidth="1.8"
          />
          <path d="M32 38 C32 46 40 50 50 50 C60 50 68 46 68 38" strokeWidth="1.2" />
          <path d="M50 28 L50 68" strokeWidth="0.8" strokeDasharray="4 2" />
        </svg>
      </div>
    </>
  )
}
