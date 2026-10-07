import type { CSSProperties } from "react"
import { ecosystemCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"

/** "Todo conectado": the ten-step flow of the clinic and what it makes possible. */
export function Ecosystem() {
  const { steps, proofs } = ecosystemCopy

  return (
    <section id="ecosistema" className="relative border-b border-white/[0.06] px-4 py-20 sm:px-6 lg:py-24" style={{ background: "#080e1c" }}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={ecosystemCopy.eyebrow} heading={ecosystemCopy.heading} text={ecosystemCopy.text} />

        <SectionReveal>
          <ol className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-5 lg:flex lg:items-center lg:gap-1.5">
            {steps.map((step, index) => (
              <li key={step} className="flex min-w-0 items-center gap-1.5 lg:flex-1">
                <span
                  className="flow-step flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-2 py-3 text-center text-[12px] font-bold text-slate-200 lg:px-1 lg:text-[11px] xl:text-[12px]"
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
        </SectionReveal>

        <SectionReveal>
          <ul className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {proofs.map((proof) => (
              <li key={proof.title}>
                <a
                  href={proof.href}
                  className="block h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-brand-400/40 hover:bg-white/[0.04]"
                >
                  <h3 className="text-[15px] font-bold text-white">{proof.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{proof.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
