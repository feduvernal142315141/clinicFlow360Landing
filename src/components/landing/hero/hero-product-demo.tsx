"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { BrowserMockup } from "./browser-mockup"
import { AIChatCard } from "./ai-chat-card"
import { DoctorPhone } from "./doctor-phone"

const containerEntrance = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.45 },
  },
}

const floatUp = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOutPremium },
  },
}

export function HeroProductDemo() {
  return (
    <motion.div
      variants={containerEntrance}
      initial="hidden"
      animate="visible"
      className="relative mx-auto max-w-[1000px]"
    >
      {/* Main browser — center */}
      <motion.div variants={floatUp} className="relative z-10">
        <BrowserMockup />
      </motion.div>

      {/* AI Chat — left, overlapping */}
      <motion.div
        variants={floatUp}
        className="absolute -left-4 bottom-4 z-20 hidden lg:-left-8 lg:bottom-8 lg:block"
      >
        <AIChatCard />
      </motion.div>

      {/* Doctor Phone — right, overlapping */}
      <motion.div
        variants={floatUp}
        className="absolute -right-2 bottom-8 z-20 hidden lg:-right-4 lg:bottom-12 lg:block"
      >
        <DoctorPhone />
      </motion.div>

      {/* Mobile: stacked cards below browser */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:hidden">
        <motion.div variants={floatUp}>
          <AIChatCard />
        </motion.div>
        <motion.div variants={floatUp} className="flex justify-end">
          <DoctorPhone />
        </motion.div>
      </div>
    </motion.div>
  )
}
