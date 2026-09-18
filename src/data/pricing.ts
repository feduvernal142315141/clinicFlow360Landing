export interface PlanFeature {
  name: string
  included: boolean
}

export interface Plan {
  name: string
  slug: string
  price: number | null
  description: string
  features: PlanFeature[]
  highlighted: boolean
  badge?: string
  ctaLabel: string
}

export const plans: Plan[] = [
  {
    name: "Esencial",
    slug: "esencial",
    price: 49,
    description: "Para consultorios independientes",
    highlighted: false,
    ctaLabel: "Comenzar prueba gratis",
    features: [
      { name: "1 Doctor titular + Asistente", included: true },
      { name: "Agenda inteligente sin límite de citas", included: true },
      { name: "Historia clínica y Odontograma digital", included: true },
      { name: "Recordatorios automáticos por SMS/Email", included: true },
      { name: "Recepcionista WhatsApp con IA", included: false },
      { name: "Dictado clínico por voz", included: false },
    ],
  },
  {
    name: "Clínica Pro",
    slug: "pro",
    price: 89,
    description: "Para clínicas con equipo multidisciplinario",
    highlighted: true,
    badge: "Más Popular en Clínicas",
    ctaLabel: "Probar Clínica Pro gratis",
    features: [
      { name: "Hasta 4 Doctores y especialistas", included: true },
      { name: "Odontograma interactivo avanzado", included: true },
      { name: "App móvil iOS & Android para doctores", included: true },
      { name: "Confirmaciones automáticas por WhatsApp", included: true },
      { name: "Galería clínica y comparador Antes/Después", included: true },
      { name: "Dictado por voz IA (hasta 300 notas/mes)", included: true },
    ],
  },
  {
    name: "Clínica AI 24/7",
    slug: "ai",
    price: 149,
    description: "Automatización total con Recepción Autónoma",
    highlighted: false,
    ctaLabel: "Contactar a un asesor",
    features: [
      { name: "Doctores y sillones ilimitados", included: true },
      { name: "Recepcionista IA 24/7 en WhatsApp oficial", included: true },
      { name: "Agendamiento y reagendamiento autónomo", included: true },
      { name: "Dictado por voz con IA ilimitado", included: true },
      { name: "Reportes de ingresos y comisiones médicas", included: true },
      { name: "Onboarding guiado y migración de datos", included: true },
    ],
  },
]
