"use client"

import { useSyncExternalStore } from "react"

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true })
  return () => window.removeEventListener("scroll", callback)
}

function getScrolled() {
  return window.scrollY > 60
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
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 300ms ease, border-color 300ms ease, box-shadow 300ms ease, height 250ms ease",
        background: scrolled ? "rgba(6,16,26,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(150%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(150%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 8px 30px rgba(0,0,0,0.2)"
          : "none",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 transition-all duration-250"
        style={{
          maxWidth: 1280,
          height: scrolled ? 64 : 80,
        }}
      >
        {children}
      </div>
    </header>
  )
}
