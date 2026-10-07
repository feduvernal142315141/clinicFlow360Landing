import { financeCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { FlowSteps } from "../shared/flow-steps"
import { ScreenshotFrame } from "../shared/screenshot-frame"

/** Finance: from the treatment to the income, tied to the patient. */
export function Operations() {
  return (
    <section
      id="finanzas"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0d1a30 0%, #0a1628 100%)" }}
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
        <SectionReveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              {financeCopy.eyebrow}
            </span>
            <h2 className="text-balance mt-5 text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
              {financeCopy.heading}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">{financeCopy.text}</p>

            <ul className="mt-7 space-y-2.5 text-[14px] text-slate-300">
              {financeCopy.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>

        <SectionReveal>
          <ScreenshotFrame
            src={financeCopy.screenshot.src}
            alt={financeCopy.screenshot.alt}
            caption={financeCopy.screenshot.caption}
            sizes="(min-width: 1024px) 660px, 100vw"
          />
        </SectionReveal>
      </div>

      <SectionReveal>
        <FlowSteps steps={financeCopy.flow} horizontalFrom="md" className="relative mx-auto mt-12 max-w-6xl" />
      </SectionReveal>
    </section>
  )
}
