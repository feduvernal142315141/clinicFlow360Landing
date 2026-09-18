import { HeroCopy } from "./hero-copy"
import { HeroProductDemo } from "./hero-product-demo"

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-noise relative overflow-hidden"
      style={{
        paddingTop: 76, /* navbar height */
        background: `
          radial-gradient(ellipse 70% 50% at 50% 30%, rgba(7,156,251,0.12), transparent),
          radial-gradient(ellipse 40% 40% at 72% 60%, rgba(45,212,191,0.06), transparent),
          #FAFCFF
        `,
      }}
    >
      {/* Grid pattern — centered, faded */}
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 px-5 pt-8 sm:px-6 sm:pt-12 lg:pt-16">
        <HeroCopy />

        {/* Product stage — compact gap */}
        <div className="mt-10 pb-8 sm:mt-12 sm:pb-12 lg:mt-14 lg:pb-0">
          <HeroProductDemo />
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[600px] -translate-x-1/2 sm:h-[350px] sm:w-[800px]" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(7,156,251,0.12), transparent 55%)", filter: "blur(80px)" }}
      />
    </section>
  )
}
