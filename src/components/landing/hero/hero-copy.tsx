"use client"

import { motion } from "motion/react"
import { ArrowRight, PlayCircle } from "lucide-react"
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
    <div className="mx-auto flex max-w-[1040px] flex-col items-center text-center">
      {/* Badge — dental identity */}
      <motion.div custom={0} variants={fade} initial="hidden" animate="visible">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-brand-200 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="flex items-center gap-1.5 text-[11px] font-bold text-brand-700 sm:text-xs">
            <span className="text-sm">🦷</span>
            SOFTWARE CLÍNICO DENTAL TODO-EN-UNO
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 sm:text-[11px]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Recepcionista IA 24/7
          </span>
        </div>
      </motion.div>

      {/* H1 — dental terms in color */}
      <motion.h1 custom={0.05} variants={fade} initial="hidden" animate="visible"
        className="headline-hero text-balance mt-6 text-[34px] sm:mt-8 sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[68px]"
        style={{ lineHeight: 1.08 }}
      >
        Tu{" "}
        <span className="text-brand-600">clínica dental</span>
        {" "}en{" "}
        <span className="bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 bg-clip-text text-transparent">
          piloto automático
        </span>
        ,
        <br className="hidden sm:inline" />
        {" "}incluso cuando estás fuera de consulta.
      </motion.h1>

      {/* Description — dental-specific */}
      <motion.p custom={0.1} variants={fade} initial="hidden" animate="visible"
        className="text-pretty mx-auto mt-5 max-w-[340px] text-[14px] leading-relaxed text-muted sm:mt-6 sm:max-w-[600px] sm:text-[16px] lg:max-w-2xl lg:text-[17px]"
      >
        Despídete de la recepción saturada, llamadas perdidas y fichas en papel.{" "}
        <strong className="font-semibold text-ink">ClinicFlow360</strong> une agenda inteligente,{" "}
        <strong className="font-semibold text-brand-700">odontograma interactivo</strong>, app móvil para doctores y{" "}
        <strong className="font-semibold text-brand-700">recepcionista WhatsApp con IA</strong>{" "}
        en un único ecosistema clínico.
      </motion.p>

      {/* CTAs */}
      <motion.div custom={0.16} variants={fade} initial="hidden" animate="visible"
        className="mt-6 flex w-full flex-col gap-3 px-4 sm:mt-8 sm:w-auto sm:flex-row sm:px-0"
      >
        <a href="#precios" className="btn-primary inline-flex h-[50px] items-center justify-center gap-2 rounded-full px-7 text-[15px] sm:h-[52px]">
          Probar gratis 14 días
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#producto" className="btn-secondary inline-flex h-[50px] items-center justify-center gap-2.5 rounded-full px-6 text-[15px] sm:h-[52px]">
          <PlayCircle className="h-5 w-5 text-brand-600" />
          Ver cómo funciona
        </a>
      </motion.div>

      {/* Trust pills — dental-specific */}
      <motion.div custom={0.22} variants={fade} initial="hidden" animate="visible"
        className="mt-5 grid grid-cols-2 gap-2 px-2 sm:mt-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-2.5 sm:px-0"
      >
        {[
          "Odontograma FDI interactivo",
          "Recepcionista IA WhatsApp 24/7",
          "App móvil y fotos de gabinete",
          "Confirmación automática de citas",
        ].map((pill) => (
          <span key={pill} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/90 px-3 py-1.5 text-[11px] font-medium text-slate-700 sm:text-xs">
            <span className="font-bold text-emerald-600">✓</span>
            {pill}
          </span>
        ))}
      </motion.div>

      {/* Microcopy */}
      <motion.p custom={0.28} variants={fade} initial="hidden" animate="visible"
        className="mt-4 text-[11px] text-muted-light sm:text-[12px]"
      >
        Sin tarjeta <span className="text-slate-300">·</span> Configuración guiada <span className="text-slate-300">·</span> Cancela cuando quieras
      </motion.p>
    </div>
  )
}
