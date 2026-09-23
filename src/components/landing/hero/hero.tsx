import { HeroCopy } from "./hero-copy"
import { HeroProductDemo } from "./hero-product-demo"
import { DentalDecorations } from "./dental-decorations"

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-noise relative overflow-hidden"
      style={{
        paddingTop: 80,
        background: `
          radial-gradient(ellipse 70% 45% at 50% 25%, rgba(7,156,251,0.12), transparent),
          radial-gradient(ellipse 40% 40% at 72% 55%, rgba(45,212,191,0.06), transparent),
          linear-gradient(180deg, #06101a 0%, #0a1628 40%, #0d1a30 100%)
        `,
      }}
    >
      {/* Dental SVG decorations */}
      <DentalDecorations />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-14">
          <HeroCopy />
        </div>

        {/* Product stage — floating badges + composition */}
        <div className="relative mt-10 sm:mt-14 lg:mt-16">
          {/* Floating product badges — desktop only */}
          <div className="pointer-events-none absolute -top-4 left-8 z-30 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold text-brand-300 shadow-md backdrop-blur-md md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
            Odontograma FDI + IA Activa
          </div>
          <div className="pointer-events-none absolute -top-4 right-12 z-30 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold text-slate-300 shadow-md backdrop-blur-md md:flex">
            Esmalte &amp; Estética Digital
            <span className="rounded bg-emerald-900/60 px-1.5 py-0.5 text-[10px] text-emerald-400">HD</span>
          </div>

          <div className="px-4 sm:px-6">
            <HeroProductDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
