import { rxCopy } from "@/data/home"
import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"
import { FlowSteps } from "../shared/flow-steps"

/** ClinicFlow RX — imaging that lands in the patient record on its own. */
export function ClinicFlowRX() {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(rxCopy.ctaSubject)}`

  return (
    <section
      id="rx"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 100%)" }}
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              {rxCopy.eyebrow}
            </span>

            <h2 className="text-balance mt-5 text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
              {rxCopy.heading}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">{rxCopy.text}</p>

            <ul className="mt-7 space-y-1.5 text-[17px] font-bold leading-snug text-white sm:text-[19px]">
              {rxCopy.negatives.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <a
              href={mailto}
              className="mt-8 inline-flex h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {rxCopy.cta}
            </a>
            <p className="mt-3 max-w-md text-[12px] leading-relaxed text-slate-500">{rxCopy.note}</p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <FlowSteps steps={rxCopy.flow} horizontalFrom="never" />
        </SectionReveal>
      </div>
    </section>
  )
}
