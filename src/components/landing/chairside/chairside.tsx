import Image from "next/image"
import { chairsideCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"

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
            <div
              className="rounded-[22px] border-[8px] border-[#141a24] bg-black sm:rounded-[34px] sm:border-[12px]"
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 100px rgba(0,0,0,0.5)" }}
            >
              <div className="overflow-hidden rounded-[14px] sm:rounded-[22px]">
                <Image
                  src="/landing/screenshots/odontograma-dark.webp"
                  alt={chairsideCopy.screenshotAlt}
                  width={1400}
                  height={714}
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="w-full"
                />
              </div>
            </div>
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
