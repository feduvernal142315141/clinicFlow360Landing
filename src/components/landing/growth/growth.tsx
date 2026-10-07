import { growthCopy, leadsStatusLabel } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"
import { FlowSteps } from "../shared/flow-steps"
import { GrowthStory, type StoryStep } from "./growth-story"

function Track({
  tag,
  plan,
  status,
  title,
  text,
  story,
  conversion,
  microcopy,
  children,
}: {
  tag: string
  plan: string
  status?: string | null
  title: string
  text: string
  story: readonly StoryStep[]
  conversion?: readonly string[]
  microcopy: string
  children: React.ReactNode
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em]">
        <span className="text-brand-300">{tag}</span>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-slate-300">{plan}</span>
        {status && (
          <span className="rounded-full border border-amber-400/30 bg-amber-950/40 px-2.5 py-1 text-amber-300">{status}</span>
        )}
      </div>
      <h3 className="text-balance mt-4 text-[24px] font-black leading-tight tracking-tight text-white sm:text-[28px]">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{text}</p>

      <div className="mt-7 rounded-2xl border border-white/[0.06] bg-black/20 p-4 sm:p-5">
        <GrowthStory steps={story} conversion={conversion} label={`${growthCopy.demoLabel}: ${title}`} />
      </div>

      <div className="mt-7 flex-1">{children}</div>

      <p className="mt-7 border-t border-white/[0.06] pt-5 text-[15px] font-bold text-white">{microcopy}</p>
    </article>
  )
}

/** ClinicFlow Growth — win back existing patients, and turn new leads into patients. */
export function Growth() {
  const { reactivation, leads, campaigns } = growthCopy

  return (
    <section
      id="growth"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #080e1c 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[18%] h-[480px] w-[760px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(7,156,251,0.08), transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={growthCopy.eyebrow} heading={growthCopy.heading} text={growthCopy.text} />

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          <SectionReveal className="h-full">
            <Track
              tag={reactivation.tag}
              plan={reactivation.plan}
              title={reactivation.title}
              text={reactivation.text}
              story={reactivation.story}
              microcopy={reactivation.microcopy}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{reactivation.footerTitle}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {reactivation.categories.map((category) => (
                  <li key={category} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300">
                    {category}
                  </li>
                ))}
              </ul>
            </Track>
          </SectionReveal>

          <SectionReveal className="h-full">
            <Track
              tag={leads.tag}
              plan={leads.plan}
              status={leadsStatusLabel}
              title={leads.title}
              text={leads.text}
              story={leads.story}
              conversion={leads.conversion}
              microcopy={leads.microcopy}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{leads.footerTitle}</p>
              <dl className="mt-3 space-y-2">
                {leads.temperatures.map((temperature) => (
                  <div key={temperature.label} className="flex items-baseline gap-3 text-[13px]">
                    <dt className="flex w-[92px] shrink-0 items-center gap-1.5 font-bold text-white">
                      <span aria-hidden="true">{temperature.icon}</span>
                      {temperature.label}
                    </dt>
                    <dd className="text-slate-400">{temperature.text}</dd>
                  </div>
                ))}
              </dl>
            </Track>
          </SectionReveal>
        </div>

        {/* Campaigns and segmentation: what they are for */}
        <SectionReveal>
          <div className="mt-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 lg:mt-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
              <div>
                <h3 className="text-[24px] font-black leading-tight tracking-tight text-white sm:text-[28px]">{campaigns.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{campaigns.text}</p>
              </div>
              <ul className="space-y-2.5 text-[14px] text-slate-300">
                {campaigns.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 font-bold text-emerald-400">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <FlowSteps steps={campaigns.flow} horizontalFrom="lg" className="mt-8" />
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-balance text-[24px] font-black leading-tight tracking-tight text-white sm:text-[32px]">{growthCopy.closing}</p>
            <a
              href="#precios"
              className="mt-7 inline-flex h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {growthCopy.cta}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
