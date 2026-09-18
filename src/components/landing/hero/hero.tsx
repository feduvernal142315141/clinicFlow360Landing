import { HeroCopy } from "./hero-copy"
import { HeroProductDemo } from "./hero-product-demo"
import { DentalDecorations } from "./dental-decorations"

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-noise relative overflow-hidden border-b border-slate-200"
      style={{
        paddingTop: 80,
        background: `
          radial-gradient(ellipse 70% 45% at 50% 25%, rgba(7,156,251,0.10), transparent),
          radial-gradient(ellipse 40% 40% at 72% 55%, rgba(45,212,191,0.05), transparent),
          linear-gradient(180deg, #F8FBFF 0%, #F0F6FF 40%, #F8FAFC 100%)
        `,
      }}
    >
      {/* Dental SVG decorations */}
      <DentalDecorations />

      {/* Grid pattern */}
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10">
        <div className="px-4 pt-8 sm:px-6 sm:pt-12 lg:pt-14">
          <HeroCopy />
        </div>

        {/* Product stage — floating badges + composition */}
        <div className="relative mt-10 sm:mt-14 lg:mt-16">
          {/* Floating product badges — desktop only */}
          <div className="pointer-events-none absolute -top-4 left-8 z-30 hidden items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-[11px] font-bold text-brand-700 shadow-md backdrop-blur-md md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            🦷 Odontograma FDI + IA Activa
          </div>
          <div className="pointer-events-none absolute -top-4 right-12 z-30 hidden items-center gap-2 rounded-full border border-brand-200 bg-white/90 px-3.5 py-1.5 text-[11px] font-bold text-slate-800 shadow-md backdrop-blur-md md:flex">
            ✨ Esmalte &amp; Estética Digital
            <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] text-emerald-700">HD</span>
          </div>

          <div className="px-4 sm:px-6">
            <HeroProductDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
