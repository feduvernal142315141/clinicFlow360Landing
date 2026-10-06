"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { siteConfig } from "@/lib/config"

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, string>) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

/**
 * Cloudflare Turnstile, loaded from its script (no npm dependency).
 * Writes the token into a hidden `captchaToken` input inside the parent form.
 * A token is single-use, so change `resetSignal` after every failed submit.
 */
export function TurnstileWidget({ siteKey, resetSignal }: { siteKey: string; resetSignal: unknown }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  function render() {
    if (!containerRef.current || widgetIdRef.current || !window.turnstile) return
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "dark",
      "response-field-name": "captchaToken",
    })
  }

  useEffect(() => {
    return () => {
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }
  }, [])

  useEffect(() => {
    if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current)
  }, [resetSignal])

  return (
    <>
      <Script src={siteConfig.turnstileScriptUrl} strategy="afterInteractive" onReady={render} />
      <div ref={containerRef} />
    </>
  )
}
