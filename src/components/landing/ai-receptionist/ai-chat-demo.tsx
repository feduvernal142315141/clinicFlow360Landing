"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { MessageSquare, CalendarCheck } from "lucide-react"
import { easeOutPremium } from "@/lib/motion/easings"

const conversation = [
  { from: "patient" as const, text: "Hola, ¿tienen espacio para una limpieza mañana después de las 3?", delay: 0.3 },
  { from: "ai" as const, text: "Claro, Ana. Tengo disponible 3:30 PM o 4:15 PM con la Dra. Valeria. ¿Cuál prefieres?", delay: 1.4 },
  { from: "patient" as const, text: "3:30 está perfecto.", delay: 2.8 },
  { from: "ai" as const, text: "Listo. Tu cita quedó agendada para mañana a las 3:30 PM. Te enviaremos un recordatorio. 😊", delay: 3.6 },
] as const

export function AIChatDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-8">
      {/* Main conversation */}
      <div
        className="w-full max-w-[560px] overflow-hidden rounded-[24px]"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-white">ClinicFlow AI</p>
            <div className="flex items-center gap-1.5">
              <span className="h-[6px] w-[6px] rounded-full bg-accent" />
              <span className="text-[11px] text-accent">Disponible 24/7</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 p-5" style={{ minHeight: 300 }}>
          {conversation.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, ease: easeOutPremium, delay: msg.delay }}
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                msg.from === "patient" ? "self-end text-white" : "self-start text-white/90"
              }`}
              style={
                msg.from === "patient"
                  ? { background: "linear-gradient(135deg, #079CFB, #037ECC)" }
                  : { background: "rgba(255,255,255,0.08)" }
              }
            >
              <p style={{ fontSize: 14, lineHeight: 1.5 }}>{msg.text}</p>
            </motion.div>
          ))}

          {/* Booking confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOutPremium, delay: 4.6 }}
            className="mt-1 self-start rounded-xl px-4 py-2.5"
            style={{ background: "rgba(45,212,191,0.12)", border: "1px solid rgba(45,212,191,0.2)" }}
          >
            <div className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-accent" />
              <span className="text-[13px] font-semibold text-accent">✓ Cita creada</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Connected mini agenda */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: easeOutPremium, delay: 5.0 }}
        className="w-full max-w-[260px] overflow-hidden rounded-[18px]"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="border-b border-white/8 px-4 py-3">
          <p className="text-[11px] font-medium uppercase tracking-wider text-white/40">Agenda actualizada</p>
          <p className="text-[14px] font-semibold text-white">Mañana</p>
        </div>
        <div className="space-y-0.5 p-3">
          {[
            { time: "10:30", name: "Sofía López", service: "Ortodoncia" },
            { time: "14:00", name: "Carlos Ruiz", service: "Control" },
          ].map((a) => (
            <div key={a.time} className="rounded-lg px-3 py-2 hover:bg-white/5">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold tabular-nums text-white/50">{a.time}</span>
                <span className="text-[12px] font-medium text-white/80">{a.name}</span>
              </div>
              <p className="ml-[42px] text-[11px] text-white/40">{a.service}</p>
            </div>
          ))}
          {/* New booking appears */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: easeOutPremium, delay: 5.2 }}
            className="rounded-lg px-3 py-2"
            style={{ background: "rgba(7,156,251,0.12)", border: "1px solid rgba(7,156,251,0.2)" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-semibold tabular-nums text-brand-400">15:30</span>
              <span className="text-[12px] font-semibold text-white">Ana Martínez</span>
            </div>
            <p className="ml-[42px] text-[11px] text-brand-300">Limpieza · Confirmada</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
