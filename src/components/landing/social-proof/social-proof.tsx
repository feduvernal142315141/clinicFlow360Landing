"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { SectionReveal } from "../section-reveal"

const metrics: { value: string; label: string; accent?: boolean; green?: boolean }[] = [
  { value: "+250,000", label: "Citas gestionadas" },
  { value: "94%", label: "Confirmaciones automáticas", accent: true },
  { value: "18 hrs", label: "Ahorradas por semana en recepción" },
  { value: "0%", label: "Mensajes sin responder", green: true },
]

const trustBadges = [
  "Avalado por directores médicos dentales",
  "Protocolo FDI internacional",
  "Seguridad radiográfica en la nube",
] as const

const metricVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutPremium, delay: i * 0.08 },
  }),
}

export function SocialProof() {
  return (
    <section className="relative border-b border-white/[0.06] px-4 py-14 sm:px-6" style={{ background: "#080e1c" }}>
      {/* Top edge glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
            Diseñado y perfeccionado junto a profesionales de la salud dental en Iberoamérica
          </p>
        </SectionReveal>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-4 text-center sm:gap-6 md:grid-cols-4 md:gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              variants={metricVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-3"
            >
              <div
                className={`text-[28px] font-black tracking-tight sm:text-[32px] lg:text-[36px] ${m.accent ? "text-brand-400" : m.green ? "text-emerald-400" : "text-white"}`}
                style={{ textShadow: "0 0 40px rgba(7,156,251,0.12)" }}
              >
                {m.value}
              </div>
              <div className="mt-1 text-[12px] font-medium text-slate-500 sm:text-[13px]">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges — stack on mobile, horizontal on sm+ */}
        <SectionReveal>
          <div className="mt-10 flex flex-col items-center gap-2.5 border-t border-white/[0.06] pt-6 text-[11px] font-semibold text-slate-500 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 sm:text-[12px]">
            {trustBadges.map((badge, i) => (
              <div key={badge} className="flex items-center gap-2">
                {i > 0 && <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-700 sm:inline-block" />}
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-500/30 bg-brand-950/60 text-[10px] text-brand-400">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
