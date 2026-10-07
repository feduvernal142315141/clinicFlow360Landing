export interface PlanFeature {
  name: string
  detail?: string
  /** Acquisition feature: carries the acquisition status label while it is set. */
  acquisition?: boolean
}

export interface Plan {
  name: string
  slug: string
  /** Monthly price in USD. */
  price: number
  /** Source of value this plan adds: operation → automation and retention → acquisition. */
  stage: string
  /** One-line promise shown under the plan name. */
  description: string
  /** Doctors included. More can be added without changing plan. */
  doctors: number
  /** One-time setup fee in USD, shown only once it is commercially confirmed. */
  setupFee: number | null
  /** Lead-in for plans that build on the previous one. */
  includesLabel?: string
  features: PlanFeature[]
  highlighted: boolean
  badge?: string
  ctaLabel: string
}

export const plans: Plan[] = [
  {
    name: "Essential",
    slug: "essential",
    price: 39,
    stage: "Operación",
    description: "Todo lo necesario para digitalizar y operar tu consultorio.",
    doctors: 2,
    setupFee: null,
    highlighted: false,
    ctaLabel: "Probar gratis",
    features: [
      { name: "Agenda" },
      { name: "Pacientes y expediente clínico" },
      { name: "Odontograma" },
      { name: "Tratamientos" },
      { name: "Finanzas" },
      { name: "App móvil y experiencia tablet" },
      { name: "Recordatorios de cita" },
    ],
  },
  {
    name: "Pro",
    slug: "pro",
    price: 99,
    stage: "Automatización + Retención",
    description: "Automatiza tu clínica y haz que tus pacientes regresen.",
    doctors: 10,
    setupFee: null,
    includesLabel: "Todo Essential, más:",
    highlighted: true,
    badge: "Más popular",
    ctaLabel: "Probar Pro",
    features: [
      { name: "Dalia — recepcionista IA 24/7", detail: "Atiende a tus pacientes y gestiona tu agenda por WhatsApp." },
      { name: "ClinicFlow Voice", detail: "Hablas. El odontograma cambia." },
      { name: "ClinicFlow RX", detail: "Tu imagenología llega al expediente. Equipos compatibles." },
      { name: "Reactivación de pacientes", detail: "Haz que regresen quienes dejaron de venir." },
      { name: "Campañas y segmentación", detail: "Habla con el grupo correcto de pacientes." },
      { name: "Automatizaciones y seguimiento" },
      { name: "Chairside en tablet y app móvil completa" },
    ],
  },
  {
    name: "Elite",
    slug: "elite",
    price: 199,
    stage: "Adquisición + Crecimiento",
    description: "Capta nuevas oportunidades y conviértelas en pacientes.",
    doctors: 20,
    setupFee: null,
    includesLabel: "Todo Pro, más:",
    highlighted: false,
    ctaLabel: "Probar Elite",
    features: [
      { name: "Lead CRM", detail: "Cada oportunidad, del primer contacto a la cita.", acquisition: true },
      { name: "Dalia para prospectos", detail: "También atiende a quienes aún no son pacientes.", acquisition: true },
      { name: "ClinicFlow Sites", detail: "Tu canal digital de adquisición.", acquisition: true },
      { name: "Dominio propio y 1 correo empresarial", acquisition: true },
      { name: "Conexión con tu web actual y formularios", acquisition: true },
      { name: "Origen de tus oportunidades", acquisition: true },
    ],
  },
]

type Cell = boolean | string

export interface ComparisonRow {
  feature: string
  /** Essential, Pro, Elite */
  values: [Cell, Cell, Cell]
  acquisition?: boolean
}

/** Short comparison: why each plan costs what it costs. */
export const comparison: { group: string; rows: ComparisonRow[] }[] = [
  {
    group: "Operación",
    rows: [
      { feature: "Agenda", values: [true, true, true] },
      { feature: "Pacientes y expediente clínico", values: [true, true, true] },
      { feature: "Odontograma", values: [true, true, true] },
      { feature: "Tratamientos", values: [true, true, true] },
      { feature: "Finanzas", values: [true, true, true] },
      { feature: "App móvil y experiencia tablet", values: [true, true, true] },
      { feature: "Recordatorios de cita", values: [true, true, true] },
    ],
  },
  {
    group: "IA y automatización",
    rows: [
      { feature: "Dalia, recepcionista IA por WhatsApp", values: [false, true, true] },
      { feature: "ClinicFlow Voice", values: [false, true, true] },
      { feature: "ClinicFlow RX", values: [false, true, true] },
      { feature: "Automatizaciones", values: [false, true, true] },
    ],
  },
  {
    group: "Retención",
    rows: [
      { feature: "Reactivación de pacientes", values: [false, true, true] },
      { feature: "Campañas y segmentación", values: [false, true, true] },
      { feature: "Seguimiento", values: [false, true, true] },
    ],
  },
  {
    group: "Adquisición",
    rows: [
      { feature: "Lead CRM", values: [false, false, true], acquisition: true },
      { feature: "Dalia para prospectos", values: [false, false, true], acquisition: true },
      { feature: "ClinicFlow Sites", values: [false, false, true], acquisition: true },
      { feature: "Dominio propio y 1 correo empresarial", values: [false, false, true], acquisition: true },
      { feature: "Conexión con tu web actual", values: [false, false, true], acquisition: true },
      { feature: "Origen de tus oportunidades", values: [false, false, true], acquisition: true },
    ],
  },
  {
    group: "Capacidad",
    rows: [
      { feature: "Doctores incluidos", values: ["2", "10", "20"] },
      { feature: "Doctores adicionales disponibles", values: [true, true, true] },
    ],
  },
]
