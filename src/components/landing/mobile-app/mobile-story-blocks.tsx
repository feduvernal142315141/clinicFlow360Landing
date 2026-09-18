"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"

const steps = [
  {
    number: "01",
    title: "Tu día de un vistazo",
    description: "Consulta tus citas y pacientes antes de empezar. La agenda te muestra todo lo que necesitas.",
  },
  {
    number: "02",
    title: "Todo el expediente contigo",
    description: "Historia clínica, imágenes y evolución del paciente accesibles desde cualquier lugar.",
  },
  {
    number: "03",
    title: "Documenta sin detenerte",
    description: "Captura fotografías clínicas directamente desde la app y organízalas en el expediente.",
  },
  {
    number: "04",
    title: "Habla. ClinicFlow escribe.",
    description: "Dicta la nota clínica con tu voz. El sistema prepara el texto para que lo revises y guardes.",
  },
] as const

const blockVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutPremium },
  },
}

export function MobileStoryBlocks() {
  return (
    <div className="space-y-16 lg:space-y-24 lg:py-8">
      {steps.map((step) => (
        <motion.div
          key={step.number}
          variants={blockVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <span
            className="text-[14px] font-bold tabular-nums text-brand-500"
            style={{ letterSpacing: "0.04em" }}
          >
            {step.number}
          </span>
          <h3
            className="mt-2 text-ink"
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 650,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            {step.title}
          </h3>
          <p className="mt-3 max-w-[440px] text-[16px] leading-relaxed text-muted">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
