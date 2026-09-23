"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { SectionReveal } from "../section-reveal"

/* ── screens ─────────────────────────────────────── */
const screens = [
  {
    id: "home",
    label: "Tu día de un vistazo",
    desc: "Resumen clínico diario con citas, métricas y acciones rápidas al alcance.",
    src: "/landing/screenshots/mobile/home.webp",
    alt: "Pantalla de inicio con resumen del día, citas pendientes y acciones rápidas",
  },
  {
    id: "agenda",
    label: "Agenda en tiempo real",
    desc: "Calendario semanal con vista por día. Sillones, horarios y pacientes confirmados.",
    src: "/landing/screenshots/mobile/agenda.webp",
    alt: "Vista de agenda semanal con calendario y citas del día",
  },
  {
    id: "pacientes",
    label: "Todo el expediente contigo",
    desc: "Busca entre todos tus pacientes. Historial, contacto y evolución clínica al instante.",
    src: "/landing/screenshots/mobile/pacientes.webp",
    alt: "Lista de pacientes con búsqueda y datos de contacto",
  },
  {
    id: "ficha",
    label: "Ficha clínica completa",
    desc: "Próxima cita, visitas realizadas, imágenes y archivos del paciente en un solo lugar.",
    src: "/landing/screenshots/mobile/paciente-detalle.webp",
    alt: "Ficha de paciente con historial, citas e imágenes clínicas",
  },
  {
    id: "perfil",
    label: "Configuración del doctor",
    desc: "Tu especialidad, horario de atención y preferencias de notificaciones.",
    src: "/landing/screenshots/mobile/perfil.webp",
    alt: "Perfil del doctor con especialidad, contacto y ajustes",
  },
] as const

type ScreenId = (typeof screens)[number]["id"]

/* ── component ───────────────────────────────────── */
export function MobileApp() {
  const [active, setActive] = useState<ScreenId>("home")
  const current = screens.find((s) => s.id === active)!

  return (
    <section
      id="app-movil"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #060d1b 0%, #0a1628 40%, #0d1f3c 100%)",
      }}
    >
      {/* ── Ambient environment ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Central glow that makes the phone "emit light" */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, rgba(3,126,204,0.12) 0%, rgba(3,126,204,0.04) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Secondary accent glow */}
        <div
          className="absolute -bottom-20 right-[10%] h-96 w-96"
          style={{
            background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ── Header ── */}
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              App Nativa iOS & Android
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
              Tu clínica dental en tu bolsillo.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
              Diseñada para el flujo del odontólogo en gabinete. Rápida, clara, sin clics innecesarios.
            </p>
          </div>
        </SectionReveal>

        {/* ── Phone + features layout ── */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* ── Phone ── */}
          <SectionReveal>
            <div className="relative shrink-0">
              {/* Floating phone with 3D perspective */}
              <motion.div
                className="phone-device relative mx-auto"
                initial={{ rotateX: 8, rotateY: -6 }}
                whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{ perspective: 1200, transformStyle: "preserve-3d" }}
              >
                <div
                  className="relative w-[260px] overflow-hidden rounded-[44px] border-[7px] border-[#1a1a1a] bg-black sm:w-[290px] sm:rounded-[48px] sm:border-[8px]"
                  style={{
                    boxShadow: [
                      "0 0 0 1px rgba(255,255,255,0.08)",
                      "0 2px 4px rgba(0,0,0,0.2)",
                      "0 8px 16px rgba(0,0,0,0.2)",
                      "0 24px 48px rgba(0,0,0,0.25)",
                      "0 48px 96px rgba(0,0,0,0.3)",
                      "inset 0 1px 1px rgba(255,255,255,0.06)",
                    ].join(","),
                  }}
                >
                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-[10px] z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black sm:top-[12px] sm:h-[32px] sm:w-[120px]" />

                  {/* Screen with transitions */}
                  <div className="relative overflow-hidden rounded-[37px] sm:rounded-[40px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.35, ease: easeOutPremium }}
                      >
                        <Image
                          src={current.src}
                          alt={current.alt}
                          width={1280}
                          height={2856}
                          className="w-full"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Glass reflection overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10 rounded-[37px] sm:rounded-[40px]"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)",
                    }}
                  />
                </div>
              </motion.div>

              {/* Glow behind phone */}
              <div
                className="pointer-events-none absolute -inset-16 -z-10"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(3,126,204,0.15) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                aria-hidden="true"
              />
            </div>
          </SectionReveal>

          {/* ── Feature list (scroll-drives phone screen) ── */}
          <div className="flex w-full flex-col gap-3 lg:max-w-[380px] lg:gap-2 lg:py-4">
            {screens.map((screen, i) => (
              <FeatureRow
                key={screen.id}
                screen={screen}
                index={i}
                isActive={active === screen.id}
                onActivate={() => setActive(screen.id)}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom capability strip ── */}
        <SectionReveal>
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] sm:mt-20">
            {[
              "Agenda en tiempo real",
              "Expediente completo",
              "Cámara clínica",
              "Dictado por voz",
            ].map((cap, i) => (
              <span key={cap} className="flex items-center gap-2">
                {i > 0 && <span className="hidden text-slate-700 sm:inline">·</span>}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <circle cx="7" cy="7" r="6" stroke="#2DD4BF" strokeWidth="1.5" />
                  <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-slate-400">{cap}</span>
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

/* ── Feature row — highlights on view, drives phone screen ── */
function FeatureRow({
  screen,
  index,
  isActive,
  onActivate,
}: {
  screen: (typeof screens)[number]
  index: number
  isActive: boolean
  onActivate: () => void
}) {
  return (
    <button
      onClick={onActivate}
      className="group relative w-full rounded-2xl px-5 py-5 text-left transition-all duration-300 sm:py-6"
      style={{
        background: isActive
          ? "rgba(3,126,204,0.08)"
          : "transparent",
      }}
    >
      {/* Active left bar */}
      {isActive && (
        <motion.div
          layoutId="mobile-feature-bar"
          className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-brand-400"
          transition={{ duration: 0.3, ease: easeOutPremium }}
        />
      )}

      {/* Step number */}
      <span
        className={`text-[12px] font-bold tabular-nums tracking-wider transition-colors duration-300 ${isActive ? "text-brand-400" : "text-slate-600"}`}
      >
        0{index + 1}
      </span>

      {/* Title */}
      <h3
        className={`mt-1.5 text-[17px] font-bold leading-snug transition-colors duration-300 sm:text-[19px] ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}
      >
        {screen.label}
      </h3>

      {/* Description — only visible when active */}
      <AnimatePresence>
        {isActive && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeOutPremium }}
            className="mt-2 text-[14px] leading-relaxed text-slate-400"
          >
            {screen.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  )
}
