"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Calendar,
  Users,
  Stethoscope,
  Building2,
  MessageSquare,
  Smartphone,
} from "lucide-react"
import { easeOutPremium } from "@/lib/motion/easings"
import { AgendaPreview } from "./previews/agenda-preview"
import { PacientesPreview } from "./previews/pacientes-preview"
import { DoctoresPreview } from "./previews/doctores-preview"
import { ClinicaPreview } from "./previews/clinica-preview"
import { ComunicacionPreview } from "./previews/comunicacion-preview"
import { AppMovilPreview } from "./previews/app-movil-preview"

const tabs = [
  { id: "agenda", label: "Agenda", icon: Calendar },
  { id: "pacientes", label: "Pacientes", icon: Users },
  { id: "doctores", label: "Doctores", icon: Stethoscope },
  { id: "clinica", label: "Clínica", icon: Building2 },
  { id: "comunicacion", label: "Comunicación", icon: MessageSquare },
  { id: "app-movil", label: "App móvil", icon: Smartphone },
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

export function ProductNavigator() {
  const [active, setActive] = useState<TabId>("agenda")
  const Preview = previews[active]

  return (
    <div
      className="overflow-hidden rounded-[24px]"
      style={{
        border: "1px solid rgba(15,23,42,0.07)",
        boxShadow: "0 30px 90px rgba(15,23,42,0.10)",
        background: "#FFFFFF",
      }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar nav */}
        <div className="shrink-0 border-b border-b-[#EEF2F6] bg-[#FBFCFE] p-3 lg:w-[220px] lg:border-b-0 lg:border-r lg:border-r-[#EEF2F6] lg:p-4">
          {/* Mobile: horizontal scroll */}
          <div className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = active === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className="relative flex shrink-0 items-center gap-2.5 rounded-[12px] px-3.5 py-3 text-left text-[13px] font-medium transition-colors duration-150 lg:w-full lg:px-4"
                  style={{
                    background: isActive ? "rgba(3,126,204,0.07)" : "transparent",
                    color: isActive ? "#037ECC" : "#64748B",
                  }}
                >
                  {/* Active bar — desktop only */}
                  {isActive && (
                    <motion.div
                      layoutId="product-nav-indicator"
                      className="absolute left-0 top-2 bottom-2 hidden w-[3px] rounded-full bg-brand-600 lg:block"
                      transition={{ duration: 0.25, ease: easeOutPremium }}
                    />
                  )}
                  <Icon
                    className="h-4 w-4 shrink-0"
                    style={{ opacity: isActive ? 1 : 0.6 }}
                  />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Product canvas */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: 420 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 12, scale: 0.99 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -8, scale: 0.99 }}
              transition={{ duration: 0.35, ease: easeOutPremium }}
              className="p-5 sm:p-6 lg:p-8"
            >
              <Preview />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
