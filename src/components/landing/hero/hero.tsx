import { HeroCopy } from "./hero-copy"
import { HeroProductDemo } from "./hero-product-demo"

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-noise relative overflow-hidden pt-[72px]"
      style={{
        background: `
          radial-gradient(circle at 50% 25%, rgba(7,156,251,0.10), transparent 35%),
          radial-gradient(circle at 75% 60%, rgba(45,212,191,0.05), transparent 30%),
          #FAFCFF
        `,
      }}
    >
      {/* Grid pattern behind product stage */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(3,126,204,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(3,126,204,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.4) 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.4) 70%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-0 pt-16 sm:pt-20 lg:pt-24">
        <HeroCopy />

        {/* Product Stage */}
        <div className="mt-16 sm:mt-20 lg:mt-[72px]">
          <HeroProductDemo />
        </div>
      </div>

      {/* Bottom glow behind product stage */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(7,156,251,0.13), transparent 60%)",
          filter: "blur(100px)",
        }}
      />
    </section>
  )
}
