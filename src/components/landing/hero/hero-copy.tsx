"use client"

import { motion } from "motion/react"
import { ArrowRight, PlayCircle } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { easeOutPremium } from "@/lib/motion/easings"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutPremium, delay },
  }),
}

export function HeroCopy() {
  return (
    <div className="mx-auto max-w-[1040px] text-center">
      {/* Badge */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <span
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] font-medium text-ink-secondary"
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(3,126,204,0.10)",
            boxShadow: "0 4px 24px rgba(15,23,42,0.04)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          La nueva forma de administrar una clínica dental
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        custom={0.08}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-balance mt-7 text-ink"
        style={{
          fontSize: "clamp(44px, 6.3vw, 84px)",
          fontWeight: 710,
          letterSpacing: "-0.055em",
          lineHeight: 0.98,
        }}
      >
        Tu clínica sigue atendiendo,{" "}
        <span className="text-ink-secondary">
          incluso cuando tú no estás.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        custom={0.18}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-pretty mx-auto mt-6 max-w-[720px] text-muted"
        style={{ fontSize: 19, lineHeight: 1.6 }}
      >
        {siteConfig.name} conecta{" "}
        <strong className="font-medium text-ink-secondary">agenda</strong>,{" "}
        <strong className="font-medium text-ink-secondary">pacientes</strong>,{" "}
        historia clínica,{" "}
        <strong className="font-medium text-ink-secondary">odontograma</strong>,{" "}
        doctores y{" "}
        <strong className="font-medium text-ink-secondary">WhatsApp</strong>{" "}
        en una sola plataforma. Automatiza la recepción y dale a tu equipo el
        control desde cualquier lugar.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={0.28}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        {/* Primary */}
        <a
          href="#precios"
          className="btn-primary-gradient group inline-flex h-[54px] items-center gap-2 rounded-[14px] px-[26px] text-[16px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.985]"
        >
          Probar gratis 14 días
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
        {/* Secondary */}
        <a
          href="#producto"
          className="group inline-flex h-[54px] items-center gap-2 rounded-[14px] border border-border px-[22px] text-[16px] font-semibold text-ink transition-all duration-200 hover:-translate-y-px hover:border-brand-200 hover:bg-white hover:shadow-sm"
          style={{
            background: "rgba(255,255,255,0.76)",
            boxShadow: "0 2px 12px rgba(15,23,42,0.04)",
          }}
        >
          <PlayCircle className="h-[18px] w-[18px] text-brand-500" />
          Ver cómo funciona
        </a>
      </motion.div>

      {/* Microcopy */}
      <motion.p
        custom={0.36}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-3.5 text-[13px] text-muted-light"
      >
        Sin tarjeta · Configuración guiada · Cancela cuando quieras
      </motion.p>
    </div>
  )
}
