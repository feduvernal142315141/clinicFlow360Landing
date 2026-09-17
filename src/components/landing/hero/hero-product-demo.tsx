"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { BrowserMockup } from "./browser-mockup"
import { AIChatCard } from "./ai-chat-card"
import { DoctorPhone } from "./doctor-phone"

const stageEntrance = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: easeOutPremium, delay: 0.45 },
  },
}

const floatIn = (delay: number) => ({
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOutPremium, delay },
  },
})

export function HeroProductDemo() {
  return (
    <div
      className="relative mx-auto"
      style={{
        perspective: "1400px",
        width: "min(1220px, calc(100vw - 48px))",
      }}
    >
      {/* Glow behind dashboard */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(7,156,251,0.13), transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      {/* Main dashboard */}
      <motion.div
        variants={stageEntrance}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <BrowserMockup />
      </motion.div>

      {/* AI Chat — floating left */}
      <motion.div
        variants={floatIn(0.65)}
        initial="hidden"
        animate="visible"
        className="absolute z-30 hidden lg:block"
        style={{ left: -35, top: 120 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <AIChatCard />
        </motion.div>
      </motion.div>

      {/* Doctor Phone — floating right */}
      <motion.div
        variants={floatIn(0.8)}
        initial="hidden"
        animate="visible"
        className="absolute z-40 hidden lg:block"
        style={{ right: -30, top: 150 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <DoctorPhone />
        </motion.div>
      </motion.div>

      {/* Mobile: stacked below */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:hidden">
        <motion.div
          variants={floatIn(0.55)}
          initial="hidden"
          animate="visible"
        >
          <AIChatCard />
        </motion.div>
        <motion.div
          variants={floatIn(0.65)}
          initial="hidden"
          animate="visible"
          className="flex justify-end"
        >
          <DoctorPhone />
        </motion.div>
      </div>

      {/* Bottom fade mask — smooth transition to next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to bottom, transparent, #FAFCFF)",
        }}
      />
    </div>
  )
}
