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
          radial-gradient(ellipse 80% 50% at 50% 20%, rgba(7,156,251,0.13), transparent),
          radial-gradient(ellipse 50% 40% at 75% 50%, rgba(45,212,191,0.07), transparent),
          radial-gradient(ellipse 60% 40% at 50% 75%, rgba(7,156,251,0.10), transparent),
          linear-gradient(180deg, #F8FBFF 0%, #F0F6FF 50%, #FAFCFF 100%)
        `,
      }}
    >
      {/* Grid behind product — more visible */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(3,126,204,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(3,126,204,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 60%, black 10%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 60%, black 10%, transparent 65%)",
        }}
      />

      {/* Content — compact copy + dominant product */}
      <div className="relative z-10">
        {/* Copy block — compact, minimal vertical space */}
        <div className="px-5 pt-6 sm:px-6 sm:pt-10 lg:pt-12">
          <HeroCopy />
        </div>

        {/* Product stage — tight to copy, extends past section */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="px-4 sm:px-6">
            <HeroProductDemo />
          </div>
        </div>
      </div>

      {/* Bottom soft fade — smooth transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[60px]" aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, #FAFCFF)" }}
      />
    </section>
  )
}
