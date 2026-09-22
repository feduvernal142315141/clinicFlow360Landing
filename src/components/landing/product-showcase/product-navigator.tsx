"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Calendar,
  Users,
  LayoutDashboard,
  CircleDot,
  FolderOpen,
  Crosshair,
  ChevronRight,
} from "lucide-react"
import { easeOutPremium } from "@/lib/motion/easings"
import { AgendaPreview } from "./previews/agenda-preview"
import { PacientesPreview } from "./previews/pacientes-preview"
import { DoctoresPreview } from "./previews/doctores-preview"
import { ClinicaPreview } from "./previews/clinica-preview"
import { ComunicacionPreview } from "./previews/comunicacion-preview"
import { AppMovilPreview } from "./previews/app-movil-preview"

const tabs = [
  { id: "agenda", label: "Agenda", desc: "Citas por especialista y sillón", icon: Calendar },
  { id: "pacientes", label: "Pacientes", desc: "42 registros con historial", icon: Users },
  { id: "doctores", label: "Dashboard", desc: "Métricas y ocupación", icon: LayoutDashboard },
  { id: "clinica", label: "Odontograma", desc: "FDI interactivo con IA", icon: CircleDot },
  { id: "comunicacion", label: "Expediente", desc: "Ficha clínica completa", icon: FolderOpen },
  { id: "app-movil", label: "Pieza dental", desc: "Superficies e ICDAS", icon: Crosshair },
] as const

type TabId = (typeof tabs)[number]["id"]

const previews: Record<TabId, React.ComponentType> = {
  agenda: AgendaPreview,
  pacientes: PacientesPreview,
  doctores: DoctoresPreview,
  clinica: ClinicaPreview,
  comunicacion: ComunicacionPreview,
  "app-movil": AppMovilPreview,
}

const AUTO_ROTATE_MS = 5000

export function ProductNavigator() {
  const [active, setActive] = useState<TabId>("agenda")
  const [paused, setPaused] = useState(false)
  const Preview = previews[active]

  // Auto-rotate tabs to show interactivity
  const nextTab = useCallback(() => {
    setActive((current) => {
      const idx = tabs.findIndex((t) => t.id === current)
      return tabs[(idx + 1) % tabs.length]!.id
    })
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(nextTab, AUTO_ROTATE_MS)
    return () => clearInterval(timer)
  }, [paused, nextTab])

  const handleSelect = (id: TabId) => {
    setActive(id)
    setPaused(true) // Stop auto-rotate when user interacts
  }

  return (
    <div
      className="overflow-hidden rounded-3xl"
      style={{
        border: "1px solid rgba(15,23,42,0.07)",
        boxShadow: "0 30px 90px rgba(15,23,42,0.10)",
        background: "#FFFFFF",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header hint */}
      <div className="border-b border-[#EEF2F6] bg-[#FBFCFE] px-5 py-3 text-center text-[11px] font-medium text-muted sm:hidden">
        ← Desliza para explorar módulos →
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar nav */}
        <div className="shrink-0 border-b border-b-[#EEF2F6] bg-[#FBFCFE] p-2 lg:w-[260px] lg:border-b-0 lg:border-r lg:border-r-[#EEF2F6] lg:p-4">
          {/* Mobile: horizontal scroll */}
          <div className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = active === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelect(tab.id)}
                  className="group relative flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 lg:w-full lg:px-4 lg:py-3.5"
                  style={{
                    background: isActive ? "rgba(3,126,204,0.07)" : "transparent",
                    color: isActive ? "#037ECC" : "#64748B",
                  }}
                >
                  {/* Active bar — desktop */}
                  {isActive && (
                    <motion.div
                      layoutId="product-nav-indicator"
                      className="absolute left-0 top-2 bottom-2 hidden w-[3px] rounded-full bg-brand-600 lg:block"
                      transition={{ duration: 0.25, ease: easeOutPremium }}
                    />
                  )}

                  {/* Icon */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isActive ? "bg-brand-100 text-brand-600" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"}`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Label + description */}
                  <div className="hidden lg:block">
                    <div className={`text-[13px] font-semibold ${isActive ? "text-brand-700" : "text-slate-700 group-hover:text-slate-900"}`}>
                      {tab.label}
                    </div>
                    <div className={`text-[11px] ${isActive ? "text-brand-500" : "text-slate-400"}`}>
                      {tab.desc}
                    </div>
                  </div>

                  {/* Mobile label */}
                  <span className="whitespace-nowrap text-[12px] font-medium lg:hidden">{tab.label}</span>

                  {/* Arrow — desktop active */}
                  {isActive && (
                    <ChevronRight className="ml-auto hidden h-4 w-4 text-brand-400 lg:block" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Progress dots — shows auto-rotation */}
          <div className="mt-3 hidden items-center justify-center gap-1.5 lg:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleSelect(tab.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${active === tab.id ? "w-6 bg-brand-500" : "w-1.5 bg-slate-300 hover:bg-slate-400"}`}
                aria-label={`Ver ${tab.label}`}
              />
            ))}
          </div>
        </div>

        {/* Product canvas */}
        <div className="relative flex-1 overflow-hidden bg-slate-50/50" style={{ minHeight: 300 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeOutPremium }}
              className="p-3 sm:p-4"
            >
              <Preview />
            </motion.div>
          </AnimatePresence>

          {/* Subtle label overlay */}
          <div className="absolute bottom-3 right-3 rounded-lg bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-muted backdrop-blur-sm sm:bottom-4 sm:right-4">
            {tabs.find((t) => t.id === active)?.label} — Vista en vivo
          </div>
        </div>
      </div>
    </div>
  )
}
