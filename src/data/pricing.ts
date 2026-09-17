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
}

export const plans: Plan[] = [
  {
    name: "Esencial",
    slug: "esencial",
    price: null,
    description: "Para consultorios que quieren organizar su operación.",
    highlighted: false,
    features: [
      { name: "Agenda de citas", included: true },
      { name: "Gestión de pacientes", included: true },
      { name: "Historia clínica", included: true },
      { name: "Odontograma digital", included: true },
      { name: "App móvil para doctores", included: false },
      { name: "Fotografías clínicas", included: false },
      { name: "Comparación antes/después", included: false },
      { name: "Dictado por voz", included: false },
      { name: "WhatsApp automático", included: false },
      { name: "Recepcionista IA 24/7", included: false },
    ],
  },
  {
    name: "Clínica Pro",
    slug: "pro",
    price: null,
    description: "Para clínicas que necesitan movilidad y automatización.",
    highlighted: false,
    features: [
      { name: "Agenda de citas", included: true },
      { name: "Gestión de pacientes", included: true },
      { name: "Historia clínica", included: true },
      { name: "Odontograma digital", included: true },
      { name: "App móvil para doctores", included: true },
      { name: "Fotografías clínicas", included: true },
      { name: "Comparación antes/después", included: true },
      { name: "Dictado por voz", included: true },
      { name: "WhatsApp automático", included: true },
      { name: "Recepcionista IA 24/7", included: false },
    ],
  },
  {
    name: "Clínica AI",
    slug: "ai",
    price: null,
    description:
      "Para clínicas que quieren automatizar recepción y comunicación.",
    highlighted: true,
    badge: "Más popular",
    features: [
      { name: "Agenda de citas", included: true },
      { name: "Gestión de pacientes", included: true },
      { name: "Historia clínica", included: true },
      { name: "Odontograma digital", included: true },
      { name: "App móvil para doctores", included: true },
      { name: "Fotografías clínicas", included: true },
      { name: "Comparación antes/después", included: true },
      { name: "Dictado por voz", included: true },
      { name: "WhatsApp automático", included: true },
      { name: "Recepcionista IA 24/7", included: true },
    ],
  },
]
