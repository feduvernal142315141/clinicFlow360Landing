import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"
import { DayTimelineSteps } from "./day-timeline-steps"

export function DayTimeline() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Un día con {siteConfig.name}.
            </h2>
            <p className="text-pretty mt-4 text-lg text-muted">
              Todo el flujo de trabajo conectado, desde el primer mensaje
              hasta la consulta terminada.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16">
          <DayTimelineSteps />
        </div>
      </div>
    </section>
  )
}
