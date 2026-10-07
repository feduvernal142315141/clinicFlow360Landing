import type { CSSProperties } from "react"
import { acquisitionCopy, acquisitionStatusLabel } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"

function CardLabel({ children }: { children: string }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-300">{children}</p>
}

/** ClinicFlow Elite — patient acquisition: Lead CRM, Sites, domain, email and lead origin. */
export function Acquisition() {
  const { receptionist, pipeline, sites, identity, origins } = acquisitionCopy

  return (
    <section
      id="adquisicion"
      className="relative overflow-hidden border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #080e1c 0%, #0a1628 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[12%] h-[460px] w-[760px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(7,156,251,0.08), transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={acquisitionCopy.eyebrow}
          heading={acquisitionCopy.heading}
          text={acquisitionCopy.text}
          className={acquisitionStatusLabel ? "mb-6 lg:mb-8" : ""}
        />

        {acquisitionStatusLabel && (
          <p className="mx-auto mb-12 flex w-fit max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-amber-400/30 bg-amber-950/30 px-4 py-2 text-center text-[12px] text-amber-200 lg:mb-14">
            <span className="font-bold uppercase tracking-[0.1em] text-amber-300">{acquisitionStatusLabel}</span>
            {acquisitionCopy.statusNote}
          </p>
        )}

        {/* Pro vs Elite: the same receptionist, a longer flow */}
        <SectionReveal>
          <div className="mb-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8 lg:mb-6">
            <h3 className="text-balance max-w-2xl text-[20px] font-black leading-snug tracking-tight text-white sm:text-[24px]">
              {receptionist.title}
            </h3>
            <dl className="mt-6 space-y-5">
              {receptionist.flows.map((flow, flowIndex) => {
                const isElite = flowIndex === receptionist.flows.length - 1
                return (
                  <div key={flow.plan} className="grid gap-3 border-t border-white/[0.06] pt-5 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-6">
                    <dt>
                      <span className={`text-[12px] font-black uppercase tracking-[0.12em] ${isElite ? "text-brand-300" : "text-slate-400"}`}>{flow.plan}</span>
                      <span className="mt-1 block text-[14px] leading-snug text-slate-300">{flow.text}</span>
                    </dt>
                    <dd>
                      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] font-medium text-slate-300">
                        {flow.steps.map((step, index) => (
                          <li key={step} className="flex items-center gap-2">
                            {index > 0 && <span className="text-slate-600" aria-hidden="true">→</span>}
                            <span
                              className={`rounded-full border px-3 py-1.5 ${
                                isElite && index === flow.steps.length - 1
                                  ? "border-emerald-500/30 bg-emerald-950/40 text-emerald-300"
                                  : isElite
                                    ? "border-brand-500/25 bg-brand-500/[0.07] text-white"
                                    : "border-white/[0.08] bg-white/[0.04]"
                              }`}
                            >
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </SectionReveal>

        {/* Lead CRM pipeline */}
        <SectionReveal>
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8">
            <CardLabel>{pipeline.label}</CardLabel>
            <h3 className="text-balance mt-3 max-w-2xl text-[20px] font-black leading-snug tracking-tight text-white sm:text-[24px]">
              {pipeline.title}
            </h3>

            <div role="img" aria-label={pipeline.boardLabel} className="scrollbar-hide -mx-5 mt-6 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <ol className="flex min-w-[820px] gap-3 lg:min-w-0">
                {pipeline.columns.map((column, index) => (
                  <li key={column.stage} className="flex-1">
                    <p
                      className="flow-step rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-300"
                      style={{ "--flow-index": index, "--flow-count": pipeline.columns.length } as CSSProperties}
                    >
                      {column.stage}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {column.leads.map((lead) => (
                        <li key={lead.name} className="rounded-xl border border-white/[0.08] bg-[#0b1626] p-3">
                          <p className="text-[13px] font-bold text-white">{lead.name}</p>
                          <p className="text-[12px] text-slate-400">{lead.interest}</p>
                          <p className="mt-2 inline-block rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-slate-300">
                            {lead.origin}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-[1.3fr_1fr] lg:gap-6">
          {/* ClinicFlow Sites */}
          <SectionReveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8">
              <CardLabel>{sites.label}</CardLabel>
              <h3 className="text-balance mt-3 text-[22px] font-black leading-tight tracking-tight text-white sm:text-[26px]">{sites.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{sites.text}</p>

              {/* Site mock: the clinic page and its form */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1626]" aria-hidden="true">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="h-2 w-2 rounded-full bg-slate-600" />
                  <span className="ml-2 flex-1 truncate rounded-md border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                    {sites.domain}
                  </span>
                </div>
                <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
                  <div>
                    <p className="text-[16px] font-black leading-tight text-white">{sites.siteName}</p>
                    <p className="mt-1 text-[12px] text-slate-400">{sites.siteTagline}</p>
                    <div className="mt-4 space-y-1.5">
                      <span className="block h-2 w-[85%] rounded-full bg-white/[0.07]" />
                      <span className="block h-2 w-[70%] rounded-full bg-white/[0.07]" />
                      <span className="block h-2 w-[55%] rounded-full bg-white/[0.07]" />
                    </div>
                  </div>
                  <div className="space-y-2 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
                    {sites.formFields.map((field) => (
                      <span key={field} className="block rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-500">
                        {field}
                      </span>
                    ))}
                    <span className="block rounded-md bg-brand-600 px-2.5 py-1.5 text-center text-[11px] font-bold text-white">{sites.formAction}</span>
                  </div>
                </div>
              </div>

              <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-[12px] font-medium text-slate-300">
                {sites.flow.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    {index > 0 && <span className="text-slate-600" aria-hidden="true">→</span>}
                    <span className={`rounded-full border px-3 py-1.5 ${index === sites.flow.length - 1 ? "border-emerald-500/30 bg-emerald-950/40 text-emerald-300" : "border-white/[0.08] bg-white/[0.04]"}`}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </SectionReveal>

          {/* Domain, email and existing website */}
          <SectionReveal className="h-full">
            <ul className="flex h-full flex-col gap-5 lg:gap-6">
              {identity.map((item) => (
                <li key={item.title} className="flex-1 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
                  <h3 className="text-[17px] font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{item.text}</p>
                  {"example" in item && (
                    <p className="mt-3 inline-block max-w-full truncate rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-[12px] text-brand-200">
                      {item.example}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>

        {/* Lead origin + what Elite does not include */}
        <SectionReveal>
          <div className="mt-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-8 lg:mt-6">
            <h3 className="text-[17px] font-bold text-white">{origins.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {origins.items.map((origin) => (
                <li key={origin} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300">
                  {origin}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/[0.06] pt-5 text-[13px] leading-relaxed text-slate-400">{acquisitionCopy.disclaimer}</p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-balance text-[24px] font-black leading-tight tracking-tight text-white sm:text-[32px]">{acquisitionCopy.closing}</p>
            <a
              href="#precios"
              className="mt-7 inline-flex h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              {acquisitionCopy.cta}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
