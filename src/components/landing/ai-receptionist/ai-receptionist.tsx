import { SectionReveal } from "../section-reveal"
import { AIChatDemo } from "./ai-chat-demo"

export function AIReceptionist() {
  return (
    <section id="recepcion-ia" className="relative overflow-hidden bg-[#0B1329] px-4 py-20 text-white sm:px-6 lg:py-28">
      {/* Glows */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-500/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-[20%] h-72 w-72 rounded-full bg-emerald-500/8 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        {/* Header — centered */}
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-900/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              ClinicFlow AI Receptionist
            </div>
            <h2 className="text-balance text-[28px] font-black leading-tight tracking-tight text-white sm:text-[36px] lg:text-[44px]">
              Una recepcionista que nunca deja a un paciente esperando.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
              Atiende WhatsApp las 24 horas, responde dudas sobre tratamientos y consulta la disponibilidad exacta de tus sillones antes de agendar.
            </p>
          </div>
        </SectionReveal>

        {/* Chat — centered, dominant */}
        <SectionReveal>
          <div className="mx-auto max-w-[680px]">
            <AIChatDemo />
          </div>
        </SectionReveal>

        {/* Capabilities — horizontal strip, not cards */}
        <SectionReveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] sm:mt-12 sm:gap-x-6">
            {[
              "Disponibilidad en tiempo real",
              "Reagendamiento autónomo",
              "Detección de urgencias",
              "Políticas de tu clínica",
            ].map((cap, i) => (
              <span key={cap} className="flex items-center gap-2">
                {i > 0 && <span className="hidden text-slate-700 sm:inline">·</span>}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <circle cx="7" cy="7" r="6" stroke="#2DD4BF" strokeWidth="1.5" />
                  <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-slate-300">{cap}</span>
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
