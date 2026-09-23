"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, AnimatePresence } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { SectionReveal } from "../section-reveal"

/* ── Animated waveform bars ─────────────────────── */
function Waveform({ active }: { active: boolean }) {
  const heights = [0.3, 0.7, 0.4, 0.9, 0.5, 1, 0.6, 0.8, 0.4, 0.95, 0.55, 0.85, 0.35, 0.75, 0.5, 0.9, 0.65, 0.45, 0.8, 0.3, 0.7, 0.55, 0.6, 0.4, 0.85, 0.5, 0.7, 0.35, 0.9, 0.6]

  return (
    <div className="flex items-center justify-center gap-[2.5px]" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-red-500 to-red-400"
          animate={active ? {
            scaleY: [h, h * 0.4 + 0.3, h, h * 0.6 + 0.2, h],
            opacity: [0.7, 1, 0.7],
          } : { scaleY: 0.15, opacity: 0.3 }}
          transition={active ? {
            duration: 1.2 + (i % 5) * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          } : { duration: 0.5 }}
          style={{ height: 32, transformOrigin: "center" }}
        />
      ))}
    </div>
  )
}

/* ── Streaming text effect ──────────────────────── */
function StreamingText({ text, active, delay = 0 }: { text: string; active: boolean; delay?: number }) {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (!active) { setVisible(0); return }
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisible((v) => {
          if (v >= text.length) { clearInterval(interval); return v }
          return v + 1
        })
      }, 18)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [active, text.length, delay])

  return (
    <span>
      {text.slice(0, visible)}
      {active && visible < text.length && (
        <span className="ml-0.5 inline-block h-[14px] w-[2px] animate-pulse bg-brand-400" />
      )}
    </span>
  )
}

/* ── Timer ───────────────────────────────────────── */
function RecordingTimer({ active }: { active: boolean }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!active) { setSeconds(0); return }
    const interval = setInterval(() => {
      setSeconds((s) => (s >= 18 ? 18 : s + 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [active])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return <span className="font-mono text-[13px] tabular-nums text-red-400">{mm}:{ss}</span>
}

/* ── Structured note fields ─────────────────────── */
const noteFields = [
  { label: "Procedimiento", value: "Restauración con resina compuesta (MO)", delay: 2200 },
  { label: "Pieza dental", value: "#36 — Primer molar inferior izquierdo", delay: 2800 },
  { label: "Detalles", value: "Grabado ácido 15s, adhesivo universal, fotocurado. Sin incidencias.", delay: 3400 },
  { label: "Indicaciones", value: "Régimen blando por 2 horas. Evitar alimentos pigmentados 24h.", delay: 4000 },
] as const

/* ── Main component ─────────────────────────────── */
export function VoiceNotes() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" })
  const [phase, setPhase] = useState<"idle" | "recording" | "processing" | "done">("idle")

  useEffect(() => {
    if (!isInView) return
    // Start recording after entering view
    const t1 = setTimeout(() => setPhase("recording"), 600)
    const t2 = setTimeout(() => setPhase("processing"), 3200)
    const t3 = setTimeout(() => setPhase("done"), 4200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [isInView])

  const isRecording = phase === "recording" || phase === "processing" || phase === "done"
  const showNote = phase === "processing" || phase === "done"

  return (
    <section
      ref={sectionRef}
      id="dictado"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{
        background: "linear-gradient(180deg, #070e1b 0%, #0a1628 40%, #0d1a30 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[30%] h-[500px] w-[700px] -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(239,68,68,0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-20 left-[20%] h-80 w-80"
          style={{
            background: "radial-gradient(circle, rgba(3,126,204,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-red-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.6)]" />
              Dictado Inteligente Clínico
            </div>
            <h2 className="text-balance text-[28px] font-black leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[46px]">
              Habla 18 segundos. Ahorra 15 minutos.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-[16px]">
              Dicta la nota clínica con total naturalidad. La IA estructura todo en procedimiento, pieza, detalles e indicaciones — listo para firmar.
            </p>
          </div>
        </SectionReveal>

        {/* ── Transformation flow ── */}
        <SectionReveal>
          <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start lg:gap-4">

            {/* ── LEFT: Voice input ── */}
            <div className="flex-1 lg:max-w-[480px]">
              <div
                className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                {/* Recording header */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                      <div className={`h-4 w-4 rounded-full bg-red-500 ${isRecording ? "animate-pulse" : ""}`} />
                      {isRecording && (
                        <div className="absolute inset-0 animate-ping rounded-full bg-red-500/30" />
                      )}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">
                        {phase === "idle" ? "Listo para grabar" : phase === "recording" ? "Grabando dictado..." : "Dictado completado"}
                      </p>
                      <p className="text-[11px] text-slate-500">Dra. Patricia Armas · Consultorio 2</p>
                    </div>
                  </div>
                  <RecordingTimer active={isRecording} />
                </div>

                {/* Waveform */}
                <div className="mb-5 rounded-xl bg-white/[0.03] px-4 py-4">
                  <Waveform active={phase === "recording"} />
                </div>

                {/* Transcription */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Transcripción en vivo</p>
                  <p className="min-h-[60px] text-[13px] italic leading-relaxed text-slate-300 sm:text-[14px]">
                    {isRecording ? (
                      <StreamingText
                        text="Realizamos resina compuesta mesio-oclusal en pieza 36, grabado ácido por 15 segundos, adhesivo universal y fotocurado. Se indica no masticar sólidos por 2 horas."
                        active={isRecording}
                        delay={400}
                      />
                    ) : (
                      <span className="text-slate-600">Mantén pulsado para dictar...</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* ── CENTER: Flow connector ── */}
            <div className="hidden items-center lg:flex">
              <div className="flex flex-col items-center gap-2 px-2">
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
                <motion.div
                  animate={showNote ? { scale: [1, 1.2, 1], opacity: 1 } : { opacity: 0.3 }}
                  transition={{ duration: 0.6, ease: easeOutPremium }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-950/80"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
              </div>
            </div>

            {/* Mobile connector */}
            <div className="flex items-center justify-center lg:hidden">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700" />
                <motion.div
                  animate={showNote ? { scale: [1, 1.15, 1], opacity: 1 } : { opacity: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/30 bg-brand-950/80"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700" />
              </div>
            </div>

            {/* ── RIGHT: Structured AI output ── */}
            <div className="flex-1 lg:max-w-[480px]">
              <AnimatePresence>
                {showNote ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: easeOutPremium }}
                    className="overflow-hidden rounded-2xl border border-brand-500/20 bg-white/[0.04] backdrop-blur-sm"
                    style={{
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 40px rgba(3,126,204,0.08)",
                    }}
                  >
                    {/* Header */}
                    <div className="border-b border-white/[0.06] px-5 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-500/20">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M3 7.5L5.5 10L11 4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-[12px] font-bold uppercase tracking-wider text-brand-400">Nota generada por ClinicFlow AI</span>
                        </div>
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">Lista para firmar</span>
                      </div>
                    </div>

                    {/* Note fields */}
                    <div className="space-y-0 divide-y divide-white/[0.04] px-5 sm:px-6">
                      {noteFields.map((field, i) => (
                        <motion.div
                          key={field.label}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 * i, duration: 0.4, ease: easeOutPremium }}
                          className="py-3.5"
                        >
                          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{field.label}</p>
                          <p className="text-[13px] leading-relaxed text-slate-200 sm:text-[14px]">{field.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 border-t border-white/[0.06] px-5 py-4 sm:px-6">
                      <button className="flex-1 rounded-xl bg-brand-600 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-500">
                        Autorizar y Firmar
                      </button>
                      <button className="rounded-xl border border-white/10 px-4 py-2.5 text-[13px] font-semibold text-slate-300 transition-colors hover:border-white/20 hover:text-white">
                        Editar
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex h-full min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02]"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600">
                          <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-slate-600">La nota clínica aparecerá aquí</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </SectionReveal>

        {/* ── Time savings callout ── */}
        <SectionReveal>
          <div className="mx-auto mt-12 max-w-md text-center sm:mt-16">
            <div className="inline-flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-4 backdrop-blur-sm">
              <div className="text-right">
                <p className="text-[11px] font-bold uppercase tracking-wider text-red-400/60 line-through">15 min</p>
                <p className="text-[10px] text-slate-600">Escribir a mano</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[20px] font-black tabular-nums text-emerald-400">18 seg</p>
                <p className="text-[10px] text-slate-500">Dictado + IA</p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* ── Bottom capability strip ── */}
        <SectionReveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] sm:mt-14">
            {[
              "Clasificación automática",
              "Odontograma + Evolución",
              "Compatible con dictado por voz",
              "Firma digital",
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
