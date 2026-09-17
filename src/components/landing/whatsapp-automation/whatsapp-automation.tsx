import { SectionReveal } from "../section-reveal"
import { WhatsAppTimeline } from "./whatsapp-timeline"

export function WhatsAppAutomation() {
  return (
    <section className="bg-surface-soft px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <SectionReveal>
            <div>
              <h2
                className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.035em" }}
              >
                Tus pacientes reciben el mensaje correcto sin que recepción
                tenga que recordarlo.
              </h2>
              <p className="text-pretty mt-5 text-lg leading-relaxed text-muted">
                Configura recordatorios automáticos por WhatsApp y deja que
                el sistema se encargue de confirmar cada cita.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Recordatorios",
                  "Confirmaciones",
                  "Reagendamientos",
                  "Seguimiento",
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center rounded-full border border-border-light bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Timeline visual */}
          <SectionReveal>
            <WhatsAppTimeline />
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
