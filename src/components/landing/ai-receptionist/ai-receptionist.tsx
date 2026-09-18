import { SectionReveal } from "../section-reveal"
import { AIChatDemo } from "./ai-chat-demo"

const capabilities = [
  { title: "Disponibilidad en tiempo real", detail: "Verifica la agenda del doctor específico antes de ofrecer horarios." },
  { title: "Reagendamiento autónomo", detail: "Permite al paciente cambiar su cita sin intervención humana." },
  { title: "Detección de urgencias", detail: "Prioriza dolor agudo o fracturas y notifica al odontólogo de guardia." },
  { title: "Políticas de tu clínica", detail: "Se entrena con tus indicaciones, precios orientativos y recomendaciones." },
] as const

export function AIReceptionist() {
  return (
    <section id="recepcion-ia" className="relative overflow-hidden bg-[#0B1329] px-4 py-20 text-white sm:px-6 lg:py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy — left */}
          <div className="space-y-6 lg:col-span-6">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-900/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">
                <span className="h-2 w-2 rounded-full bg-brand-400" />
                ClinicFlow AI Receptionist
              </div>
              <h2 className="headline-section text-balance mt-4 text-[28px] leading-tight text-white sm:text-[36px] lg:text-[44px]">
                Una recepcionista que nunca deja a un paciente esperando.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-300 sm:text-base">
                Atiende WhatsApp las 24 horas del día, conversa de manera cálida y natural, responde dudas sobre precios o tratamientos y consulta la disponibilidad exacta de tus sillones dentales antes de agendar.
              </p>

              {/* Capability cards */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-4">
                    <div className="text-[13px] font-bold text-brand-400">{cap.title}</div>
                    <div className="mt-1 text-[11px] text-slate-400 sm:text-[12px]">{cap.detail}</div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Chat simulator — right */}
          <div className="lg:col-span-6">
            <AIChatDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
