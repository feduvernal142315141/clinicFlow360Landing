"use client"

import { motion } from "motion/react"
import { ArrowRight, PlayCircle } from "lucide-react"
import { easeOutPremium } from "@/lib/motion/easings"
import { siteConfig } from "@/lib/config"
import { heroCopy } from "@/data/home"

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
      {/* Eyebrow */}
      <motion.div custom={0} variants={fade} initial="hidden" animate="visible">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 shadow-sm backdrop-blur-md sm:px-4">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="hidden text-xs font-bold uppercase tracking-[0.08em] text-brand-300 sm:inline">{heroCopy.eyebrow}</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-brand-300 sm:hidden">{heroCopy.eyebrowShort}</span>
        </div>
      </motion.div>

      <motion.h1 custom={0.05} variants={fade} initial="hidden" animate="visible"
        className="headline-hero text-balance mt-6 text-[34px] sm:mt-8 sm:text-[52px] md:text-[60px] lg:text-[68px] xl:text-[72px]"
        style={{ lineHeight: 1.05 }}
      >
        {heroCopy.headingLead}
        <br />
        <span className="bg-gradient-to-tr from-brand-400 via-brand-300 to-sky-300 bg-clip-text text-transparent">
          {heroCopy.headingAccent}
        </span>
      </motion.h1>

      <motion.p custom={0.1} variants={fade} initial="hidden" animate="visible"
        className="text-pretty mx-auto mt-5 max-w-[360px] text-[14px] leading-relaxed text-slate-400 sm:mt-6 sm:max-w-[640px] sm:text-[17px] lg:text-[18px]"
      >
        {heroCopy.text}
      </motion.p>

      <motion.ul custom={0.13} variants={fade} initial="hidden" animate="visible"
        className="mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-300 sm:text-[12px]"
      >
        {heroCopy.pillars.map((pillar, index) => (
          <li key={pillar} className="flex items-center gap-2.5">
            {index > 0 && <span className="text-slate-600" aria-hidden="true">·</span>}
            {pillar}
          </li>
        ))}
      </motion.ul>

      {/* CTAs */}
      <motion.div custom={0.16} variants={fade} initial="hidden" animate="visible"
        className="mt-7 flex w-full flex-col gap-3 px-4 sm:mt-9 sm:w-auto sm:flex-row sm:px-0"
      >
        <a href={siteConfig.trialSignupPath} className="btn-primary inline-flex h-[50px] items-center justify-center gap-2 rounded-full px-7 text-[15px] sm:h-[52px]">
          {heroCopy.primaryCta}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#ecosistema" className="inline-flex h-[50px] items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-6 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:h-[52px]">
          <PlayCircle className="h-5 w-5 text-brand-400" />
          {heroCopy.secondaryCta}
        </a>
      </motion.div>

      {/* Microcopy */}
      <motion.p custom={0.22} variants={fade} initial="hidden" animate="visible"
        className="mt-4 text-[11px] text-slate-500 sm:text-[12px]"
      >
        {heroCopy.microcopy.join(" · ")}
      </motion.p>
    </div>
  )
}
