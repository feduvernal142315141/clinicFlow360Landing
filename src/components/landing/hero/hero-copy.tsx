"use client"

import { motion } from "motion/react"
import { siteConfig } from "@/lib/config"
import { easeOutPremium } from "@/lib/motion/easings"

const fadeUp = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOutPremium, delay },
  }),
}

export function HeroCopy() {
  return (
    <div className="mx-auto max-w-[900px] text-center">
      {/* Badge */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-light bg-surface-soft px-4 py-1.5 text-sm text-muted">
          ✦ La nueva forma de administrar una clínica dental
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        custom={0.08}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-balance mt-6 text-4xl font-bold text-ink sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
        style={{ lineHeight: "1.02", letterSpacing: "-0.045em" }}
      >
        Tu clínica sigue atendiendo, incluso cuando tú no estás.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        custom={0.18}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-pretty mx-auto mt-6 max-w-[720px] text-lg leading-relaxed text-muted sm:text-xl"
      >
        {siteConfig.name} conecta agenda, pacientes, historia clínica,
        odontograma, doctores y WhatsApp en una sola plataforma. Automatiza
        la recepción y dale a tu equipo el control de la clínica desde
        cualquier lugar.
      </motion.p>

      {/* CTA */}
      <motion.div
        custom={0.28}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
      >
        <a
          href="#precios"
          className="inline-flex h-[52px] items-center rounded-[14px] bg-brand-600 px-7 text-base font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg active:scale-[0.985]"
        >
          Probar gratis 14 días →
        </a>
        {/* "Ver demo" CTA hidden until video exists — PEND-02 */}
      </motion.div>

      {/* Microcopy */}
      <motion.p
        custom={0.35}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-4 text-sm text-muted-light"
      >
        Sin tarjeta · Configuración guiada · Cancela cuando quieras
      </motion.p>
    </div>
  )
}
