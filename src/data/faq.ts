import { acquisitionStatusLabel } from "@/data/home"

export type FAQCategory = "plans" | "dalia" | "clinical" | "rx" | "growth"

export interface FAQItem {
  question: string
  answer: string
  category?: FAQCategory
}

export const faqCategories: { id: FAQCategory; label: string }[] = [
  { id: "plans", label: "Planes" },
  { id: "dalia", label: "Dalia" },
  { id: "clinical", label: "Voz y consulta" },
  { id: "rx", label: "ClinicFlow RX" },
  { id: "growth", label: "Crecimiento" },
]

// Added to acquisition answers while those features are not generally available.
const acquisitionNote = acquisitionStatusLabel
  ? " Estas funciones se están incorporando al plan Elite; escríbenos para conocer su disponibilidad."
  : ""

export const faqItems: FAQItem[] = [
  {
    category: "plans",
    question: "¿Cuántos doctores incluye cada plan?",
    answer: "Essential incluye hasta 2 doctores, Pro hasta 10 y Elite hasta 20.",
  },
  {
    category: "plans",
    question: "¿Puedo agregar más doctores sin cambiar de plan?",
    answer:
      "Sí. Hay doctores adicionales disponibles en cualquier plan. El plan se elige por lo que necesita tu clínica, no por el tamaño del equipo: una clínica con 14 doctores puede quedarse en Pro.",
  },
  {
    category: "plans",
    question: "¿Cuál es la diferencia entre Pro y Elite?",
    answer:
      `Pro trabaja con las personas que ya son tus pacientes: Dalia atiende y agenda, y las campañas hacen que regresen. Elite añade a quienes todavía no son pacientes: capta nuevas oportunidades, las organiza en el Lead CRM y las acompaña hasta la cita.${acquisitionNote}`,
  },
  {
    category: "plans",
    question: "¿Qué necesito para empezar los 14 días de prueba?",
    answer: "Solo tu correo electrónico y el nombre de tu clínica. No pedimos tarjeta de crédito.",
  },
  {
    category: "plans",
    question: "¿Puedo cambiar de plan o cancelar?",
    answer: "Sí. Puedes cambiar de plan cuando tu clínica lo necesite y no hay contratos de permanencia.",
  },
  {
    category: "dalia",
    question: "¿Qué hace Dalia?",
    answer:
      "Dalia es la recepcionista IA de ClinicFlow. Atiende a tus pacientes por WhatsApp las 24 horas: consulta la disponibilidad real de tu agenda, ofrece horarios y agenda, reagenda, cancela o confirma citas directamente en ClinicFlow.",
  },
  {
    category: "dalia",
    question: "¿Dalia realmente puede crear citas?",
    answer:
      "Sí. La cita queda registrada en la agenda de ClinicFlow, no en un mensaje pendiente para que recepción la capture después.",
  },
  {
    category: "dalia",
    question: "¿Qué pasa si el paciente necesita hablar con una persona?",
    answer:
      "Dalia puede pasar la conversación a tu equipo, que continúa respondiendo desde la bandeja de mensajes de ClinicFlow.",
  },
  {
    category: "dalia",
    question: "¿Cómo se conecta al WhatsApp de la clínica?",
    answer: "Dalia trabaja sobre la API oficial de WhatsApp Cloud de Meta.",
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
    question: "¿Puedo usar ClinicFlow desde tablet y desde el teléfono?",
    answer:
      "Sí. En tablet, ClinicFlow Chairside pone odontograma, expediente, imágenes y plan de tratamiento al lado del sillón. En el teléfono, el doctor consulta su agenda y sus pacientes, toma fotografías clínicas y recibe avisos de cambios. La administración completa está en el escritorio.",
  },
  {
    category: "rx",
    question: "¿Qué es ClinicFlow RX?",
    answer:
      "Es la integración de imagenología de ClinicFlow360: conecta equipos compatibles con el expediente para que la radiografía quede asociada al paciente sin exportar archivos.",
  },
  {
    category: "rx",
    question: "¿Qué equipos funcionan con ClinicFlow RX?",
    answer:
      "ClinicFlow RX funciona con equipos e integraciones compatibles, no con cualquier sensor. Está pensado para trabajar con los equipos que la clínica ya utiliza; consulta la compatibilidad de los tuyos antes de contratar.",
  },
  {
    category: "growth",
    question: "¿Puedo recuperar pacientes que dejaron de venir?",
    answer:
      "Sí, desde el plan Pro. Defines segmentos con reglas —por ejemplo, pacientes sin visita desde hace meses o con citas canceladas sin reagendar— y les envías una campaña por WhatsApp. Cuando el paciente responde, Dalia puede consultar la agenda y crear la cita.",
  },
  {
    category: "growth",
    question: "¿Cómo funcionan los recordatorios y las campañas?",
    answer:
      "Los recordatorios de cita salen automáticamente por WhatsApp, con botones para confirmar, reagendar o cancelar, en los tiempos que configure la clínica. Las campañas se envían por WhatsApp a segmentos de pacientes que defines con reglas, y puedes ver los resultados de cada una.",
  },
  {
    category: "growth",
    question: "¿Elite incluye dominio? ¿A quién pertenece?",
    answer:
      `Elite incluye un dominio propio y un correo empresarial para tu clínica. El dominio pertenece a tu clínica; ClinicFlow se encarga de configurarlo.${acquisitionNote}`,
  },
  {
    category: "growth",
    question: "Ya tengo página web. ¿Puedo conectarla?",
    answer:
      `Sí. ClinicFlow Sites no es requisito: la idea es que tu web actual pueda enviar sus oportunidades al Lead CRM de ClinicFlow.${acquisitionNote}`,
  },
  {
    category: "growth",
    question: "¿La publicidad está incluida? ¿ClinicFlow crea mis campañas publicitarias?",
    answer:
      "No. Elite no incluye presupuesto publicitario ni la gestión de tus anuncios. ClinicFlow te da la infraestructura para captar, organizar, atender y convertir las oportunidades que lleguen de tu web, WhatsApp, redes, publicidad o referidos.",
  },
]
