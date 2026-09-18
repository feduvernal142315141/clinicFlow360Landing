export interface FAQItem {
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    question: "¿Cómo se conecta la recepcionista IA a nuestro WhatsApp?",
    answer: "Utilizamos la API Oficial de WhatsApp Cloud (Meta). Puedes conservar el mismo número de teléfono de tu clínica. El asistente responde al instante y cuando tu equipo desee intervenir, puede tomar el control de la conversación con un solo clic.",
  },
  {
    question: "¿Puedo migrar mis pacientes desde otro software dental o Excel?",
    answer: "Sí. ClinicFlow360 incluye una herramienta de importación rápida de archivos CSV y Excel. Además, nuestro equipo de soporte técnico te asiste sin costo adicional en el plan Pro y Clínica AI.",
  },
  {
    question: "¿Los doctores pueden usarlo en sus teléfonos personales de forma segura?",
    answer: "Totalmente. La aplicación móvil de ClinicFlow360 no almacena fotografías en la galería personal del teléfono. Todas las capturas van encriptadas directo a la nube clínica.",
  },
  {
    question: "¿Qué necesito para empezar los 14 días de prueba?",
    answer: "Solo tu correo electrónico y el nombre de tu clínica. No solicitamos tarjetas de crédito ni compromisos de permanencia.",
  },
  {
    question: "¿ClinicFlow360 funciona con un solo doctor?",
    answer: "Sí. El plan Esencial está diseñado para consultorios de un solo profesional. Cuando crezcas puedes escalar sin perder datos.",
  },
  {
    question: "¿La recepcionista IA puede agendar, cancelar y reagendar citas?",
    answer: "Sí. Consulta la disponibilidad real de tus doctores y sillones, agenda citas directamente, y permite al paciente cancelar o cambiar su cita sin intervención humana.",
  },
  {
    question: "¿Cómo funciona el dictado por voz para notas clínicas?",
    answer: "El doctor dicta con su voz desde la app. La IA transcribe, estructura la nota con nomenclatura médica y la archiva en el expediente del paciente lista para revisión y firma.",
  },
  {
    question: "¿Puedo cancelar la suscripción en cualquier momento?",
    answer: "Sí. No hay contratos de permanencia. Puedes cancelar desde la configuración de tu cuenta cuando lo desees.",
  },
]
