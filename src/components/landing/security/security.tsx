import { securityCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"

export function Security() {
  return (
    <section id="seguridad" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28" style={{ background: "linear-gradient(180deg, #0a1628 0%, #080e1c 100%)" }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[20%] h-[400px] w-[600px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(45,212,191,0.06) 0%, transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={securityCopy.eyebrow} heading={securityCopy.heading} text={securityCopy.text} />

        <SectionReveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {securityCopy.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl p-6 sm:p-7"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
