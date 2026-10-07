"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "motion/react"
import { Calendar, Users, FolderOpen, CircleDot, ListChecks, Images, LayoutDashboard } from "lucide-react"
import { useReducedMotion } from "@/lib/motion/reduced-motion"
import { platformCopy } from "@/data/home"

const { screens } = platformCopy
type ScreenId = (typeof screens)[number]["id"]

const icons: Record<ScreenId, React.ComponentType<{ className?: string }>> = {
  agenda: Calendar,
  pacientes: Users,
  expediente: FolderOpen,
  odontograma: CircleDot,
  tratamientos: ListChecks,
  imagenes: Images,
  dashboard: LayoutDashboard,
}

const AUTO_ROTATE_MS = 5000

export function ProductNavigator() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px" })
  const reducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Rotate through the modules while visible, until the visitor takes over
  useEffect(() => {
    if (!inView || paused || reducedMotion) return
    const timer = setInterval(() => setActiveIndex((current) => (current + 1) % screens.length), AUTO_ROTATE_MS)
    return () => clearInterval(timer)
  }, [inView, paused, reducedMotion])

  function select(index: number) {
    setActiveIndex(index)
    setPaused(true)
  }

  return (
    <div ref={ref}>
      <div
        className="overflow-hidden rounded-3xl"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
        }}
        onMouseEnter={() => setPaused(true)}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Module tabs */}
          <div
            role="tablist"
            aria-label={platformCopy.screensLabel}
            className="scrollbar-hide flex shrink-0 gap-1 overflow-x-auto border-b border-white/[0.06] p-2 lg:w-[250px] lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r lg:p-3"
          >
            {screens.map((screen, index) => {
              const Icon = icons[screen.id]
              const isActive = index === activeIndex
              return (
                <button
                  key={screen.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => select(index)}
                  className={`flex shrink-0 cursor-pointer items-center gap-3 rounded-xl border-l-[3px] px-3 py-2.5 text-left transition-colors duration-200 lg:w-full lg:py-3 ${
                    isActive ? "border-brand-400 bg-brand-500/[0.10]" : "border-transparent hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isActive ? "bg-brand-500/20 text-brand-300" : "bg-white/[0.05] text-slate-500"}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className={`block whitespace-nowrap text-[13px] font-semibold ${isActive ? "text-white" : "text-slate-400"}`}>{screen.label}</span>
                    <span className="hidden text-[11px] text-slate-500 lg:block">{screen.desc}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* Capture. Every screen stays mounted and only its opacity changes. */}
          <div className="relative min-w-0 flex-1 p-2 sm:p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0b111c] sm:rounded-2xl">
              {screens.map((screen, index) => (
                <Image
                  key={screen.id}
                  src={screen.src}
                  alt={index === activeIndex ? screen.alt : ""}
                  aria-hidden={index !== activeIndex}
                  fill
                  sizes="(min-width: 1024px) 980px, 100vw"
                  className={`object-cover transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[12px] text-slate-500">{platformCopy.demoNote}</p>
    </div>
  )
}
