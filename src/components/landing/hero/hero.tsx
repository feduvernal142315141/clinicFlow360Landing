import { HeroCopy } from "./hero-copy"
import { HeroProductDemo } from "./hero-product-demo"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40"
      style={{ minHeight: "min(80dvh, 900px)" }}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1280px]">
        <HeroCopy />

        {/* Product demo visual */}
        <div className="mt-16 lg:mt-20">
          <HeroProductDemo />
        </div>
      </div>
    </section>
  )
}
