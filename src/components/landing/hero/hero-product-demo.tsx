"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { BrowserMockup } from "./browser-mockup"
import { AIChatCard } from "./ai-chat-card"
import { DoctorPhone } from "./doctor-phone"

const stageIn = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easeOutPremium, delay: 0.25 } },
}

const cardIn = (delay: number) => ({
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: easeOutPremium, delay } },
})

export function HeroProductDemo() {
  return (
    <div className="relative mx-auto max-w-[1200px]" style={{ perspective: "1200px" }}>

      {/* Glow behind dashboard — responsive */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] -z-10 h-[200px] w-[400px] -translate-x-1/2 sm:h-[300px] sm:w-[600px] lg:h-[400px] lg:w-[800px]" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(7,156,251,0.14), transparent 55%)", filter: "blur(60px)" }}
      />

      {/* ═══ MOBILE (< lg) ═══ */}
      <div className="lg:hidden">
        {/* Dashboard — main focus */}
        <motion.div variants={stageIn} initial="hidden" animate="visible">
          <div style={{ transform: "rotateX(2deg)", transformOrigin: "center 80%" }}>
            <BrowserMockup />
          </div>
        </motion.div>

        {/* Overlapping cards — create depth layers */}
        <div className="relative z-20 -mt-6 flex items-end gap-3 px-2 sm:-mt-10 sm:gap-4">
          <motion.div variants={cardIn(0.4)} initial="hidden" animate="visible" className="flex-1 max-w-[65%]">
            <AIChatCard />
          </motion.div>
          <motion.div variants={cardIn(0.55)} initial="hidden" animate="visible" className="shrink-0">
            <DoctorPhone />
          </motion.div>
        </div>
      </div>

      {/* ═══ DESKTOP (>= lg) ═══ */}
      <div className="relative hidden lg:block" style={{ minHeight: 520 }}>
        {/* Dashboard — large, central */}
        <motion.div variants={stageIn} initial="hidden" animate="visible" className="relative z-10 mx-auto" style={{ maxWidth: 1000 }}>
          <div style={{ transform: "rotateX(2deg)", transformOrigin: "center 80%" }}>
            <BrowserMockup />
          </div>
        </motion.div>

        {/* Chat — floating left, overlapping dashboard */}
        <motion.div
          variants={cardIn(0.45)}
          initial="hidden"
          animate="visible"
          className="absolute z-30"
          style={{ left: 0, top: 60 }}
        >
          <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <AIChatCard />
          </motion.div>
        </motion.div>

        {/* Phone — floating right */}
        <motion.div
          variants={cardIn(0.6)}
          initial="hidden"
          animate="visible"
          className="absolute z-40"
          style={{ right: 10, top: 70 }}
        >
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
            <DoctorPhone />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
