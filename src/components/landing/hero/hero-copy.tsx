"use client"

import { motion } from "motion/react"
import { ArrowRight, PlayCircle } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { easeOutPremium } from "@/lib/motion/easings"

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: easeOutPremium, delay: d },
  }),
}

export function HeroCopy() {
  return (
    <div className="mx-auto max-w-[1040px] text-center">
      {/* Badge */}
      <motion.div custom={0} variants={fade} initial="hidden" animate="visible">
        <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-ink-tertiary sm:text-[13px]"
          style={{
            background: "rgba(255,255,255,0.50)",
            border: "1px solid rgba(3,126,204,0.08)",
            boxShadow: "0 2px 12px rgba(15,23,42,0.03)",
          }}
        >
          <span className="relative flex h-[6px] w-[6px]">
            <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-accent" style={{ boxShadow: "0 0 8px rgba(45,212,191,0.5)" }} />
          </span>
          La nueva forma de administrar una clínica dental
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        custom={0.06}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="headline-hero text-balance mt-5 text-[38px] sm:mt-6 sm:text-[52px] md:text-[64px] lg:text-[76px] xl:text-[84px]"
      >
        Tu clínica sigue atendiendo,{" "}
        <span className="text-ink-secondary">incluso cuando tú no estás.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        custom={0.14}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="text-pretty mx-auto mt-4 max-w-[360px] text-[15px] leading-[1.65] text-muted sm:mt-5 sm:max-w-[540px] sm:text-[16px] md:max-w-[620px] md:text-[17px] lg:text-[18px]"
      >
        {siteConfig.name} conecta{" "}
        <strong className="font-semibold text-ink-tertiary">agenda</strong>,{" "}
        <strong className="font-semibold text-ink-tertiary">pacientes</strong>,{" "}
        historia clínica,{" "}
        <strong className="font-semibold text-ink-tertiary">odontograma</strong>,{" "}
        doctores y{" "}
        <strong className="font-semibold text-ink-tertiary">WhatsApp</strong>{" "}
        en una sola plataforma. Automatiza la recepción y dale a tu equipo el control desde cualquier lugar.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={0.22}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-6 flex flex-col gap-3 px-4 sm:mt-7 sm:flex-row sm:justify-center sm:px-0"
      >
        <a href="#precios" className="btn-primary inline-flex h-[50px] items-center justify-center gap-2 rounded-[13px] px-6 text-[15px] sm:h-[52px] sm:px-7 sm:text-[16px]">
          Probar gratis 14 días
          <ArrowRight className="h-[15px] w-[15px]" />
        </a>
        <a href="#producto" className="btn-secondary inline-flex h-[48px] items-center justify-center gap-2 rounded-[13px] px-5 text-[15px] sm:h-[52px] sm:px-6 sm:text-[16px]">
          <PlayCircle className="h-[17px] w-[17px] text-brand-600" />
          Ver cómo funciona
        </a>
      </motion.div>

      {/* Microcopy */}
      <motion.p
        custom={0.28}
        variants={fade}
        initial="hidden"
        animate="visible"
        className="mt-3 text-[12px] text-muted-light sm:text-[13px]"
      >
        Sin tarjeta <span className="text-[#CBD5E1]">·</span> Configuración guiada <span className="text-[#CBD5E1]">·</span> Cancela cuando quieras
      </motion.p>
    </div>
  )
}
