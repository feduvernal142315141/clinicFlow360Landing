import { SectionReveal } from "../section-reveal"
import { WhatsAppTimeline } from "./whatsapp-timeline"

export function WhatsAppAutomation() {
  return (
    <section className="px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[850px] text-center">
            <p
              className="mb-4 text-[12px] font-semibold uppercase text-brand-600"
              style={{ letterSpacing: "0.08em" }}
            >
              ● Automatización
            </p>
            <h2
              className="text-balance text-ink"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 680,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Tus pacientes reciben el mensaje correcto sin que recepción
              tenga que recordarlo.
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-16">
          <WhatsAppTimeline />
        </div>
      </div>
    </section>
  )
}
