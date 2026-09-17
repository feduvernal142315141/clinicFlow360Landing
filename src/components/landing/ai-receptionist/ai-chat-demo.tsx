"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { MessageSquare } from "lucide-react"
import { easeOutPremium } from "@/lib/motion/easings"

const conversation = [
  {
    from: "patient" as const,
    text: "Hola, ¿tienen espacio para una limpieza el viernes?",
    delay: 0.3,
  },
  {
    from: "ai" as const,
    text: "Claro, Ana. El viernes tenemos disponible con la Dra. López a las 10:30 AM y 3:00 PM. ¿Cuál te funciona mejor?",
    delay: 1.2,
  },
  {
    from: "patient" as const,
    text: "Las 3.",
    delay: 2.4,
  },
  {
    from: "ai" as const,
    text: "Perfecto. Tu cita quedó agendada para este viernes a las 3:00 PM. Te enviaremos un recordatorio antes de tu cita. 😊",
    delay: 3.2,
  },
] as const

export function AIChatDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div
      ref={ref}
      className="w-full max-w-[360px] overflow-hidden rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">ClinicFlow AI</p>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs text-accent">En línea</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-4" style={{ minHeight: 280 }}>
        {conversation.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 12, scale: 0.97 }
            }
            transition={{
              duration: 0.45,
              ease: easeOutPremium,
              delay: msg.delay,
            }}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
              msg.from === "patient"
                ? "self-end bg-brand-500 text-white"
                : "self-start bg-white/10 text-white/90"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {/* Typing indicator — appears briefly before AI messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
          transition={{
            duration: 1.8,
            delay: 0.8,
            times: [0, 0.1, 0.7, 1],
          }}
          className="flex gap-1 self-start rounded-2xl bg-white/10 px-4 py-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-white/40" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-white/40 [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-white/40 [animation-delay:300ms]" />
        </motion.div>
      </div>
    </div>
  )
}
