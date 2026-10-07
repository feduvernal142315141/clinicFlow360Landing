import { voiceCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"
import { VoiceDemo } from "./voice-demo"

/** ClinicFlow Voice — hands-free odontogram, shown acting on real commands. */
export function VoiceSection() {
  return (
    <section
      id="voice"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #060d1b 0%, #0a1628 50%, #080e1c 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[25%] h-[520px] w-[760px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(7,156,251,0.10), transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={voiceCopy.eyebrow} heading={voiceCopy.heading} text={voiceCopy.text} />

        <SectionReveal>
          <VoiceDemo />
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-balance text-[24px] font-black leading-tight tracking-tight text-white sm:text-[32px]">
              {voiceCopy.support}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-400">{voiceCopy.supportText}</p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2">
              {voiceCopy.badges.map((badge) => (
                <li key={badge} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300">
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
