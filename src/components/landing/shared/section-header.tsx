import { SectionReveal } from "../section-reveal"

/** Centered eyebrow + heading + intro used by the home sections. */
export function SectionHeader({
  eyebrow,
  heading,
  text,
  className = "",
}: {
  eyebrow: string
  heading: React.ReactNode
  text?: string
  className?: string
}) {
  return (
    <SectionReveal>
      <div className={`mx-auto mb-12 max-w-3xl text-center lg:mb-16 ${className}`}>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
          {eyebrow}
        </div>
        <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
          {heading}
        </h2>
        {text && (
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">{text}</p>
        )}
      </div>
    </SectionReveal>
  )
}
