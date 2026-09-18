import { SectionReveal } from "../section-reveal"
import { ProductNavigator } from "./product-navigator"

export function ProductShowcase() {
  return (
    <section id="producto" className="relative px-4 py-20 sm:px-6 lg:py-24" style={{ background: "#F8FAFC" }}>
      {/* Dental decoration — top right */}
      <div className="pointer-events-none absolute right-4 top-10 hidden h-72 w-72 text-brand-500/[0.06] opacity-75 lg:block" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.75" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 sm:text-xs">
              Plataforma Todo en Uno
            </p>
            <h2 className="headline-section text-balance text-[28px] sm:text-[36px] lg:text-[42px]">
              Todo lo que ocurre en tu clínica, conectado en tiempo real.
            </h2>
            <p className="mt-4 text-[15px] text-muted sm:text-base">
              Una visión unificada que sincroniza recepción, doctores en gabinete, odontograma y WhatsApp sin duplicar trabajo.
            </p>
          </div>
        </SectionReveal>

        <ProductNavigator />
      </div>
    </section>
  )
}
