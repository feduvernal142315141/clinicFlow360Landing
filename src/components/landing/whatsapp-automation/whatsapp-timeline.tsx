"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"

const steps = [
  { label: "Cita creada", detail: "Viernes 10:30 AM", bubble: null },
  { label: "24 h antes", detail: "Recordatorio enviado", bubble: "Mañana te esperamos a las 10:30..." },
  { label: "2 h antes", detail: "Recordatorio enviado", bubble: "Tu cita es en 2 horas..." },
  { label: "Confirmada", detail: "Ana confirmó", bubble: "Confirmo 👍" },
] as const

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: easeOutPremium } },
}

export function WhatsAppTimeline() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
    >
      {/* Desktop: horizontal */}
      <div className="hidden sm:block">
        <div className="relative mx-auto max-w-[800px]">
          {/* Connector line */}
          <div className="absolute left-[10%] right-[10%] top-[18px] h-px bg-border" />

          <div className="relative flex justify-between">
            {steps.map((step) => (
              <motion.div
                key={step.label}
                variants={dotVariant}
                className="flex w-[22%] flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white"
                  style={{ border: "2px solid #E2E8F0", boxShadow: "0 2px 8px rgba(15,23,42,0.06)" }}
                >
                  <span className="h-3 w-3 rounded-full bg-brand-500" />
                </div>
                <p className="mt-3 text-[14px] font-semibold text-ink">{step.label}</p>
                <p className="mt-0.5 text-[12px] text-muted">{step.detail}</p>
                {step.bubble && (
                  <div className="mt-3 rounded-xl bg-surface-soft px-3 py-2 text-[12px] italic text-muted" style={{ border: "1px solid rgba(15,23,42,0.05)" }}>
                    {step.bubble}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical */}
      <div className="mx-auto max-w-[340px] sm:hidden">
        <div className="relative pl-8">
          <div className="absolute left-[14px] top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            {steps.map((step) => (
              <motion.div key={step.label} variants={dotVariant} className="relative">
                <div className="absolute -left-8 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white" style={{ border: "2px solid #E2E8F0" }}>
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                </div>
                <p className="text-[14px] font-semibold text-ink">{step.label}</p>
                <p className="text-[12px] text-muted">{step.detail}</p>
                {step.bubble && (
                  <p className="mt-1.5 text-[12px] italic text-muted">&quot;{step.bubble}&quot;</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
