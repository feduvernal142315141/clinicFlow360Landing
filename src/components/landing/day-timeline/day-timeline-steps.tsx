"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { dayCopy } from "@/data/home"

const phaseColors = ["#38BDF8", "#2DD4BF", "#A78BFA"]

const itemVariant = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: easeOutPremium } },
}

const phaseVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutPremium } },
}

export function DayTimelineSteps() {
  return (
    <div className="mx-auto max-w-[760px] space-y-8">
      {dayCopy.phases.map((phase, phaseIndex) => {
        const color = phaseColors[phaseIndex % phaseColors.length]!
        return (
          <motion.div
            key={phase.label}
            variants={phaseVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${color}20, transparent)` }} />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color }}>
                {phase.label}
              </h3>
              <div className="h-px flex-1" style={{ background: `linear-gradient(to left, ${color}20, transparent)` }} />
            </div>

            <ol
              className="overflow-hidden rounded-2xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {phase.steps.map((step, stepIndex) => (
                <motion.li
                  key={step.event}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="flex items-start gap-3 px-4 py-4 sm:gap-5 sm:px-6"
                  style={{ borderBottom: stepIndex < phase.steps.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                >
                  <span className="w-[42px] shrink-0 pt-0.5 text-right font-mono text-[12px] tabular-nums text-white/40 sm:w-[50px] sm:text-[13px]">
                    {step.time}
                  </span>
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: color, boxShadow: `0 0 10px ${color}66` }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold leading-snug text-white sm:text-[15px]">{step.event}</p>
                    <p className="mt-0.5 text-[12px] text-white/45 sm:text-[13px]">{step.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        )
      })}

      <p className="text-balance pt-4 text-center text-[22px] font-black leading-tight tracking-tight text-white sm:text-[30px]">
        {dayCopy.closing}
      </p>
    </div>
  )
}
