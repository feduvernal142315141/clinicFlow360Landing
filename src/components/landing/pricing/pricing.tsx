import { plans } from "@/data/pricing"
import { leadsStatusLabel, pricingCopy } from "@/data/home"
import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

export function Pricing() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #0a1628 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[15%] h-[500px] w-[700px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              {pricingCopy.eyebrow}
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
              {pricingCopy.heading}
              <br />
              <span className="text-slate-400">{pricingCopy.headingMuted}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">{pricingCopy.text}</p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <ul className="grid items-stretch gap-5 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-6">
            {plans.map((plan) => (
              <li
                key={plan.slug}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-8 ${plan.highlighted ? "order-first lg:order-none lg:-my-5 lg:py-12" : ""}`}
                style={
                  plan.highlighted
                    ? {
                        background: "linear-gradient(180deg, rgba(56,189,248,0.14) 0%, rgba(56,189,248,0.04) 100%)",
                        border: "1.5px solid rgba(56,189,248,0.55)",
                        boxShadow: "0 0 60px rgba(56,189,248,0.16), 0 30px 80px rgba(0,0,0,0.4)",
                      }
                    : {
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-500 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.1em] text-white shadow-lg shadow-brand-500/40">
                    {plan.badge}
                  </span>
                )}

                <p className={`text-[13px] font-black uppercase tracking-[0.12em] ${plan.highlighted ? "text-brand-300" : "text-slate-300"}`}>
                  {plan.stage}
                </p>
                <h3 className={`mt-2 font-black tracking-tight text-white ${plan.highlighted ? "text-[28px]" : "text-[22px]"}`}>{plan.name}</h3>
                <p className="mt-1.5 min-h-[40px] text-[14px] leading-snug text-slate-400">{plan.description}</p>

                <p className="mt-5 flex items-end gap-1.5">
                  <span className="mb-2 text-[12px] font-medium text-slate-500">{pricingCopy.currency}</span>
                  <span className={`font-black leading-none tracking-tight text-white ${plan.highlighted ? "text-[60px]" : "text-[46px]"}`}>
                    ${plan.price}
                  </span>
                  <span className="mb-1.5 text-[14px] font-medium text-slate-500">{pricingCopy.period}</span>
                </p>

                <a
                  href={siteConfig.trialSignupPath}
                  className={`mt-6 block w-full rounded-xl py-3.5 text-center text-[14px] font-bold transition-all duration-200 ${
                    plan.highlighted
                      ? "btn-primary"
                      : "border border-white/10 text-slate-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {plan.ctaLabel}
                </a>

                <div className="my-6 h-px bg-white/[0.08]" />

                {plan.includesLabel && (
                  <p className="mb-3 text-[13px] font-bold text-white">{plan.includesLabel}</p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2.5 text-[14px] leading-snug text-slate-200">
                      <span className={`mt-0.5 font-bold ${plan.highlighted ? "text-brand-300" : "text-emerald-400"}`}>✓</span>
                      <span>
                        <span className={feature.detail ? "font-bold text-white" : ""}>{feature.name}</span>
                        {feature.leads && leadsStatusLabel && (
                          <span className="ml-2 rounded bg-amber-950/60 px-1.5 py-px align-middle text-[9px] font-bold uppercase tracking-wide text-amber-300">
                            {leadsStatusLabel}
                          </span>
                        )}
                        {feature.detail && <span className="mt-0.5 block text-[13px] text-slate-400">{feature.detail}</span>}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.capacity && (
                  <p className="mt-6 border-t border-white/[0.08] pt-5 text-[13px] leading-relaxed text-slate-400">
                    <span className="font-bold text-slate-200">{pricingCopy.capacityLabel}:</span> {plan.capacity}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[13px] text-slate-500 sm:mt-16">{pricingCopy.footnote}</p>
        </SectionReveal>
      </div>
    </section>
  )
}
