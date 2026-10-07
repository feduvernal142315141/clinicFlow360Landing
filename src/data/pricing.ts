export interface Plan {
  name: string
  slug: string
  /** Monthly price in USD. */
  price: number
  /** One-line promise shown under the plan name. */
  description: string
  /** Where the plan sits in the ladder: software → intelligence → scale. */
  positioning: string
  /** Lead-in for plans that build on the previous one. */
  includesLabel?: string
  features: { name: string; detail?: string }[]
  highlighted: boolean
  badge?: string
  ctaLabel: string
}

export const plans: Plan[] = [
  {
    name: "Essential",
    slug: "essential",
    price: 49,
    description: "Todo lo necesario para digitalizar tu consultorio.",
    positioning: "Software clínico completo",
    highlighted: false,
    ctaLabel: "Probar gratis 14 días",
    features: [
      { name: "Agenda" },
      { name: "Gestión de pacientes" },
      { name: "Expediente clínico" },
      { name: "Odontograma" },
      { name: "Tratamientos" },
      { name: "Finanzas" },
      { name: "App móvil" },
      { name: "Experiencia tablet" },
      { name: "Recordatorios básicos" },
    ],
  },
  {
    name: "Pro",
    slug: "pro",
    price: 99,
    description: "La clínica inteligente que trabaja contigo.",
    positioning: "Software + inteligencia + automatización",
    includesLabel: "Todo Essential, más:",
    highlighted: true,
    badge: "Más popular",
    ctaLabel: "Probar Pro gratis 14 días",
    features: [
      {
        name: "ClinicFlow AI Receptionist 24/7",
        detail: "Atiende WhatsApp y agenda, reagenda, cancela y confirma citas.",
      },
      {
        name: "ClinicFlow Voice",
        detail: "Odontograma manos libres: hablas y el odontograma cambia.",
      },
      {
        name: "ClinicFlow RX",
        detail: "Para una estación o equipo compatible.",
      },
      { name: "Automatizaciones" },
      { name: "Campañas y segmentación" },
      { name: "App móvil completa" },
      { name: "Tablet / Chairside" },
      { name: "Reportes avanzados" },
    ],
  },
  {
    name: "Elite",
    slug: "elite",
    price: 149,
    description: "Más capacidad para clínicas que están creciendo.",
    positioning: "Inteligencia + automatización + escala",
    includesLabel: "Todo Pro, más:",
    highlighted: false,
    ctaLabel: "Probar gratis 14 días",
    features: [
      { name: "Más doctores y usuarios" },
      { name: "Mayor capacidad de IA y de conversaciones" },
      { name: "Mayor capacidad de campañas" },
      { name: "Más estaciones ClinicFlow RX" },
      { name: "Automatizaciones avanzadas" },
      { name: "Segmentación avanzada" },
      { name: "Almacenamiento superior" },
      { name: "Soporte prioritario" },
    ],
  },
]
