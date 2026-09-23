"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X, LayoutGrid, Bot, Smartphone, CreditCard, Mic, Shield, HelpCircle, ArrowRight } from "lucide-react"
import { navActions } from "@/data/navigation"
import { easeOutPremium } from "@/lib/motion/easings"

const menuItems = [
  { label: "Producto", href: "#producto", desc: "Agenda, odontograma y más", icon: LayoutGrid },
  { label: "Recepción IA", href: "#recepcion-ia", desc: "WhatsApp automatizado 24/7", icon: Bot, badge: "24/7" },
  { label: "App móvil", href: "#app-movil", desc: "Para doctores en movimiento", icon: Smartphone },
  { label: "Dictado clínico", href: "#dictado", desc: "Voz a nota clínica con IA", icon: Mic },
  { label: "Seguridad", href: "#seguridad", desc: "Cifrado y cumplimiento", icon: Shield },
  { label: "Precios", href: "#precios", desc: "Planes desde $29/mes", icon: CreditCard },
  { label: "Preguntas frecuentes", href: "#faq", desc: "Resuelve tus dudas", icon: HelpCircle },
] as const

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.35, ease: easeOutPremium, delay: 0.08 + i * 0.05 },
  }),
  exit: { opacity: 0, x: -8, transition: { duration: 0.12 } },
}

/* ── Scroll lock that preserves position (iOS/Android safe) ── */
function lockScroll() {
  const scrollY = window.scrollY
  document.body.style.position = "fixed"
  document.body.style.top = `-${scrollY}px`
  document.body.style.left = "0"
  document.body.style.right = "0"
  return scrollY
}

function unlockScroll(savedScrollY: number) {
  document.body.style.position = ""
  document.body.style.top = ""
  document.body.style.left = ""
  document.body.style.right = ""
  window.scrollTo(0, savedScrollY)
}

/* ── Overlay ── */
function MenuOverlay({ onNavigate, onClose }: { onNavigate: (href: string) => void; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#06101a]"
    >
      <div className="flex shrink-0 items-center justify-between px-6 py-5">
        <button onClick={() => onNavigate("#hero")} className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 text-white shadow-md shadow-brand-500/20">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
              <path d="M9 9c1.5 1 4.5 1 6 0" />
            </svg>
          </div>
          <div className="flex items-baseline">
            <span className="text-lg font-black tracking-tight text-white">ClinicFlow</span>
            <span className="text-lg font-extrabold tracking-tight text-brand-400">360</span>
          </div>
        </button>
        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white active:scale-95"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 px-4 pt-2">
        <div className="space-y-0.5">
          {menuItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                onClick={() => onNavigate(item.href)}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-colors active:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-semibold text-white">{item.label}</span>
                    {"badge" in item && item.badge && (
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-950/60 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[12px] text-slate-500">{item.desc}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-slate-700">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            )
          })}
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: easeOutPremium }}
        className="shrink-0 border-t border-white/[0.06] px-6 pb-8 pt-6"
      >
        <button
          onClick={() => onNavigate(navActions.login.href)}
          className="mb-3 flex h-12 w-full items-center justify-center rounded-xl border border-white/[0.08] text-[14px] font-semibold text-slate-300 transition-colors active:bg-white/[0.04]"
        >
          {navActions.login.label}
        </button>
        <button
          onClick={() => onNavigate(navActions.cta.href)}
          className="btn-primary flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[14px] font-bold"
        >
          Probar gratis 14 días
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-center text-[11px] text-slate-600">
          Sin tarjeta · Cancela cuando quieras
        </p>
      </motion.div>
    </motion.div>
  )
}

/* ── Main component ── */
export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const savedScrollRef = useRef(0)
  const targetRef = useRef<string | null>(null)

  useEffect(() => { setMounted(true) }, [])

  // Lock/unlock scroll
  useEffect(() => {
    if (open) {
      savedScrollRef.current = lockScroll()
    } else {
      const savedY = savedScrollRef.current
      const target = targetRef.current
      targetRef.current = null

      // Restore scroll position first
      unlockScroll(savedY)

      // Then scroll to target if one was set
      if (target) {
        const id = target.replace("#", "")
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop - 80
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
        }
      }
    }
  }, [open])

  function handleNavigate(href: string) {
    if (href.startsWith("/")) {
      // Unlock before navigating away
      unlockScroll(savedScrollRef.current)
      window.location.href = href
      return
    }
    targetRef.current = href
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && <MenuOverlay onNavigate={handleNavigate} onClose={() => setOpen(false)} />}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
