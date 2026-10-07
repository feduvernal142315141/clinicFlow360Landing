"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { useReducedMotion } from "@/lib/motion/reduced-motion"
import { voiceCopy } from "@/data/home"
import { TabletOdontogram, type OdontogramChanges } from "./tablet-odontogram"

const LISTEN_MS = 2600
const RESULT_MS = 3400
const BARS = [0.5, 0.9, 0.6, 1, 0.7, 0.4, 0.8, 0.55, 0.95, 0.6, 0.75, 0.45, 0.85, 0.5]

/** What the odontogram shows once each command has (or has not yet) been applied. */
function odontogramChanges(step: number, applied: boolean): OdontogramChanges {
  return {
    mesial34: (step === 0 && applied) || step === 1 || (step === 2 && !applied),
    active36: step === 1,
    occlusal36: (step === 1 && applied) || step === 2,
    pulse: applied ? (step === 1 ? 36 : 34) : undefined,
  }
}

export function VoiceDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" })
  const reducedMotion = useReducedMotion()
  const [step, setStep] = useState(0)
  const [applied, setApplied] = useState(false)
  const [paused, setPaused] = useState(false)

  const running = inView && !paused && !reducedMotion
  // Without motion there is no "listening" phase: show each command already applied.
  const showResult = applied || reducedMotion
  const command = voiceCopy.commands[step]!
  const changes = odontogramChanges(step, showResult)

  useEffect(() => {
    if (!running) return
    const timer = setTimeout(
      () => {
        if (applied) {
          setStep((current) => (current + 1) % voiceCopy.commands.length)
          setApplied(false)
        } else {
          setApplied(true)
        }
      },
      applied ? RESULT_MS : LISTEN_MS,
    )
    return () => clearTimeout(timer)
  }, [running, step, applied])

  function selectCommand(index: number) {
    setPaused(true)
    setStep(index)
    setApplied(true)
  }

  return (
    <div ref={ref} className="grid items-stretch gap-5 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
      {/* Tablet with the real odontogram */}
      <div
        className="flex flex-col self-start rounded-[22px] border-[8px] border-[#141a24] bg-black sm:rounded-[30px] sm:border-[10px]"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.45)" }}
      >
        <div className="overflow-hidden rounded-t-[14px] sm:rounded-t-[20px]">
          <TabletOdontogram
            changes={changes}
            zoom="mobile"
            alt={voiceCopy.demo.odontogramLabel}
            sizes="(max-width: 640px) 230vw, (max-width: 1024px) 100vw, 680px"
            icdasLabel={voiceCopy.demo.icdasLabel}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-b-[14px] bg-[#0b111c] px-4 py-3 sm:rounded-b-[20px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-950/60 px-2.5 py-1 text-[10px] font-bold text-brand-300">
            <span className={`h-1.5 w-1.5 rounded-full bg-brand-400 ${showResult ? "" : "animate-pulse"}`} />
            {showResult ? voiceCopy.demo.statusDone : voiceCopy.demo.statusListening}
          </span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-red-500" />
              {voiceCopy.demo.legendCondition}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm border border-brand-400 bg-brand-400/15" />
              {voiceCopy.demo.legendActive}
            </span>
          </span>
        </div>
      </div>

      {/* Voice panel */}
      <div className="flex flex-col rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
        <div role="tablist" aria-label={voiceCopy.demo.commandsLabel} className="flex gap-1.5">
          {voiceCopy.commands.map((item, index) => (
            <button
              key={item.said}
              role="tab"
              aria-selected={index === step}
              onClick={() => selectCommand(index)}
              className={`flex-1 cursor-pointer rounded-lg px-2 py-2 text-[11px] font-bold transition-colors ${
                index === step ? "bg-brand-500/20 text-brand-300" : "bg-white/[0.03] text-slate-500 hover:text-slate-300"
              }`}
            >
              {voiceCopy.demo.commandWord} {index + 1}
            </button>
          ))}
        </div>

        <div className="mt-5 flex h-8 items-center gap-[3px]" aria-hidden="true">
          {BARS.map((height, index) => (
            <span
              key={index}
              data-idle={showResult}
              className="voice-bar w-[3px] rounded-full bg-brand-400"
              style={{ height: `${height * 100}%`, animationDelay: `${index * 0.07}s` }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: easeOutPremium }}
            className="mt-4 min-h-[190px] lg:min-h-[230px]"
          >
            {"context" in command && (
              <p className="mb-2 text-[11px] font-medium text-slate-500">{command.context}</p>
            )}
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">{voiceCopy.demo.speaker}</p>
            <p className="mt-1 text-[18px] font-bold leading-snug text-white sm:text-[20px]">«{command.said}»</p>

            <ul className="mt-5 space-y-2">
              {command.feedback.map((line, index) => (
                <motion.li
                  key={line}
                  initial={false}
                  animate={{ opacity: showResult ? 1 : 0.18, x: showResult ? 0 : -4 }}
                  transition={{ duration: 0.3, ease: easeOutPremium, delay: showResult ? index * 0.14 : 0 }}
                  className="flex items-center gap-2 text-[13px] font-medium text-slate-200"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-[11px] font-bold text-emerald-400">
                    ✓
                  </span>
                  {line}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
