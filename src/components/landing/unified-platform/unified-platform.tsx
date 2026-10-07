import Image from "next/image"
import { problemCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"

export function UnifiedPlatform() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400 sm:text-xs">
              {problemCopy.eyebrow}
            </p>
            <h2 className="headline-section text-balance text-white text-[26px] sm:text-[34px] lg:text-[40px]">
              {problemCopy.heading}
            </h2>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* BEFORE — disconnected tools */}
          <SectionReveal>
            <div className="mb-6 sm:mb-8">
              <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-red-400">
                {problemCopy.beforeLabel}
              </p>
              <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                {problemCopy.pains.map((pain) => (
                  <li key={pain.title} className="rounded-xl border border-red-500/20 bg-red-950/30 p-3 text-center sm:p-4">
                    <p className="text-[12px] font-semibold text-slate-200 sm:text-[13px]">{pain.title}</p>
                    <p className="mt-1 text-[11px] text-red-300/80 sm:text-[12px]">{pain.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <div className="flex flex-col items-center gap-1 py-3 sm:py-4" aria-hidden="true">
            <div className="h-8 w-px bg-gradient-to-b from-red-500/40 to-brand-400/40 sm:h-10" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-[12px] font-bold text-white shadow-md shadow-brand-600/30 sm:h-10 sm:w-10 sm:text-[14px]">
              ↓
            </div>
            <div className="h-4 w-px bg-brand-400/40 sm:h-6" />
          </div>

          {/* AFTER — one system */}
          <SectionReveal>
            <div>
              <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400">
                {problemCopy.afterLabel}
              </p>
              <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-tier-3 sm:rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <Image
                  src="/landing/screenshots/dashboard-dark.webp"
                  alt={problemCopy.screenshotAlt}
                  width={1400}
                  height={708}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="w-full"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
