import { siteConfig } from "@/lib/config"

export const navItems = [
  { label: "Producto", href: "/#producto" },
  { label: "Recepción IA", href: "/#recepcion-ia" },
  { label: "App móvil", href: "/#app-movil" },
  { label: "Precios", href: "/#precios" },
] as const

export const navActions = {
  login: { label: "Iniciar sesión", href: siteConfig.loginUrl },
  cta: { label: "Probar gratis", href: siteConfig.trialSignupPath },
} as const
