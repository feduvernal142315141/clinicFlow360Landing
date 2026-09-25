"use client"

import { motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { SectionReveal } from "../section-reveal"

/* ── Icons as proper SVGs ───────────────────────── */
const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const DatabaseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
)

const ServerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <path d="M6 6h.01M6 18h.01" />
  </svg>
)

const items = [
  {
    icon: ShieldIcon,
    title: "Cifrado de grado médico",
    detail: "AES-256 en reposo y TLS 1.3 en tránsito. Compatible con normativas sanitarias internacionales.",
    metric: "AES-256",
    color: "#2DD4BF",
  },
  {
    icon: DatabaseIcon,
    title: "Respaldos automáticos",
    detail: "Historias clínicas, radiografías y odontogramas respaldados automáticamente en múltiples zonas.",
    metric: "Automático",
    color: "#38BDF8",
  },
  {
    icon: UsersIcon,
    title: "Permisos por roles",
    detail: "Recepción, especialistas y administradores solo acceden a lo que les corresponde.",
    metric: "RBAC",
    color: "#A78BFA",
  },
  {
    icon: ServerIcon,
    title: "Infraestructura resiliente",
    detail: "Infraestructura cloud multi-zona con failover automático. Arquitectura diseñada para confiabilidad.",
    metric: "Redundancia",
    color: "#F59E0B",
  },
] as const

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutPremium, delay: i * 0.1 },
  }),
}

export function Security() {
  return (
    <section id="seguridad" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28" style={{ background: "linear-gradient(180deg, #0a1628 0%, #080e1c 100%)" }}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[20%] h-[400px] w-[600px] -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(45,212,191,0.06) 0%, transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-950/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-emerald-400 backdrop-blur-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Seguridad &amp; Cumplimiento
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
              La información de tus pacientes merece el mismo cuidado que ellos.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
              Seguridad enterprise desde el día uno. Sin configuraciones extra, sin costos ocultos.
            </p>
          </div>
        </SectionReveal>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-7"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Corner glow on hover */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle, ${item.color}15, transparent 70%)` }}
                  aria-hidden="true"
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${item.color}12`, color: item.color }}
                  >
                    <Icon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-[15px] font-bold text-white">{item.title}</h4>
                      <span
                        className="hidden rounded-md px-2 py-0.5 font-mono text-[10px] font-bold sm:inline-block"
                        style={{ background: `${item.color}12`, color: item.color }}
                      >
                        {item.metric}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust strip */}
        <SectionReveal>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-medium text-slate-500 sm:mt-14">
            {[
              { label: "Cifrado HTTPS", icon: "🔒" },
              { label: "Controles de acceso", icon: "🔐" },
              { label: "Datos en tu región", icon: "🌎" },
              { label: "Prácticas de seguridad", icon: "✓" },
            ].map((badge, i) => (
              <span key={badge.label} className="flex items-center gap-2">
                {i > 0 && <span className="hidden text-slate-700 sm:inline">·</span>}
                <span className="text-[13px]">{badge.icon}</span>
                <span className="text-slate-400">{badge.label}</span>
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
