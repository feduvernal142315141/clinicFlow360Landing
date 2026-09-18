import { SectionReveal } from "../section-reveal"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-700 to-brand-900 px-4 py-20 text-white sm:px-6 lg:py-24">
      {/* Dental SVG decoration — left */}
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-96 w-96 text-white opacity-10" aria-hidden="true">
        <svg className="h-full w-full -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z" strokeWidth="2" />
          <path d="M35 32 C35 26 42 25 50 25 C58 25 65 26 65 32 C65 42 58 48 50 48 C42 48 35 42 35 32 Z" strokeWidth="1.5" />
        </svg>
      </div>
      {/* Dental SVG — right */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-96 w-96 text-white opacity-10" aria-hidden="true">
        <svg className="h-full w-full rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <SectionReveal>
          <h2 className="text-balance text-[28px] font-black tracking-tight sm:text-[40px] lg:text-[48px]">
            Menos tiempo administrando.
            <br />
            Más tiempo atendiendo sonrisas.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-100 sm:text-[16px]">
            Despídete de la recepción saturada, llamadas perdidas y fichas en papel. Lleva tu clínica dental al siguiente nivel con un ecosistema clínico completo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#precios" className="w-full rounded-full bg-white px-8 py-4 text-[15px] font-bold text-brand-900 shadow-xl transition hover:bg-slate-100 active:scale-95 sm:w-auto">
              Probar ClinicFlow360 gratis 14 días
            </a>
            <button className="w-full rounded-full border border-white/30 px-8 py-4 text-[15px] font-bold text-white transition hover:bg-white/10 sm:w-auto">
              Solicitar demostración personalizada
            </button>
          </div>
          <p className="mt-6 text-[12px] font-medium text-brand-200/80">
            Configuración en 5 minutos · Sin descargas complejas · Soporte en español
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
