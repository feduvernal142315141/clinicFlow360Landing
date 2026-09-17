"use client"

import { useSyncExternalStore } from "react"

const QUERY = "(prefers-reduced-motion: reduce)"

/**
 * Returns true if the user prefers reduced motion.
 * Used to disable Lenis, parallax, and heavy choreography.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(QUERY)
      mql.addEventListener("change", callback)
      return () => mql.removeEventListener("change", callback)
    },
    () => window.matchMedia(QUERY).matches,
    () => false
  )
}
