"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { plans } from "@/data/pricing"
import { SectionReveal } from "../section-reveal"

/* ── Plan icon per slug ─────────────────────────── */
const planIcons: Record<string, React.ReactNode> = {
  esencial: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
    </svg>
  ),
  pro: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
}

const planColors: Record<string, { accent: string; glow: string; border: string }> = {
  esencial: { accent: "#94A3B8", glow: "rgba(148,163,184,0.06)", border: "rgba(255,255,255,0.08)" },
  pro: { accent: "#38BDF8", glow: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.3)" },
  ai: { accent: "#A78BFA", glow: "rgba(167,139,250,0.06)", border: "rgba(255,255,255,0.08)" },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutPremium, delay: i * 0.12 },
  }),
}

export function Pricing() {
  return (
    <section
      id="precios"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #0a1628 100%)" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[15%] h-[500px] w-[700px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 60%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-20 right-[20%] h-72 w-72"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.02]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              Precios para LATAM
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
              Comienza hoy con 14 días gratis.
              <br />
              <span className="text-slate-400">Sin tarjeta.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
              Planes pensados para el mercado dental latinoamericano. Escala cuando tu clínica crezca.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center rounded-full p-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="rounded-full px-4 py-2 text-[13px] font-bold text-white" style={{ background: "rgba(255,255,255,0.08)" }}>
                Mensual
              </span>
              <span className="cursor-pointer rounded-full px-4 py-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-300">
                Anual <span className="ml-1 rounded-md bg-emerald-950/60 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">-20%</span>
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Cards */}
        <div className="grid items-start gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => {
            const colors = planColors[plan.slug] ?? planColors.esencial!
            const icon = planIcons[plan.slug]
            return (
              <motion.div
                key={plan.slug}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${
                  plan.highlighted ? "lg:-mt-4 lg:mb-4" : ""
                }`}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(180deg, rgba(56,189,248,0.06) 0%, rgba(56,189,248,0.02) 100%)"
                    : "rgba(255,255,255,0.02)",
                  border: `1px solid ${colors.border}`,
                  boxShadow: plan.highlighted
                    ? "0 0 40px rgba(56,189,248,0.08), 0 20px 60px rgba(0,0,0,0.3)"
                    : "0 4px 24px rgba(0,0,0,0.2)",
                }}
              >
                {/* Top glow for highlighted */}
                {plan.highlighted && (
                  <div
                    className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[200%] -translate-x-1/2"
                    style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.12), transparent 60%)", filter: "blur(40px)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Badge */}
                {plan.badge && (
                  <div className="flex justify-center pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Plan header */}
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${colors.accent}12`, color: colors.accent }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-white">{plan.name}</h3>
                      <p className="text-[12px] text-slate-500">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-[11px] font-medium text-slate-500">USD</span>
                    <span className="text-[44px] font-black leading-none tracking-tight text-white">${plan.price}</span>
                    <span className="mb-1 text-[14px] font-medium text-slate-500">/mes</span>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px" style={{ background: `linear-gradient(to right, ${colors.accent}20, transparent)` }} />

                  {/* Features */}
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f.name}
                        className={`flex items-start gap-2.5 text-[13px] leading-snug ${
                          f.included ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {f.included ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                            <circle cx="8" cy="8" r="7" stroke="#2DD4BF" strokeWidth="1.5" />
                            <path d="M5 8.5L7 10.5L11 6" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                            <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                          </svg>
                        )}
                        {f.name}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`mt-8 w-full rounded-xl py-3.5 text-[14px] font-bold transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 hover:shadow-brand-500/30 active:scale-[0.98]"
                        : "border border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom trust strip */}
        <SectionReveal>
          <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
            <p className="text-[13px] text-slate-500">
              Todos los planes incluyen: <span className="text-slate-400">SSL gratis</span> · <span className="text-slate-400">Soporte en español</span> · <span className="text-slate-400">Sin contratos de permanencia</span> · <span className="text-slate-400">Cancela cuando quieras</span>
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 text-[11px] font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500/60">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Pagos seguros con Stripe
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500/60">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <path d="M1 10h22" />
                </svg>
                Facturación en USD o MXN
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
