import dynamic from "next/dynamic"
import { aiCapabilities } from "@/data/features"
import { Check } from "lucide-react"
import { SectionReveal } from "../section-reveal"

const AIChatDemo = dynamic(() =>
  import("./ai-chat-demo").then((m) => m.AIChatDemo),
  {
    loading: () => (
      <div className="h-[420px] w-full max-w-[360px] animate-pulse rounded-[20px] bg-white/5" />
    ),
  }
)

export function AIReceptionist() {
  return (
    <section
      id="recepcion-ia"
      className="relative overflow-hidden px-6 py-24 lg:py-32"
      style={{ backgroundColor: "#061525" }}
    >
      {/* Radial blue illumination */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <SectionReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
                ClinicFlow AI
              </p>
              <h2
                className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.035em" }}
              >
                Una recepcionista que nunca deja a un paciente esperando.
              </h2>
              <p className="text-pretty mt-5 text-lg leading-relaxed text-brand-100/70">
                Atiende WhatsApp las 24 horas, conversa de forma natural y
                consulta la disponibilidad real de tu clínica antes de
                agendar.
              </p>

              {/* Capabilities */}
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aiCapabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm text-brand-100/80">{cap}</span>
                  </li>
                ))}
              </ul>

              {/* CTA — hidden until WhatsApp demo number exists (PEND-06) */}
            </div>
          </SectionReveal>

          {/* Animated chat demo */}
          <div className="flex justify-center lg:justify-end">
            <AIChatDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
