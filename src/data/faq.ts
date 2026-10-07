import { leadsStatusLabel } from "@/data/home"

export type FAQCategory = "ai" | "clinical" | "rx" | "growth" | "start"

export interface FAQItem {
  question: string
  answer: string
  category?: FAQCategory
}

export const faqCategories: { id: FAQCategory; label: string }[] = [
  { id: "ai", label: "Recepción IA" },
  { id: "clinical", label: "Voz y consulta" },
  { id: "rx", label: "ClinicFlow RX" },
  { id: "growth", label: "Growth" },
  { id: "start", label: "Empezar" },
]

// Added to lead answers while lead management is not generally available.
const leadsNote = leadsStatusLabel
  ? " La gestión de leads se está incorporando al plan Elite; escríbenos para conocer su disponibilidad."
  : ""

export const faqItems: FAQItem[] = [
  {
    category: "ai",
    question: "¿La recepcionista IA realmente puede crear citas?",
    answer:
      "Sí. ClinicFlow AI consulta la disponibilidad real de tu agenda, ofrece horarios al paciente y crea la cita directamente en ClinicFlow. No deja un mensaje para que recepción la registre después.",
  },
  {
    category: "ai",
    question: "¿Puede cancelar y reprogramar?",
    answer:
      "Sí. El paciente puede confirmar, cancelar o reprogramar su cita por WhatsApp y el cambio queda reflejado en la agenda.",
  },
  {
    category: "ai",
    question: "¿Qué pasa si el paciente necesita hablar con una persona?",
    answer:
      "ClinicFlow AI puede pasar la conversación a tu equipo, que continúa respondiendo desde la bandeja de mensajes de ClinicFlow.",
  },
  {
    category: "ai",
    question: "¿Cómo se conecta al WhatsApp de la clínica?",
    answer: "ClinicFlow AI trabaja sobre la API oficial de WhatsApp Cloud de Meta.",
  },
  {
    category: "clinical",
    question: "¿Cómo funciona el odontograma por voz?",
    answer:
      "Dices lo que encuentras —pieza, superficie, hallazgo y, si aplica, el código ICDAS— y ClinicFlow Voice lo convierte en cambios sobre el odontograma. Ves la propuesta antes de aplicarla, y eliminar una condición siempre pide confirmación.",
  },
  {
    category: "clinical",
    question: "¿Necesito tocar la tablet mientras dicto?",
    answer:
      "Solo un toque para iniciar la sesión de voz. Después el micrófono queda abierto y puedes aplicar, descartar o deshacer cada cambio con la voz.",
  },
  {
    category: "clinical",
    question: "¿Puedo usar ClinicFlow desde tablet?",
    answer:
      "Sí. ClinicFlow Chairside es la experiencia para tablet: odontograma, expediente, imágenes y plan de tratamiento del paciente al lado del sillón. No es otra aplicación, es ClinicFlow adaptado a la consulta.",
  },
  {
    category: "clinical",
    question: "¿Los doctores tienen app móvil?",
    answer:
      "Sí. Desde la app el doctor consulta su agenda y sus pacientes, revisa expedientes, toma fotografías clínicas, compara antes y después, y recibe notificaciones cuando hay citas nuevas o cambios en su agenda.",
  },
  {
    category: "rx",
    question: "¿Qué es ClinicFlow RX?",
    answer:
      "Es la integración de imagenología de ClinicFlow360: conecta equipos compatibles con el expediente para que la radiografía quede asociada al paciente sin exportar archivos. Funciona con equipos e integraciones compatibles; escríbenos para consultar la compatibilidad de los tuyos.",
  },
  {
    category: "rx",
    question: "¿Tengo que cambiar mis equipos de radiografía?",
    answer:
      "La idea es que no: ClinicFlow RX está pensado para trabajar con los equipos compatibles que la clínica ya utiliza. Consulta la compatibilidad de los tuyos antes de contratar.",
  },
  {
    category: "rx",
    question: "¿ClinicFlow RX funciona con cualquier sensor?",
    answer:
      "No. Funciona únicamente con equipos e integraciones compatibles, y la lista se está validando equipo por equipo. Consulta la compatibilidad del tuyo.",
  },
  {
    category: "growth",
    question: "¿Qué es ClinicFlow Growth?",
    answer:
      "Es la parte de ClinicFlow360 que convierte la información que la clínica ya tiene en nuevas citas. Tiene dos áreas: reactivar pacientes que ya existen y dar seguimiento a personas interesadas que todavía no son pacientes. Como vive junto a la agenda, los pacientes y WhatsApp, cada conversación puede terminar en una cita.",
  },
  {
    category: "growth",
    question: "¿Puedo recuperar pacientes que dejaron de venir?",
    answer:
      "Sí, desde el plan Pro. Defines segmentos con reglas —por ejemplo, pacientes sin visita desde hace meses o con citas canceladas sin reagendar— y les envías una campaña por WhatsApp. Cuando el paciente responde, ClinicFlow AI puede consultar la agenda y crear la cita.",
  },
  {
    category: "growth",
    question: "¿Qué es un lead en ClinicFlow y puedo clasificarlo?",
    answer:
      `Un lead es una persona interesada que todavía no se ha convertido en paciente. En el plan Elite, cada lead se organiza como frío, tibio o caliente para que tu equipo sepa dónde enfocarse.${leadsNote}`,
  },
  {
    category: "growth",
    question: "¿De dónde llegan los leads y cómo se convierten en cita?",
    answer:
      `Los leads se centralizan desde tus canales compatibles, empezando por WhatsApp. Cuando la persona está lista, la cita se crea en la misma agenda de la clínica y el lead pasa a ser paciente.${leadsNote}`,
  },
  {
    category: "growth",
    question: "¿Cómo funcionan los recordatorios y las campañas?",
    answer:
      "Los recordatorios de cita salen automáticamente por WhatsApp, con botones para confirmar, reagendar o cancelar, en los tiempos que configure la clínica. Las campañas se envían por WhatsApp a segmentos de pacientes que defines con reglas, y puedes ver los resultados de cada una.",
  },
  {
    category: "start",
    question: "¿Qué necesito para empezar los 14 días de prueba?",
    answer: "Solo tu correo electrónico y el nombre de tu clínica. No pedimos tarjeta de crédito.",
  },
  {
    category: "start",
    question: "¿ClinicFlow360 funciona para un consultorio pequeño?",
    answer:
      "Sí. El plan Essential incluye el software clínico completo para operar un consultorio: agenda, pacientes, expediente, odontograma, tratamientos y finanzas.",
  },
  {
    category: "start",
    question: "¿Puedo cancelar la suscripción en cualquier momento?",
    answer: "Sí. No hay contratos de permanencia.",
  },
]
