"use client"

import { useCallback, useRef, useState } from "react"

/**
 * Interactive before/after comparison slider.
 * Built with Pointer Events + CSS clip-path. No external library.
 * Supports mouse, touch, and keyboard (ArrowLeft/Right, Home, End).
 *
 * Uses placeholder colored panels until real clinical images exist (PEND-18).
 */
export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return
      updatePosition(e.clientX)
    },
    [updatePosition]
  )

  const onPointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 2
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault()
        setPosition((p) => Math.max(0, p - step))
        break
      case "ArrowRight":
        e.preventDefault()
        setPosition((p) => Math.min(100, p + step))
        break
      case "Home":
        e.preventDefault()
        setPosition(0)
        break
      case "End":
        e.preventDefault()
        setPosition(100)
        break
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full max-w-[1100px] mx-auto cursor-ew-resize select-none overflow-hidden rounded-[28px]"
      style={{ border: "1px solid rgba(15,23,42,0.07)", boxShadow: "0 30px 90px rgba(15,23,42,0.10)" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label="Comparador antes y después"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* "After" layer — full width behind */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-brand-50">
        {/* Simulated clinical photo result */}
        <div className="flex h-full items-center justify-center p-8">
          <div className="w-full max-w-[400px] rounded-[18px] bg-white p-6 shadow-lg sm:max-w-[480px]" style={{ border: "1px solid rgba(15,23,42,0.06)" }}>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-accent" />
              <span className="text-[13px] font-semibold text-accent-dark">Después — Tratamiento completado</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-accent/15 to-brand-50" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-brand-50 to-emerald-50" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] text-muted">Sofía López · Ortodoncia</span>
              <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">Completado</span>
            </div>
          </div>
        </div>
      </div>

      {/* "Before" layer — clipped */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="flex h-full items-center justify-center p-8">
          <div className="w-full max-w-[400px] rounded-[18px] bg-white p-6 shadow-lg sm:max-w-[480px]" style={{ border: "1px solid rgba(15,23,42,0.06)" }}>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-muted-light" />
              <span className="text-[13px] font-semibold text-muted">Antes — Diagnóstico inicial</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-200 to-gray-100" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-150 to-slate-100" />
              <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-200 to-gray-100" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] text-muted">Sofía López · Ortodoncia</span>
              <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">En tratamiento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-sm"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 flex h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/90 shadow-lg backdrop-blur-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-ink"
          >
            <path
              d="M5 3L2 8L5 13M11 3L14 8L11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 z-10 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
        Antes
      </span>
      <span className="absolute top-4 right-4 z-10 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
        Después
      </span>
    </div>
  )
}
