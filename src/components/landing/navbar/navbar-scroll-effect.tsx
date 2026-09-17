"use client"

import { useSyncExternalStore } from "react"

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true })
  return () => window.removeEventListener("scroll", callback)
}

function getScrolled() {
  return window.scrollY > 24
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
      style={
        scrolled
          ? {
              top: 14,
              left: "50%",
              right: "auto",
              transform: "translateX(-50%)",
              width: "min(1180px, calc(100% - 32px))",
              background: "rgba(255, 255, 255, 0.76)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(15, 23, 42, 0.06)",
              boxShadow: "0 8px 30px rgba(15, 23, 42, 0.04)",
              borderRadius: 20,
            }
          : {
              background: "transparent",
              border: "1px solid transparent",
            }
      }
    >
      {children}
    </header>
  )
}
