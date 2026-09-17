"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { useReducedMotion } from "@/lib/motion/reduced-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * Global smooth scroll provider.
 * - Only active on desktop (pointer: fine)
 * - Disabled when prefers-reduced-motion is set
 * - Single instance, anchors enabled
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenisRef = useRef<Lenis | null>(null)
  const prefersReduced = useReducedMotion()
  const isDesktop = useMediaQuery("(pointer: fine)")

  useEffect(() => {
    if (prefersReduced || !isDesktop) {
      lenisRef.current?.destroy()
      lenisRef.current = null
      return
    }

    const lenis = new Lenis({
      anchors: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [prefersReduced, isDesktop])

  return <>{children}</>
}
