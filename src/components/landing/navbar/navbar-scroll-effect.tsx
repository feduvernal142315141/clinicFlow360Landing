"use client"

import { useSyncExternalStore } from "react"

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true })
  return () => window.removeEventListener("scroll", callback)
}

function getScrolled() {
  return window.scrollY > 10
}

function getScrolledServer() {
  return false
}

export function NavbarScrollEffect({
  children,
}: {
  children: React.ReactNode
}) {
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolled,
    getScrolledServer
  )

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-200"
      style={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(226, 232, 240, 0.6)"
          : "1px solid transparent",
      }}
    >
      {children}
    </header>
  )
}
