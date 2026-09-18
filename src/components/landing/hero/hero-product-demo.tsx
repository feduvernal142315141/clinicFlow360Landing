"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { BrowserMockup } from "./browser-mockup"
import { AIChatCard } from "./ai-chat-card"
import { DoctorPhone } from "./doctor-phone"

const stageIn = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: easeOutPremium, delay: 0.35 } },
}

const floatIn = (delay: number) => ({
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeOutPremium, delay } },
})

export function HeroProductDemo() {
  return (
    <div className="relative mx-auto" style={{ perspective: "1400px", maxWidth: "min(1200px, calc(100vw - 32px))" }}>

      {/* Glow behind dashboard */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 sm:h-[400px] sm:w-[700px]" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(7,156,251,0.15), transparent 55%)", filter: "blur(80px)" }}
      />

      {/* === MOBILE LAYOUT (< lg) === */}
      <div className="lg:hidden">
        {/* Dashboard */}
        <motion.div variants={stageIn} initial="hidden" animate="visible">
          <div style={{ transform: "rotateX(2deg)", transformOrigin: "center bottom" }}>
            <BrowserMockup />
          </div>
        </motion.div>

        {/* Overlapping cards */}
        <div className="relative -mt-8 flex items-end justify-between px-2 sm:-mt-12 sm:px-4">
          <motion.div variants={floatIn(0.5)} initial="hidden" animate="visible" className="relative z-10">
            <AIChatCard />
          </motion.div>
          <motion.div variants={floatIn(0.65)} initial="hidden" animate="visible" className="relative z-20 -mb-2">
            <DoctorPhone />
          </motion.div>
        </div>
      </div>

      {/* === DESKTOP LAYOUT (>= lg) === */}
      <div className="relative hidden lg:block">
        {/* Dashboard */}
        <motion.div variants={stageIn} initial="hidden" animate="visible" className="relative z-10">
          <div style={{ transform: "rotateX(2deg)", transformOrigin: "center bottom" }}>
            <BrowserMockup />
          </div>
        </motion.div>

        {/* Chat — floating left */}
        <motion.div
          variants={floatIn(0.55)}
          initial="hidden"
          animate="visible"
          className="absolute z-30"
          style={{ left: -40, top: 80 }}
        >
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <AIChatCard />
          </motion.div>
        </motion.div>

        {/* Phone — floating right */}
        <motion.div
          variants={floatIn(0.7)}
          initial="hidden"
          animate="visible"
          className="absolute z-40"
          style={{ right: -16, top: 100 }}
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
            <DoctorPhone />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
