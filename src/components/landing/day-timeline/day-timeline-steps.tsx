"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"

const steps = [
  { time: "07:10", event: "Paciente escribe.", detail: "WhatsApp con consulta de disponibilidad." },
  { time: "07:11", event: "ClinicFlow AI responde.", detail: "Consulta horarios y ofrece opciones." },
  { time: "07:12", event: "La cita queda agendada.", detail: "Agenda actualizada automáticamente." },
  { time: "14:00", event: "Paciente recibe recordatorio.", detail: "WhatsApp automático de confirmación." },
  { time: "14:55", event: "Doctor recibe push.", detail: "Notificación en la app móvil." },
  { time: "15:00", event: "Abre expediente.", detail: "Historia, odontograma e imágenes listos." },
  { time: "15:35", event: "Captura fotografías.", detail: "Documentación visual desde el teléfono." },
  { time: "15:38", event: "Dicta la nota.", detail: "Voz convertida en nota clínica." },
  { time: "15:40", event: "Expediente actualizado.", detail: "Todo conectado. Consulta completa." },
] as const

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutPremium } },
}

export function DayTimelineSteps() {
  return (
    <div className="relative mx-auto max-w-[640px]">
      {/* Growing vertical line */}
      <div
        className="absolute left-[60px] top-0 bottom-0 w-px sm:left-[72px]"
        style={{ background: "linear-gradient(to bottom, rgba(45,212,191,0.4), rgba(7,156,251,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="space-y-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex items-start gap-5 sm:gap-6"
          >
            {/* Time */}
            <span
              className="w-[48px] shrink-0 pt-1 text-right font-mono text-[14px] tabular-nums sm:w-[56px]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {step.time}
            </span>

            {/* Dot */}
            <div className="relative mt-2 flex shrink-0">
              <span className="h-3 w-3 rounded-full" style={{ background: i === steps.length - 1 ? "#2DD4BF" : "rgba(7,156,251,0.5)", boxShadow: i === steps.length - 1 ? "0 0 12px rgba(45,212,191,0.4)" : "none" }} />
            </div>

            {/* Content */}
            <div>
              <p
                className="text-white"
                style={{
                  fontSize: "clamp(22px, 3.5vw, 36px)",
                  fontWeight: 650,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                }}
              >
                {step.event}
              </p>
              <p className="mt-1 text-[14px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {step.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
