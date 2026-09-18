import dynamic from "next/dynamic"
import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

const DayTimelineSteps = dynamic(() =>
  import("./day-timeline-steps").then((m) => m.DayTimelineSteps),
  {
    loading: () => (
      <div className="mx-auto max-w-[640px] space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 animate-pulse rounded-[14px] bg-white/5" />
        ))}
      </div>
    ),
  }
)

export function DayTimeline() {
  return (
    <>
      {/* Transition light → dark */}
      <div style={{ height: 80, background: "linear-gradient(to bottom, #FFFFFF, #0a1e30 60%, #061525)" }} />

      <section
        className="relative overflow-hidden px-6"
        style={{ background: "#061525", paddingTop: 80, paddingBottom: 160 }}
      >
        {/* Subtle glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-[30%] h-[500px] w-[600px] -translate-x-1/2" style={{ background: "radial-gradient(circle, rgba(7,156,251,0.10), transparent 45%)", filter: "blur(80px)" }} />
        </div>

        <div className="relative mx-auto max-w-[1280px]">
          <SectionReveal>
            <div className="mx-auto max-w-[850px] text-center">
              <p className="mb-5 text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.08em", color: "#38BDF8" }}>
                ● Recorrido completo
              </p>
              <h2
                className="text-balance text-white"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 680, lineHeight: 1.04, letterSpacing: "-0.04em" }}
              >
                Un día con {siteConfig.name}.
              </h2>
              <p className="text-pretty mx-auto mt-5 max-w-[600px] text-[18px] leading-relaxed" style={{ color: "#94A3B8" }}>
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
    </>
  )
}
