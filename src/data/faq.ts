export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: "¿ClinicFlow360 funciona con un solo doctor?",
    answer:
      "Sí. Funciona para consultorios de un solo profesional y también para clínicas con múltiples doctores.",
  },
  {
    question: "¿Puedo administrar varios doctores?",
    answer:
      "Sí. Puedes registrar múltiples doctores, asignarles roles y permisos, y gestionar sus agendas de forma independiente.",
  },
  {
    question: "¿Existe app móvil?",
    answer:
      "Sí. La app móvil está disponible para iOS y Android, diseñada para que los doctores consulten su agenda, accedan a pacientes y documenten tratamientos desde cualquier lugar.",
  },
  {
    question: "¿Qué puede hacer la recepcionista IA?",
    answer:
      "Conversa de forma natural por WhatsApp, consulta disponibilidad real, agenda, cancela y reagenda citas, responde preguntas frecuentes y opera 24/7.",
  },
  {
    question: "¿Puede agendar citas?",
    answer:
      "Sí. Tanto la recepcionista IA como la plataforma web y la app móvil permiten agendar citas consultando disponibilidad en tiempo real.",
  },
  {
    question: "¿Puede cancelar y reagendar?",
    answer:
      "Sí. La recepcionista IA y la plataforma permiten cancelar y reagendar citas respetando las políticas configuradas por la clínica.",
  },
  {
    question: "¿Cómo funcionan los recordatorios?",
    answer:
      "Se envían automáticamente por WhatsApp según los tiempos que configures. Por ejemplo, 24 horas y 2 horas antes de la cita.",
  },
  {
    question: "¿Puedo importar pacientes?",
    answer:
      "Puedes registrar pacientes manualmente desde la plataforma. La importación masiva desde archivos está en el roadmap.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Sí. Usamos cifrado en tránsito y en reposo, control de acceso por roles, aislamiento por clínica y registros de auditoría.",
  },
  {
    question: "¿Necesito instalar algo?",
    answer:
      "La plataforma web funciona directamente en el navegador. Solo la app móvil para doctores requiere instalación.",
  },
  {
    question: "¿Puedo cancelar la suscripción?",
    answer:
      "Sí. Puedes cancelar en cualquier momento desde la configuración de tu cuenta.",
  },
  {
    question: "¿Puedo probar antes de pagar?",
    answer:
      "Sí. Ofrecemos un período de prueba para que conozcas la plataforma antes de comprometerte.",
  },
]
