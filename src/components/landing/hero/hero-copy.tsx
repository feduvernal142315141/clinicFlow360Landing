"use client"

import { motion } from "motion/react"
import { ArrowRight, PlayCircle } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { easeOutPremium } from "@/lib/motion/easings"

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: easeOutPremium, delay: d },
  }),
}

export function HeroCopy() {
  return (
    <div className="mx-auto max-w-[1040px] text-center">
      {/* Badge — minimal */}
      <motion.div custom={0} variants={fade} initial="hidden" animate="visible">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium text-muted sm:text-[12px]"
          style={{ background: "rgba(255,255,255,0.45)", border: "1px solid rgba(3,126,204,0.06)" }}
        >
          <span className="h-[5px] w-[5px] rounded-full bg-accent" style={{ boxShadow: "0 0 6px rgba(45,212,191,0.5)" }} />
          La nueva forma de administrar una clínica dental
        </span>
      </motion.div>

      {/* H1 — compact, heavy */}
      <motion.h1 custom={0.05} variants={fade} initial="hidden" animate="visible"
        className="headline-hero text-balance mt-4 text-[36px] sm:mt-5 sm:text-[48px] md:text-[58px] lg:text-[72px] xl:text-[80px]"
      >
        Tu clínica sigue atendiendo,{" "}
        <span className="text-ink-secondary">incluso cuando tú no estás.</span>
      </motion.h1>

      {/* Description — tighter */}
      <motion.p custom={0.1} variants={fade} initial="hidden" animate="visible"
        className="text-pretty mx-auto mt-3 max-w-[340px] text-[14px] leading-[1.6] text-muted sm:mt-4 sm:max-w-[520px] sm:text-[16px] lg:max-w-[600px] lg:text-[17px]"
      >
        {siteConfig.name} conecta{" "}
        <strong className="font-semibold text-ink-tertiary">agenda</strong>,{" "}
        <strong className="font-semibold text-ink-tertiary">pacientes</strong>,{" "}
        <strong className="font-semibold text-ink-tertiary">odontograma</strong>{" "}
        y{" "}
        <strong className="font-semibold text-ink-tertiary">WhatsApp</strong>{" "}
        en una sola plataforma.
      </motion.p>

      {/* CTAs — compact gap */}
      <motion.div custom={0.16} variants={fade} initial="hidden" animate="visible"
        className="mt-5 flex flex-col gap-2.5 px-6 sm:mt-6 sm:flex-row sm:justify-center sm:px-0"
      >
        <a href="#precios" className="btn-primary inline-flex h-[48px] items-center justify-center gap-2 rounded-[12px] px-6 text-[14px] sm:h-[50px] sm:px-7 sm:text-[15px]">
          Probar gratis 14 días
          <ArrowRight className="h-[14px] w-[14px]" />
        </a>
        <a href="#producto" className="btn-secondary inline-flex h-[46px] items-center justify-center gap-2 rounded-[12px] px-5 text-[14px] sm:h-[50px] sm:px-6 sm:text-[15px]">
          <PlayCircle className="h-[16px] w-[16px] text-brand-600" />
          Ver cómo funciona
        </a>
      </motion.div>

      {/* Microcopy */}
      <motion.p custom={0.22} variants={fade} initial="hidden" animate="visible"
        className="mt-2.5 text-[11px] text-muted-light sm:text-[12px]"
      >
        Sin tarjeta <span className="text-[#D1D5DB]">·</span> Configuración guiada <span className="text-[#D1D5DB]">·</span> Cancela cuando quieras
      </motion.p>
    </div>
  )
}
