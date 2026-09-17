export interface Feature {
  title: string
  description: string
  icon: string
}

export const platformFeatures: Feature[] = [
  {
    title: "Agenda",
    description: "Programa citas, detecta conflictos y visualiza la disponibilidad de cada doctor.",
    icon: "Calendar",
  },
  {
    title: "Pacientes",
    description: "Perfiles completos con historial, antecedentes, documentos e imágenes clínicas.",
    icon: "Users",
  },
  {
    title: "Doctores",
    description: "Gestiona profesionales, horarios, especialidades y permisos desde un solo lugar.",
    icon: "Stethoscope",
  },
  {
    title: "Clínica",
    description: "Configura tu identidad, horarios, moneda, políticas y branding personalizado.",
    icon: "Building2",
  },
  {
    title: "Comunicación",
    description: "WhatsApp automático, recordatorios y confirmaciones sin intervención manual.",
    icon: "MessageSquare",
  },
  {
    title: "App móvil",
    description: "Tu agenda, pacientes, fotos y notas clínicas en el bolsillo del doctor.",
    icon: "Smartphone",
  },
]

export const aiCapabilities = [
  "Consulta disponibilidad real",
  "Agenda citas automáticamente",
  "Cancela y reagenda",
  "Responde preguntas frecuentes",
  "Conversa de forma natural",
  "Disponible 24/7",
] as const

export const mobileChips = [
  "Agenda",
  "Push",
  "Pacientes",
  "Imágenes",
  "Dictado",
  "Antes / después",
] as const

export const securityFeatures = [
  { title: "Cifrado", description: "Datos protegidos en tránsito y en reposo con estándares modernos." },
  { title: "Roles y permisos", description: "Control granular de acceso por módulo y acción." },
  { title: "Aislamiento por clínica", description: "Cada clínica opera en un entorno completamente separado." },
  { title: "Auditoría", description: "Registro de cambios con trazabilidad completa por usuario y fecha." },
  { title: "Backups", description: "Respaldos automáticos para proteger la información de tu clínica." },
  { title: "Propiedad de datos", description: "Tus datos son tuyos. Exporta cuando lo necesites." },
] as const
