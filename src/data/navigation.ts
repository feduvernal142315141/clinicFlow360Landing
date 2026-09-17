export const navItems = [
  { label: "Producto", href: "#producto" },
  { label: "Recepción IA", href: "#recepcion-ia" },
  { label: "App móvil", href: "#app-movil" },
  { label: "Precios", href: "#precios" },
] as const

export const navActions = {
  login: { label: "Iniciar sesión", href: "/login" },
  cta: { label: "Probar gratis", href: "#precios" },
} as const
