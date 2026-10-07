import type { CSSProperties } from "react"
import { ecosystemCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"

/** "Opera. Automatiza. Crece." — the three stages, over the flow that connects them. */
export function Ecosystem() {
  const { stages, steps } = ecosystemCopy

  return (
    <section id="ecosistema" className="relative border-b border-white/[0.06] px-4 py-20 sm:px-6 lg:py-24" style={{ background: "#080e1c" }}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={ecosystemCopy.eyebrow} heading={ecosystemCopy.heading} text={ecosystemCopy.text} />

        <SectionReveal>
          <ol className="mx-auto flex max-w-5xl flex-col items-stretch gap-3 md:flex-row md:items-stretch">
            {stages.map((stage, index) => (
              <li key={stage.title} className="flex flex-1 flex-col items-center gap-3 md:flex-row">
                <a
                  href={stage.href}
                  className="block w-full flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-brand-400/40 hover:bg-white/[0.04] md:h-full"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-300">{stage.plan}</p>
                  <h3 className="mt-1 text-[24px] font-black tracking-tight text-white sm:text-[28px]">{stage.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{stage.items.join(" · ")}</p>
                </a>
                {index < stages.length - 1 && (
                  <span aria-hidden="true" className="shrink-0 rotate-90 text-slate-600 md:rotate-0">→</span>
                )}
              </li>
            ))}
          </ol>
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto mt-14 max-w-6xl">
            <p className="mb-5 text-center text-[13px] font-semibold text-slate-400">{ecosystemCopy.flowCaption}</p>
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:flex lg:items-center lg:gap-1.5">
              {steps.map((step, index) => (
                <li key={step} className="flex min-w-0 items-center gap-1.5 lg:flex-1">
                  <span
                    className="flow-step flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-2 py-2.5 text-center text-[12px] font-bold text-slate-200 lg:px-1 lg:text-[11px] xl:text-[12px]"
                    style={{ "--flow-index": index, "--flow-count": steps.length } as CSSProperties}
                  >
                    <span className="font-mono text-[10px] font-medium text-brand-400/70 lg:hidden">{String(index + 1).padStart(2, "0")}</span>
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <span aria-hidden="true" className="hidden shrink-0 text-slate-600 lg:block">→</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
