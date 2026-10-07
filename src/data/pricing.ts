export interface PlanFeature {
  name: string
  detail?: string
  /** Lead-management feature: carries the leads status label while it is set. */
  leads?: boolean
}

export interface Plan {
  name: string
  slug: string
  /** Monthly price in USD. */
  price: number
  /** Stage of the clinic this plan serves: operate → automate and retain → acquire. */
  stage: string
  /** One-line promise shown under the plan name. */
  description: string
  /** Lead-in for plans that build on the previous one. */
  includesLabel?: string
  features: PlanFeature[]
  /** Secondary capacity benefits, shown as one muted line. */
  capacity?: string
  highlighted: boolean
  badge?: string
  ctaLabel: string
}

export const plans: Plan[] = [
  {
    name: "Essential",
    slug: "essential",
    price: 49,
    stage: "Opera",
    description: "Todo lo necesario para operar y digitalizar tu consultorio.",
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
    stage: "Automatiza + Recupera",
    description: "Automatiza tu clínica y haz que tus pacientes regresen.",
    includesLabel: "Todo Essential, más:",
    highlighted: true,
    badge: "Más popular",
    ctaLabel: "Probar Pro gratis 14 días",
    features: [
      { name: "ClinicFlow AI Receptionist 24/7", detail: "Atiende WhatsApp y gestiona citas." },
      { name: "ClinicFlow Voice", detail: "Hablas y el odontograma cambia." },
      { name: "ClinicFlow RX", detail: "La imagen llega al expediente. Una estación o equipo compatible." },
      { name: "Reactivación de pacientes", detail: "Recupera pacientes que dejaron de venir." },
      { name: "Campañas y segmentación", detail: "Comunícate con grupos específicos de tu base." },
      { name: "Automatizaciones y seguimiento", detail: "Menos tareas repetitivas; conversaciones que continúan." },
      { name: "App móvil completa y Tablet / Chairside" },
    ],
  },
  {
    name: "Elite",
    slug: "elite",
    price: 149,
    stage: "Capta + Crece",
    description: "Convierte oportunidades en nuevos pacientes.",
    includesLabel: "Todo Pro, más:",
    highlighted: false,
    ctaLabel: "Probar gratis 14 días",
    features: [
      { name: "CRM de leads", detail: "Centraliza nuevas oportunidades de tus canales compatibles.", leads: true },
      { name: "Pipeline comercial", detail: "Cada oportunidad, del primer contacto a la cita.", leads: true },
      { name: "Clasificación de leads", detail: "Fríos, tibios y calientes.", leads: true },
      { name: "Seguimiento de leads", detail: "No pierdas oportunidades por falta de seguimiento.", leads: true },
      { name: "Lead → cita → paciente", detail: "Captación conectada con la operación real de la clínica.", leads: true },
    ],
    capacity: "Más doctores y usuarios, mayor capacidad de IA y de campañas, más estaciones ClinicFlow RX, almacenamiento superior y soporte prioritario.",
  },
]
