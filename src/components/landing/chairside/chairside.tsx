import { chairsideCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"
import { ChairsideTablet } from "./chairside-tablet"

/** ClinicFlow Chairside — the tablet experience used next to the dental chair. */
export function Chairside() {
  return (
    <section
      id="chairside"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #080e1c 0%, #0a1628 100%)" }}
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={chairsideCopy.eyebrow} heading={chairsideCopy.heading} text={chairsideCopy.text} />

        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          {/* Tablet */}
          <SectionReveal>
            <ChairsideTablet />
          </SectionReveal>

          {/* What the doctor has in front */}
          <SectionReveal>
            <div>
              <dl className="space-y-4">
                {chairsideCopy.features.map((feature) => (
                  <div key={feature.title} className="border-l-2 border-brand-500/40 pl-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">{feature.title}</dt>
                    <dd className="mt-1 text-[14px] leading-relaxed text-slate-300">{feature.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-balance text-[20px] font-black leading-snug tracking-tight text-white sm:text-[22px]">
                {chairsideCopy.highlight}
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
