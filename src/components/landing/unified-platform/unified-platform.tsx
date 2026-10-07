import { problemCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"

/** The problem, row by row: how each disconnected tool is resolved in ClinicFlow360. */
export function UnifiedPlatform() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 100%)" }}
    >
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400 sm:text-xs">
              {problemCopy.eyebrow}
            </p>
            <h2 className="headline-section text-balance text-white text-[26px] sm:text-[34px] lg:text-[40px]">
              {problemCopy.heading}
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
            {/* Column headers — desktop */}
            <div className="hidden grid-cols-[1fr_56px_1fr] border-b border-white/[0.06] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.12em] md:grid">
              <p className="text-slate-500">{problemCopy.beforeLabel}</p>
              <span />
              <p className="text-brand-300">{problemCopy.afterLabel}</p>
            </div>

            <ul>
              {problemCopy.rows.map((row, index) => (
                <li
                  key={row.before}
                  className={`grid gap-4 px-5 py-6 sm:px-8 md:grid-cols-[1fr_56px_1fr] md:items-center md:gap-0 ${
                    index > 0 ? "border-t border-white/[0.06]" : ""
                  }`}
                >
                  {/* Before — deliberately quiet */}
                  <div>
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 md:hidden">
                      {problemCopy.beforeLabelShort}
                    </p>
                    <p className="text-[15px] font-semibold leading-snug text-slate-400">{row.before}</p>
                    <p className="mt-1 text-[13px] leading-snug text-slate-500">{row.beforeDetail}</p>
                  </div>

                  <span aria-hidden="true" className="hidden justify-center text-slate-600 md:flex">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>

                  {/* After — the product answer */}
                  <a
                    href={row.href}
                    className="group flex items-center gap-3 rounded-2xl border border-brand-500/25 bg-brand-500/[0.07] px-4 py-3.5 transition-colors hover:border-brand-400/50 hover:bg-brand-500/[0.12]"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" aria-hidden="true" />
                    <span className="flex-1 text-[15px] font-bold leading-snug text-white">{row.after}</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-brand-300 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
