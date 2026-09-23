import dynamic from "next/dynamic"
import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

const DayTimelineSteps = dynamic(() =>
  import("./day-timeline-steps").then((m) => m.DayTimelineSteps),
  {
    loading: () => (
      <div className="mx-auto max-w-[720px] space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    ),
  }
)

export function DayTimeline() {
  return (
    <section
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #061525 0%, #080e1c 100%)" }}
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[30%] h-[500px] w-[600px] -translate-x-1/2"
          style={{ background: "radial-gradient(circle, rgba(7,156,251,0.08), transparent 45%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-[850px] text-center lg:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              Recorrido completo
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
              Un día con {siteConfig.name}.
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
              Todo el flujo de trabajo conectado, desde el primer mensaje
              hasta la consulta terminada.
            </p>
          </div>
        </SectionReveal>

        <DayTimelineSteps />
      </div>
    </section>
  )
}
