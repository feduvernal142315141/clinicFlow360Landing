import { receptionistCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"
import { FlowSteps } from "../shared/flow-steps"
import { AIChatDemo } from "./ai-chat-demo"

export function AIReceptionist() {
  return (
    <section id="recepcion-ia" className="relative overflow-hidden bg-[#0B1329] px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-500/15 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-[20%] h-72 w-72 rounded-full bg-emerald-500/8 blur-[100px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={receptionistCopy.eyebrow} heading={receptionistCopy.heading} text={receptionistCopy.text} />

        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
          {/* Conversation */}
          <SectionReveal>
            <AIChatDemo />
          </SectionReveal>

          {/* What happens behind the conversation */}
          <SectionReveal>
            <div>
              <FlowSteps steps={receptionistCopy.flow} horizontalFrom="never" />

              <ul className="mt-8 flex flex-wrap gap-2">
                {receptionistCopy.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
