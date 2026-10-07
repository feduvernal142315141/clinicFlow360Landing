"use client"

import type { CSSProperties } from "react"
import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { heroCopy } from "@/data/home"
import { BrowserMockup } from "./browser-mockup"
import { AIChatCard } from "./ai-chat-card"
import { HeroVoiceCard } from "./hero-voice-card"

const stageIn = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easeOutPremium, delay: 0.25 } },
}

const cardIn = (delay: number) => ({
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: easeOutPremium, delay } },
})

/** Names the moment of the clinic a card belongs to. */
function MomentLabel({ children }: { children: string }) {
  return (
    <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-300">
      <span className="h-px w-5 bg-brand-400/60" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Small status chip; lights up in turn to show information travelling. */
function StageChip({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <div
      className="flow-step flex items-center gap-2.5 rounded-xl border border-white/10 px-3.5 py-2.5"
      style={{ background: "rgba(9,22,38,0.94)", "--flow-index": index, "--flow-count": 3 } as CSSProperties}
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
      <span className="min-w-0">
        <span className="block text-[12px] font-bold text-white">{title}</span>
        <span className="block text-[11px] text-slate-400">{text}</span>
      </span>
    </div>
  )
}

export function HeroProductDemo() {
  const { stage } = heroCopy

  return (
    <div className="relative mx-auto max-w-[1200px]" style={{ perspective: "1200px" }}>
      {/* Glow behind dashboard */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] -z-10 h-[200px] w-[400px] -translate-x-1/2 sm:h-[300px] sm:w-[600px] lg:h-[400px] lg:w-[800px]" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(7,156,251,0.14), transparent 55%)", filter: "blur(60px)" }}
      />

      {/* ═══ MOBILE / TABLET (< lg) ═══ */}
      <div className="lg:hidden">
        <motion.div variants={stageIn} initial="hidden" animate="visible">
          <div className="-mx-2 sm:mx-0" style={{ transform: "rotateX(2deg)", transformOrigin: "center 80%" }}>
            <BrowserMockup />
          </div>
        </motion.div>

        <div className="relative z-20 -mt-4 flex flex-col items-center gap-5 px-4 sm:-mt-10 sm:flex-row sm:items-start sm:justify-center sm:px-2">
          <motion.div variants={cardIn(0.4)} initial="hidden" animate="visible" className="w-full max-w-[340px] space-y-3 sm:max-w-[300px]">
            <MomentLabel>{stage.reception.label}</MomentLabel>
            <AIChatCard />
            <StageChip index={0} title={stage.reception.title} text={stage.reception.text} />
          </motion.div>
          <motion.div variants={cardIn(0.55)} initial="hidden" animate="visible" className="w-full max-w-[340px] space-y-3 sm:max-w-[300px]">
            <MomentLabel>{stage.chair.label}</MomentLabel>
            <HeroVoiceCard />
            <MomentLabel>{stage.imaging.label}</MomentLabel>
            <StageChip index={2} title={stage.imaging.title} text={stage.imaging.text} />
          </motion.div>
        </div>
      </div>

      {/* ═══ DESKTOP (>= lg) ═══ */}
      <div className="relative hidden pb-24 lg:block" style={{ minHeight: 600 }}>
        {/* Centre — ClinicFlow agenda */}
        <motion.div variants={stageIn} initial="hidden" animate="visible" className="relative z-10 mx-auto" style={{ maxWidth: 940 }}>
          <div style={{ transform: "rotateX(2deg)", transformOrigin: "center 80%" }}>
            <BrowserMockup />
          </div>
        </motion.div>

        {/* Left — reception: WhatsApp → AI Receptionist → appointment */}
        <motion.div variants={cardIn(0.45)} initial="hidden" animate="visible" className="absolute z-30" style={{ left: 0, top: 40 }}>
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <MomentLabel>{stage.reception.label}</MomentLabel>
            <div className="space-y-3">
              <AIChatCard />
              <StageChip index={0} title={stage.reception.title} text={stage.reception.text} />
            </div>
          </motion.div>
        </motion.div>

        {/* Right — chair: tablet → Voice → odontogram; imaging: RX → record */}
        <motion.div variants={cardIn(0.6)} initial="hidden" animate="visible" className="absolute z-40" style={{ right: 0, top: 64 }}>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
            <MomentLabel>{stage.chair.label}</MomentLabel>
            <div className="flow-step rounded-2xl" style={{ "--flow-index": 1, "--flow-count": 3 } as CSSProperties}>
              <HeroVoiceCard />
            </div>
            <div className="mt-4">
              <MomentLabel>{stage.imaging.label}</MomentLabel>
              <StageChip index={2} title={stage.imaging.title} text={stage.imaging.text} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
