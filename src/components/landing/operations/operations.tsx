import { operationsCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"
import { FlowSteps, type FlowStep } from "../shared/flow-steps"

function OperationsCard({
  title,
  text,
  flow,
  points,
  children,
}: {
  title: string
  text: string
  flow: readonly FlowStep[]
  points: readonly string[]
  children?: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
      <h3 className="text-balance text-[22px] font-black leading-tight tracking-tight text-white sm:text-[26px]">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{text}</p>

      <FlowSteps steps={flow} horizontalFrom="never" className="mt-7" />

      {children}

      <ul className="mt-7 space-y-2.5 text-[14px] text-slate-300">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <span className="mt-0.5 font-bold text-emerald-400">✓</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Finance and patient communication: what happens after the chair. */
export function Operations() {
  const { finance, campaigns } = operationsCopy

  return (
    <section
      id="administracion"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0d1a30 0%, #0a1628 100%)" }}
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={operationsCopy.eyebrow} heading={operationsCopy.heading} />

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <SectionReveal className="h-full">
            <OperationsCard title={finance.title} text={finance.text} flow={finance.flow} points={finance.points} />
          </SectionReveal>

          <SectionReveal className="h-full">
            <OperationsCard title={campaigns.title} text={campaigns.text} flow={campaigns.flow} points={campaigns.points}>
              <div className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{campaigns.segmentsTitle}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {campaigns.segments.map((segment) => (
                    <li key={segment} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300">
                      {segment}
                    </li>
                  ))}
                </ul>
              </div>
            </OperationsCard>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
