import { siteConfig } from "@/lib/config"

export const navItems = [
  { label: "Recepción IA", href: "/#recepcion-ia" },
  { label: "Voice", href: "/#voice" },
  { label: "RX", href: "/#rx" },
  { label: "Growth", href: "/#growth" },
  { label: "Precios", href: "/#precios" },
] as const

export const navActions = {
  login: { label: "Iniciar sesión", href: siteConfig.loginUrl },
  cta: { label: "Probar gratis", href: siteConfig.trialSignupPath },
} as const
