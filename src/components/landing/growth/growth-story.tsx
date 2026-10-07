"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"
import { useReducedMotion } from "@/lib/motion/reduced-motion"

export type StoryStep =
  | { kind: "card"; eyebrow: string; title: string; lines: readonly string[]; badge: string; action: string }
  | { kind: "outbound" | "inbound"; from: string; text: string }
  | { kind: "system"; text: string }
  | { kind: "result"; text: string }

const STEP_MS = 1500
const HOLD_MS = 4200

/**
 * A short product story that reveals one step at a time while in view.
 * Every step keeps its place from the start, so nothing shifts as it plays.
 */
export function GrowthStory({ steps, conversion, label }: { steps: readonly StoryStep[]; conversion?: readonly string[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px" })
  const reducedMotion = useReducedMotion()
  const total = steps.length + (conversion ? 1 : 0)
  const [shown, setShown] = useState(1)

  useEffect(() => {
    if (!inView || reducedMotion) return
    const timer = setTimeout(() => setShown((current) => (current >= total ? 1 : current + 1)), shown >= total ? HOLD_MS : STEP_MS)
    return () => clearTimeout(timer)
  }, [inView, reducedMotion, shown, total])

  const visible = (index: number) => reducedMotion || index < shown
  const reveal = (index: number) =>
    `transition-all duration-500 ${visible(index) ? "translate-y-0 opacity-100" : "translate-y-1 opacity-[0.14]"}`

  return (
    <div ref={ref} role="img" aria-label={label} className="space-y-3">
      {steps.map((step, index) => {
        if (step.kind === "card") {
          return (
            <div key={index} className={`rounded-2xl border border-white/10 bg-[#0b1626] p-4 ${reveal(index)}`}>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-300">{step.eyebrow}</p>
              <div className="mt-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-[16px] font-bold text-white">{step.title}</p>
                  {step.lines.map((line) => (
                    <p key={line} className="text-[12px] text-slate-400">{line}</p>
                  ))}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                  {step.badge}
                </span>
              </div>
              <span className="mt-3 inline-block rounded-lg bg-brand-600 px-3 py-1.5 text-[12px] font-bold text-white">{step.action}</span>
            </div>
          )
        }
        if (step.kind === "outbound" || step.kind === "inbound") {
          const outbound = step.kind === "outbound"
          return (
            <div key={index} className={`flex ${outbound ? "justify-start" : "justify-end"} ${reveal(index)}`}>
              <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${outbound ? "rounded-tl-none border border-slate-700 bg-slate-800 text-slate-200" : "rounded-tr-none bg-[#005C4B] text-white"}`}>
                <p className={`mb-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${outbound ? "text-emerald-400" : "text-emerald-200"}`}>{step.from}</p>
                {step.text}
              </div>
            </div>
          )
        }
        if (step.kind === "system") {
          return (
            <p key={index} className={`flex items-center justify-center gap-2 text-[12px] font-medium text-brand-300 ${reveal(index)}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
              {step.text}
            </p>
          )
        }
        return (
          <p key={index} className={`flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 py-3 text-[15px] font-black text-white ${reveal(index)}`}>
            {step.text}
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] text-emerald-950">✓</span>
          </p>
        )
      })}

      {conversion && (
        <p className={`flex items-center justify-center gap-2 text-[12px] font-bold text-slate-300 ${reveal(steps.length)}`}>
          {conversion.map((stage, index) => (
            <span key={stage} className="flex items-center gap-2">
              {index > 0 && <span className="text-slate-600" aria-hidden="true">→</span>}
              <span className={index === conversion.length - 1 ? "text-emerald-400" : ""}>{stage}</span>
            </span>
          ))}
        </p>
      )}
    </div>
  )
}
