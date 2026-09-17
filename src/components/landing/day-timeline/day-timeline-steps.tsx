"use client"

import { motion } from "motion/react"
import {
  MessageSquare,
  Bot,
  CalendarPlus,
  CalendarCheck,
  Bell,
  BellRing,
  FolderOpen,
  Camera,
  Mic,
  CheckCircle2,
} from "lucide-react"
import { easeOutPremium } from "@/lib/motion/easings"

const steps = [
  {
    time: "7:10 AM",
    title: "Paciente escribe por WhatsApp",
    description: "\"Hola, quisiera agendar una limpieza.\"",
    icon: MessageSquare,
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    time: "7:10 AM",
    title: "ClinicFlow AI responde",
    description: "Consulta disponibilidad real y ofrece horarios.",
    icon: Bot,
    accent: "bg-brand-100 text-brand-600",
  },
  {
    time: "7:12 AM",
    title: "Cita agendada para las 3:00 PM",
    description: "La agenda se actualiza automáticamente.",
    icon: CalendarPlus,
    accent: "bg-brand-100 text-brand-600",
  },
  {
    time: "1:00 PM",
    title: "Recordatorio automático enviado",
    description: "Paciente recibe WhatsApp de confirmación.",
    icon: Bell,
    accent: "bg-amber-100 text-amber-600",
  },
  {
    time: "2:00 PM",
    title: "Paciente confirma asistencia",
    description: "Estado de la cita actualizado.",
    icon: CalendarCheck,
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    time: "2:55 PM",
    title: "Doctor recibe notificación",
    description: "Push notification en la app móvil.",
    icon: BellRing,
    accent: "bg-violet-100 text-violet-600",
  },
  {
    time: "3:00 PM",
    title: "Doctor abre expediente",
    description: "Historia clínica, odontograma e imágenes listos.",
    icon: FolderOpen,
    accent: "bg-brand-100 text-brand-600",
  },
  {
    time: "3:35 PM",
    title: "Toma fotografías clínicas",
    description: "Documentación visual desde el teléfono.",
    icon: Camera,
    accent: "bg-pink-100 text-pink-600",
  },
  {
    time: "3:38 PM",
    title: "Dicta nota clínica",
    description: "Voz convertida en nota lista para revisar.",
    icon: Mic,
    accent: "bg-red-100 text-red-600",
  },
  {
    time: "3:40 PM",
    title: "Consulta terminada",
    description: "Expediente actualizado. Todo conectado.",
    icon: CheckCircle2,
    accent: "bg-accent/15 text-accent-dark",
  },
] as const

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOutPremium },
  },
}

/**
 * Day timeline using Motion inView reveals.
 * Future: GSAP ScrollTrigger pinned version for desktop (PEND-10 / Sprint 6+).
 */
export function DayTimelineSteps() {
  return (
    <div className="relative mx-auto max-w-[640px]">
      {/* Vertical line */}
      <div
        className="absolute left-5 top-0 bottom-0 w-px bg-border-light sm:left-1/2 sm:-translate-x-px"
        aria-hidden="true"
      />

      <div className="space-y-6 sm:space-y-8">
        {steps.map((step, i) => {
          const Icon = step.icon
          const isEven = i % 2 === 0

          return (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`relative flex items-start gap-4 pl-12 sm:pl-0 ${
                isEven
                  ? "sm:flex-row sm:pr-[calc(50%+24px)]"
                  : "sm:flex-row-reverse sm:pl-[calc(50%+24px)]"
              }`}
            >
              {/* Icon dot — mobile: absolute left, desktop: absolute center */}
              <div
                className={`absolute left-2.5 top-0 z-10 flex h-5 w-5 items-center justify-center sm:left-1/2 sm:-translate-x-1/2`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${step.accent}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
              </div>

              {/* Card */}
              <div className="w-full rounded-[14px] border border-border-light bg-white p-4 shadow-sm">
                <p className="mb-1 text-xs font-semibold tabular-nums text-muted">
                  {step.time}
                </p>
                <p className="text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-0.5 text-sm text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
