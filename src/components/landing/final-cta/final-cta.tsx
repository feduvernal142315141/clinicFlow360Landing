import { SectionReveal } from "../section-reveal"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:py-32" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0c2040 40%, #0a1628 100%)" }}>
      {/* Dental SVG decoration — left */}
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-[440px] w-[440px] text-brand-400/[0.06]" aria-hidden="true">
        <svg className="h-full w-full -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z" strokeWidth="1.5" />
          <path d="M35 32 C35 26 42 25 50 25 C58 25 65 26 65 32 C65 42 58 48 50 48 C42 48 35 42 35 32 Z" strokeWidth="1" />
        </svg>
      </div>
      {/* Dental SVG — right */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-[440px] w-[440px] text-brand-400/[0.06]" aria-hidden="true">
        <svg className="h-full w-full rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M28 20 C20 20 15 32 16 48 C17 62 23 85 34 85 C39 85 43 72 50 72 C57 72 61 85 66 85 C77 85 83 62 84 48 C85 32 80 20 72 20 C64 20 58 28 50 28 C42 28 36 20 28 20 Z" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Central glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(3,126,204,0.12) 0%, transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <SectionReveal>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            14 días gratis — sin tarjeta
          </div>

          <h2
            className="text-balance text-white"
            style={{ fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 780, lineHeight: 1.06, letterSpacing: "-0.04em" }}
          >
            Menos tiempo administrando.
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 bg-clip-text text-transparent">
              Más tiempo atendiendo sonrisas.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
            Despídete de la recepción saturada, llamadas perdidas y fichas en papel.
            Lleva tu clínica dental al siguiente nivel con un ecosistema clínico completo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#precios"
              className="btn-primary inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-full px-8 text-[15px] font-bold sm:w-auto"
            >
              Probar ClinicFlow360 gratis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 text-[15px] font-bold text-white transition-all hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
            >
              Solicitar demostración
            </a>
          </div>

          {/* Trust microcopy */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-slate-500">
            {[
              "Configuración en 5 min",
              "Sin descargas",
              "Soporte en español",
              "Cancela cuando quieras",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-1.5">
                {i > 0 && <span className="hidden text-slate-700 sm:inline">·</span>}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-emerald-500/60">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4 6.5L5.5 8L8 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
