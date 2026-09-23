"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"

const phases = [
  {
    label: "Mañana — Antes de abrir",
    color: "#38BDF8",
    steps: [
      {
        time: "07:10",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        ),
        event: "Paciente escribe por WhatsApp",
        detail: "Consulta disponibilidad fuera de horario",
        accent: "emerald",
      },
      {
        time: "07:11",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4 4 0 014 4v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V6a4 4 0 014-4z" />
            <path d="M5 12h14M5 16h14M7 20h10" />
          </svg>
        ),
        event: "ClinicFlow AI responde al instante",
        detail: "Revisa horarios reales y ofrece opciones",
        accent: "brand",
      },
      {
        time: "07:12",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
            <path d="M9 16l2 2 4-4" />
          </svg>
        ),
        event: "Cita confirmada en la agenda",
        detail: "Agenda del doctor actualizada automáticamente",
        accent: "emerald",
      },
    ],
  },
  {
    label: "Tarde — Antes de la consulta",
    color: "#A78BFA",
    steps: [
      {
        time: "14:00",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        ),
        event: "Paciente recibe recordatorio",
        detail: "WhatsApp automático de confirmación",
        accent: "purple",
      },
      {
        time: "14:55",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg>
        ),
        event: "Doctor recibe notificación push",
        detail: "Próximo paciente en 5 minutos",
        accent: "brand",
      },
    ],
  },
  {
    label: "Consulta — En gabinete",
    color: "#2DD4BF",
    steps: [
      {
        time: "15:00",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
          </svg>
        ),
        event: "Abre expediente completo",
        detail: "Historia, odontograma e imágenes listos",
        accent: "emerald",
      },
      {
        time: "15:35",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        ),
        event: "Captura fotografías clínicas",
        detail: "Desde el teléfono, directo al expediente",
        accent: "brand",
      },
      {
        time: "15:38",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
            <path d="M19 10v2a7 7 0 01-14 0v-2" />
            <path d="M12 19v4M8 23h8" />
          </svg>
        ),
        event: "Dicta la nota clínica",
        detail: "18 segundos de voz → nota estructurada",
        accent: "red",
      },
      {
        time: "15:40",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
        ),
        event: "Expediente actualizado",
        detail: "Todo conectado. Consulta completa.",
        accent: "emerald",
        isLast: true,
      },
    ],
  },
] as const

const accentColors: Record<string, { dot: string; glow: string; iconBg: string }> = {
  emerald: { dot: "#2DD4BF", glow: "rgba(45,212,191,0.3)", iconBg: "rgba(45,212,191,0.1)" },
  brand: { dot: "#38BDF8", glow: "rgba(56,189,248,0.3)", iconBg: "rgba(56,189,248,0.1)" },
  purple: { dot: "#A78BFA", glow: "rgba(167,139,250,0.3)", iconBg: "rgba(167,139,250,0.1)" },
  red: { dot: "#F87171", glow: "rgba(248,113,113,0.3)", iconBg: "rgba(248,113,113,0.1)" },
}

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
    <div className="mx-auto max-w-[720px] space-y-8">
      {phases.map((phase, pi) => (
        <motion.div
          key={pi}
          variants={phaseVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Phase label */}
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${phase.color}20, transparent)` }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: phase.color }}>
              {phase.label}
            </span>
            <div className="h-px flex-1" style={{ background: `linear-gradient(to left, ${phase.color}20, transparent)` }} />
          </div>

          {/* Steps card */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {phase.steps.map((step, si) => {
              const colors = accentColors[step.accent]!
              return (
                <motion.div
                  key={si}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02] sm:gap-5 sm:px-6"
                  style={{
                    borderBottom: si < phase.steps.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  {/* Time */}
                  <span className="w-[44px] shrink-0 text-right font-mono text-[13px] tabular-nums text-white/30 sm:w-[50px]">
                    {step.time}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10"
                    style={{
                      background: colors.iconBg,
                      color: colors.dot,
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold leading-snug text-white sm:text-[15px]">
                      {step.event}
                    </p>
                    <p className="mt-0.5 text-[12px] text-white/40 sm:text-[13px]">
                      {step.detail}
                    </p>
                  </div>

                  {/* Status indicator for last step */}
                  {"isLast" in step && step.isLast && (
                    <div className="hidden shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold sm:flex" style={{ background: colors.iconBg, color: colors.dot }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: colors.dot, boxShadow: `0 0 6px ${colors.glow}` }} />
                      Completo
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
