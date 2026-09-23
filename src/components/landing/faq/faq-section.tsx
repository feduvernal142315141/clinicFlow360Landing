"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { SectionReveal } from "../section-reveal"
import { FAQStructuredData } from "./faq-structured-data"
import { faqItems } from "@/data/faq"

/* ── Categories ─────────────────────────────────── */
const categories = [
  { id: "all", label: "Todas" },
  { id: "setup", label: "Configuración" },
  { id: "ai", label: "IA & Automatización" },
  { id: "billing", label: "Planes & Pagos" },
] as const

type CategoryId = (typeof categories)[number]["id"]

const faqCategorized = [
  { ...faqItems[0]!, category: "setup" as const },
  { ...faqItems[1]!, category: "setup" as const },
  { ...faqItems[2]!, category: "setup" as const },
  { ...faqItems[3]!, category: "billing" as const },
  { ...faqItems[4]!, category: "billing" as const },
  { ...faqItems[5]!, category: "ai" as const },
  { ...faqItems[6]!, category: "ai" as const },
  { ...faqItems[7]!, category: "billing" as const },
]

export function FAQSection() {
  const [active, setActive] = useState<CategoryId>("all")

  const filtered = active === "all"
    ? faqCategorized
    : faqCategorized.filter((item) => item.category === active)

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #080e1c 0%, #0a1628 100%)" }}
    >
      <FAQStructuredData items={faqItems} />

      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px]"
          style={{ background: "radial-gradient(circle, rgba(3,126,204,0.05) 0%, transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1100px]">
        {/* Header */}
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-brand-400">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              Preguntas Frecuentes
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
              Todo lo que necesitas saber
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-400">
              Si no encuentras tu respuesta, nuestro equipo responde en menos de 2 horas.
            </p>
          </div>
        </SectionReveal>

        {/* Category filter */}
        <SectionReveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all duration-200 sm:text-[13px] ${
                  active === cat.id
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-300"
                }`}
                style={active === cat.id ? { border: "1px solid rgba(255,255,255,0.12)" } : { border: "1px solid transparent" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* FAQ items */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <FAQCard key={item.question} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="mt-12 text-center sm:mt-14">
            <p className="text-[14px] text-slate-500">
              ¿Tienes otra duda?{" "}
              <a href="#" className="font-semibold text-brand-400 transition-colors hover:text-brand-300">
                Escríbenos por WhatsApp
              </a>{" "}
              o envía un correo a{" "}
              <span className="font-medium text-slate-300">soporte@clinicflow360.com</span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

/* ── Individual FAQ card with expand ──────────── */
function FAQCard({ item, index }: { item: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: easeOutPremium, delay: index * 0.04 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="group w-full rounded-xl text-left transition-colors duration-200 hover:bg-white/[0.03]"
        style={{
          background: open ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
          border: `1px solid ${open ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
        }}
      >
        <div className="flex items-center gap-4 px-5 py-4 sm:px-6">
          {/* Number */}
          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold tabular-nums transition-colors duration-200 ${
            open ? "bg-brand-500/20 text-brand-400" : "bg-white/[0.04] text-slate-600"
          }`}>
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span className={`flex-1 text-[14px] font-medium leading-snug transition-colors duration-200 sm:text-[15px] ${
            open ? "text-white" : "text-slate-300 group-hover:text-white"
          }`}>
            {item.question}
          </span>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: easeOutPremium }}
            className="shrink-0 text-slate-600"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOutPremium }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/[0.04] px-5 pb-5 pt-4 sm:px-6 sm:pl-[68px]">
                <p className="text-[13px] leading-relaxed text-slate-400 sm:text-[14px]">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}
