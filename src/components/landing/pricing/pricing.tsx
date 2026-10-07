import { comparison, plans } from "@/data/pricing"
import { acquisitionStatusLabel, pricingCopy } from "@/data/home"
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

                <p className="mt-2 flex items-center gap-2 text-[13px] font-semibold text-slate-200">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={plan.highlighted ? "text-brand-300" : "text-slate-400"} aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  {pricingCopy.doctorsLabel(plan.doctors)}
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
                        {feature.acquisition && acquisitionStatusLabel && (
                          <span className="ml-2 rounded bg-amber-950/60 px-1.5 py-px align-middle text-[9px] font-bold uppercase tracking-wide text-amber-300">
                            {acquisitionStatusLabel}
                          </span>
                        )}
                        {feature.detail && <span className="mt-0.5 block text-[13px] text-slate-400">{feature.detail}</span>}
                      </span>
                    </li>
                  ))}
                </ul>


              </li>
            ))}
          </ul>
        </SectionReveal>

        {/* Extra doctors — capacity is never the reason to change plan */}
        <SectionReveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 text-center sm:mt-14 sm:flex-row sm:justify-center sm:gap-2">
            <p className="text-[15px] font-bold text-white">{pricingCopy.extraDoctorsTitle}</p>
            <p className="text-[15px] text-slate-300">{pricingCopy.extraDoctorsText}</p>
          </div>
        </SectionReveal>

        {/* Full comparison */}
        <SectionReveal>
          <details className="group mx-auto mt-8 max-w-4xl">
            <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[14px] font-semibold text-slate-200 transition-colors hover:bg-white/[0.08] [&::-webkit-details-marker]:hidden">
              {pricingCopy.compareLabel}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-open:rotate-180" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <table className="w-full table-fixed text-left text-[13px] sm:text-[14px]">
                <caption className="sr-only">{pricingCopy.compareCaption}</caption>
                <colgroup>
                  <col />
                  <col className="w-[70px] sm:w-[120px]" />
                  <col className="w-[70px] sm:w-[120px]" />
                  <col className="w-[70px] sm:w-[120px]" />
                </colgroup>
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-500 sm:px-5">{pricingCopy.featureColumn}</th>
                    {plans.map((plan) => (
                      <th key={plan.slug} scope="col" className={`px-0.5 py-3 text-center text-[12px] font-bold sm:px-1 sm:text-[14px] ${plan.highlighted ? "text-brand-300" : "text-white"}`}>
                        {plan.name}
                        <span className="block text-[11px] font-medium text-slate-500">${plan.price}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                {comparison.map((group) => (
                  <tbody key={group.group}>
                    <tr>
                      <th scope="colgroup" colSpan={4} className="bg-white/[0.03] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 sm:px-5">
                        {group.group}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-white/[0.05]">
                        <th scope="row" className="px-3 py-2.5 font-medium text-slate-300 sm:px-5">
                          {row.feature}
                          {row.acquisition && acquisitionStatusLabel && (
                            <span className="mt-1 block w-fit whitespace-nowrap rounded bg-amber-950/60 px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-amber-300 sm:ml-2 sm:mt-0 sm:inline sm:align-middle">
                              {acquisitionStatusLabel}
                            </span>
                          )}
                        </th>
                        {row.values.map((value, index) => (
                          <td key={index} className="px-1 py-2.5 text-center">
                            {typeof value === "string" ? (
                              <span className="text-[12px] font-semibold text-slate-200 sm:text-[13px]">{value}</span>
                            ) : value ? (
                              <span className="font-bold text-emerald-400">✓<span className="sr-only">Incluido</span></span>
                            ) : (
                              <span className="text-slate-700">—<span className="sr-only">No incluido</span></span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </details>
        </SectionReveal>

        <SectionReveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed text-slate-500">
            {pricingCopy.footnote} {pricingCopy.usageNote}
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
