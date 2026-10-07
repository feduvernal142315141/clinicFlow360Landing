import type { FAQItem } from "@/data/faq"

export interface FeatureScreenshot {
  src: string
  alt: string
  width: number
  height: number
}

export interface FeaturePage {
  slug: string
  /** Short name used in menus, cards and breadcrumbs. */
  name: string
  /** One-line summary used in cards and llms.txt. */
  summary: string
  metaTitle: string
  metaDescription: string
  heading: string
  /** Answer-first paragraph: what the feature is, in one or two sentences. */
  intro: string
  screenshot?: FeatureScreenshot
  capabilities: { title: string; description: string }[]
  /** Which plan includes it, worded exactly as the pricing table states it. */
  planNote: string
  faq: FAQItem[]
}

export const featurePagesCopy = {
  basePath: "/funciones",
  indexName: "Funciones",
  indexMetaTitle: "Funciones del software dental",
  indexMetaDescription:
    "Conoce las funciones de ClinicFlow360: agenda dental, odontograma digital, recepcionista con IA en WhatsApp, dictado clínico por voz y app móvil para dentistas.",
  indexHeading: "Funciones de ClinicFlow360",
  indexIntro:
    "ClinicFlow360 es un software para clínicas dentales que reúne agenda, historia clínica con odontograma, comunicación por WhatsApp y app móvil en una sola plataforma.",
  homeLabel: "Inicio",
  capabilitiesTitle: "Qué puedes hacer",
  planTitle: "En qué plan está incluido",
  plansLink: "Ver planes y precios",
  faqTitle: "Preguntas frecuentes",
  relatedTitle: "Otras funciones",
  learnMore: "Conocer más",
  ctaPrimary: "Probar gratis 14 días",
  ctaTitle: "Pruébalo en tu clínica",
  ctaText: "Crea tu clínica de prueba con tu correo y el nombre de tu clínica. Sin tarjeta de crédito.",
} as const

export const featurePages: FeaturePage[] = [
  {
    slug: "agenda-dental",
    name: "Agenda dental",
    summary: "Calendario de citas por especialista y sillón, con detección de conflictos de horario.",
    metaTitle: "Agenda dental online para clínicas y consultorios",
    metaDescription:
      "Agenda dental online: organiza las citas por especialista y sillón, evita choques de horario y envía recordatorios automáticos. Pruébala gratis 14 días.",
    heading: "Agenda dental online para tu clínica",
    intro:
      "La agenda de ClinicFlow360 es un calendario de citas pensado para clínicas dentales: organiza las citas por especialista y sillón, detecta conflictos de horario y muestra la disponibilidad de cada doctor en vistas de día, semana y mes.",
    screenshot: {
      src: "/landing/screenshots/agenda-dark.webp",
      alt: "Agenda dental de ClinicFlow360 en vista mensual, con citas por especialista y etiquetas de estado",
      width: 1400,
      height: 703,
    },
    capabilities: [
      {
        title: "Citas por especialista y sillón",
        description: "Filtra el calendario por doctor y ve quién atiende, en qué sillón y a qué hora.",
      },
      {
        title: "Sin choques de horario",
        description: "Al programar una cita, la agenda detecta conflictos y muestra la disponibilidad de cada doctor.",
      },
      {
        title: "Vistas de día, semana y mes",
        description: "Cambia de vista según lo que necesites: el detalle del día o la carga de todo el mes.",
      },
      {
        title: "Estados y etiquetas",
        description: "Distingue las citas agendadas, confirmadas y canceladas, y usa etiquetas como cirugía para el tipo de atención.",
      },
      {
        title: "Recordatorios y confirmaciones",
        description: "Envía recordatorios automáticos por SMS o correo. El plan Clínica Pro añade confirmaciones automáticas por WhatsApp.",
      },
      {
        title: "Conectada a la recepcionista IA",
        description: "En el plan Clínica AI 24/7, la recepcionista de WhatsApp consulta esta misma agenda para agendar, cancelar y reagendar.",
      },
    ],
    planNote: "El plan Esencial incluye la agenda inteligente sin límite de citas.",
    faq: [
      {
        question: "¿La agenda dental tiene un límite de citas?",
        answer: "No. El plan Esencial incluye la agenda inteligente sin límite de citas.",
      },
      {
        question: "¿Sirve para una clínica con varios doctores?",
        answer:
          "Sí. La agenda se organiza por especialista y sillón. El plan Esencial está pensado para un doctor titular con asistente, Clínica Pro admite hasta 4 doctores y especialistas, y Clínica AI 24/7 incluye doctores y sillones ilimitados.",
      },
      {
        question: "¿Los pacientes pueden agendar por WhatsApp?",
        answer:
          "Sí, con el plan Clínica AI 24/7. La recepcionista con IA consulta la disponibilidad real de tus doctores y sillones, y agenda, cancela o reagenda la cita sin intervención humana.",
      },
    ],
  },
  {
    slug: "odontograma-digital",
    name: "Odontograma digital",
    summary: "Odontograma interactivo con nomenclatura FDI, superficies por diente y diagnóstico ICDAS.",
    metaTitle: "Odontograma digital interactivo con nomenclatura FDI",
    metaDescription:
      "Odontograma digital interactivo con nomenclatura FDI: registra estados, superficies, diagnóstico ICDAS, plan de tratamiento y lo realizado en cada diente.",
    heading: "Odontograma digital interactivo",
    intro:
      "El odontograma digital de ClinicFlow360 es un odontograma interactivo con nomenclatura FDI: registras el estado de cada diente y de cada superficie, el diagnóstico, el plan de tratamiento y lo realizado, dentro de la historia clínica del paciente.",
    screenshot: {
      src: "/landing/screenshots/odontograma-dark.webp",
      alt: "Odontograma digital FDI de ClinicFlow360 con arcada superior e inferior y estados clínicos por diente",
      width: 1400,
      height: 714,
    },
    capabilities: [
      {
        title: "Nomenclatura FDI",
        description: "Arcada superior e inferior con cada diente identificado según el sistema FDI.",
      },
      {
        title: "Superficies por diente",
        description: "Marca las caras vestibular, oclusal y palatina de cada pieza sobre sus tres vistas.",
      },
      {
        title: "Estados clínicos",
        description: "Registra si la pieza está sana, ausente, con extracción indicada, endodoncia, corona o implante.",
      },
      {
        title: "Diagnóstico ICDAS",
        description: "Clasifica las lesiones de caries con el sistema ICDAS desde la ficha de cada diente.",
      },
      {
        title: "Plan y realizado",
        description: "Separa el tratamiento planificado de lo que ya se realizó en cada pieza.",
      },
      {
        title: "Plantillas",
        description: "Aplica plantillas como sellante, resina o amalgama sobre las caras seleccionadas.",
      },
    ],
    planNote:
      "El plan Esencial incluye historia clínica y odontograma digital. Clínica Pro incluye el odontograma interactivo avanzado.",
    faq: [
      {
        question: "¿Qué nomenclatura usa el odontograma?",
        answer: "El odontograma de ClinicFlow360 usa la nomenclatura FDI, con arcada superior e inferior.",
      },
      {
        question: "¿Puedo registrar superficies y no solo dientes completos?",
        answer:
          "Sí. Cada diente tiene tres vistas (vestibular, oclusal y palatina) y puedes marcar las superficies afectadas en cada una.",
      },
      {
        question: "¿El odontograma está ligado a la historia clínica?",
        answer:
          "Sí. El odontograma forma parte de la ficha del paciente, junto con su historia clínica, cronología de visitas, archivos e imágenes clínicas.",
      },
    ],
  },
  {
    slug: "recepcionista-ia-whatsapp",
    name: "Recepcionista IA en WhatsApp",
    summary: "Recepcionista virtual que atiende WhatsApp 24/7 y agenda, cancela y reagenda citas.",
    metaTitle: "Recepcionista con IA en WhatsApp para clínicas dentales",
    metaDescription:
      "Recepcionista virtual con IA que atiende el WhatsApp de tu clínica dental 24/7: responde dudas, consulta disponibilidad real y agenda, cancela o reagenda citas.",
    heading: "Recepcionista con IA en WhatsApp para clínicas dentales",
    intro:
      "ClinicFlow AI es una recepcionista virtual que atiende el WhatsApp de tu clínica dental las 24 horas: responde preguntas frecuentes, consulta la disponibilidad real de doctores y sillones, y agenda, cancela o reagenda citas sin intervención humana.",
    capabilities: [
      {
        title: "Agenda citas sola",
        description: "Revisa los horarios reales de tu agenda, ofrece opciones al paciente y deja la cita registrada.",
      },
      {
        title: "Cancela y reagenda",
        description: "El paciente puede cancelar o cambiar su cita por WhatsApp sin esperar a que alguien conteste.",
      },
      {
        title: "Responde dudas",
        description: "Contesta preguntas frecuentes y dudas sobre tratamientos siguiendo las políticas de tu clínica.",
      },
      {
        title: "Detección de urgencias",
        description: "Identifica los mensajes de urgencia dental para darles prioridad.",
      },
      {
        title: "Tu mismo número",
        description: "Se conecta con la API oficial de WhatsApp Cloud de Meta y conservas el número de teléfono de tu clínica.",
      },
      {
        title: "Tu equipo toma el control",
        description: "Cuando alguien de tu equipo quiere intervenir, toma la conversación con un solo clic.",
      },
    ],
    planNote: "La recepcionista IA 24/7 en WhatsApp oficial está incluida en el plan Clínica AI 24/7.",
    faq: [
      {
        question: "¿Cómo se conecta la recepcionista IA al WhatsApp de la clínica?",
        answer:
          "ClinicFlow360 utiliza la API oficial de WhatsApp Cloud de Meta. Puedes conservar el mismo número de teléfono de tu clínica.",
      },
      {
        question: "¿La recepcionista IA puede agendar, cancelar y reagendar citas?",
        answer:
          "Sí. Consulta la disponibilidad real de tus doctores y sillones, agenda citas directamente y permite al paciente cancelar o cambiar su cita sin intervención humana.",
      },
      {
        question: "¿Puede intervenir una persona de mi equipo?",
        answer:
          "Sí. El asistente responde al instante y, cuando tu equipo desea intervenir, puede tomar el control de la conversación con un solo clic.",
      },
    ],
  },
  {
    slug: "dictado-clinico-por-voz",
    name: "Dictado clínico por voz",
    summary: "El doctor dicta la nota y la IA la transcribe y estructura, lista para revisar y firmar.",
    metaTitle: "Dictado clínico por voz con IA para dentistas",
    metaDescription:
      "Dicta la nota clínica con tu voz: la IA la transcribe y la estructura en procedimiento, pieza, detalles e indicaciones, lista para revisar y firmar.",
    heading: "Dictado clínico por voz con IA para dentistas",
    intro:
      "Con el dictado clínico de ClinicFlow360, el doctor dicta la nota desde la app y la IA la transcribe y la estructura en procedimiento, pieza, detalles e indicaciones, lista para revisar y firmar en el expediente del paciente.",
    capabilities: [
      {
        title: "Dicta con naturalidad",
        description: "Habla como lo harías con un colega; no hace falta seguir un formato.",
      },
      {
        title: "Nota estructurada",
        description: "La IA ordena lo dictado en procedimiento, pieza, detalles e indicaciones, con nomenclatura médica.",
      },
      {
        title: "Tú revisas y firmas",
        description: "Puedes editar la nota antes de autorizarla y firmarla.",
      },
      {
        title: "Directo al expediente",
        description: "La nota queda archivada en el expediente del paciente.",
      },
      {
        title: "Odontograma y evolución",
        description: "El dictado es compatible con el odontograma y con la evolución del paciente.",
      },
      {
        title: "Desde el teléfono",
        description: "Dicta desde la app móvil, sin volver a la computadora.",
      },
    ],
    planNote:
      "El plan Clínica Pro incluye dictado por voz con IA hasta 300 notas al mes. En Clínica AI 24/7 el dictado es ilimitado.",
    faq: [
      {
        question: "¿Cómo funciona el dictado por voz para notas clínicas?",
        answer:
          "El doctor dicta con su voz desde la app. La IA transcribe, estructura la nota con nomenclatura médica y la archiva en el expediente del paciente, lista para revisión y firma.",
      },
      {
        question: "¿Puedo corregir la nota antes de guardarla?",
        answer: "Sí. La nota generada se puede editar antes de autorizarla y firmarla.",
      },
      {
        question: "¿Cuántas notas puedo dictar al mes?",
        answer:
          "El plan Clínica Pro incluye hasta 300 notas al mes. El plan Clínica AI 24/7 incluye dictado por voz ilimitado.",
      },
    ],
  },
  {
    slug: "app-movil-dentistas",
    name: "App móvil para dentistas",
    summary: "App para iOS y Android con agenda, pacientes, fotos clínicas y notas por voz.",
    metaTitle: "App móvil para dentistas (iOS y Android)",
    metaDescription:
      "App móvil para dentistas en iOS y Android: agenda, pacientes, expediente, fotos clínicas y dictado por voz desde el teléfono del doctor.",
    heading: "App móvil para dentistas",
    intro:
      "La app de ClinicFlow360 para iOS y Android pone en el teléfono del doctor su agenda, sus pacientes, las fotos clínicas y las notas por voz, con el expediente disponible desde cualquier lugar.",
    screenshot: {
      src: "/landing/screenshots/mobile/home.webp",
      alt: "Pantalla de inicio de la app móvil de ClinicFlow360 con el resumen del día y las citas pendientes",
      width: 1280,
      height: 2856,
    },
    capabilities: [
      {
        title: "Tu día de un vistazo",
        description: "Resumen diario con citas pendientes y acciones rápidas al abrir la app.",
      },
      {
        title: "Agenda semanal",
        description: "Calendario semanal con vista por día, horarios y pacientes confirmados.",
      },
      {
        title: "Pacientes y expediente",
        description: "Busca entre tus pacientes y consulta historial, citas, imágenes y archivos.",
      },
      {
        title: "Fotos clínicas",
        description: "Captura fotografías desde la app y organízalas en el expediente, sin guardarlas en la galería personal del teléfono.",
      },
      {
        title: "Notificaciones push",
        description: "El doctor recibe un aviso cuando su agenda se actualiza.",
      },
      {
        title: "Dictado por voz",
        description: "Dicta la nota clínica y el sistema prepara el texto para que lo revises y guardes.",
      },
    ],
    planNote: "La app móvil para iOS y Android para doctores está incluida en el plan Clínica Pro.",
    faq: [
      {
        question: "¿Los doctores pueden usar la app en sus teléfonos personales de forma segura?",
        answer:
          "Sí. La aplicación móvil de ClinicFlow360 no almacena fotografías en la galería personal del teléfono. Todas las capturas van encriptadas directo a la nube clínica.",
      },
      {
        question: "¿En qué teléfonos funciona?",
        answer: "La app de ClinicFlow360 está disponible para iOS y Android.",
      },
      {
        question: "¿Qué puede hacer el doctor desde la app?",
        answer:
          "Consultar su agenda y sus pacientes, revisar el expediente, capturar fotografías clínicas y dictar notas por voz.",
      },
    ],
  },
]

export function featurePath(slug: string) {
  return `${featurePagesCopy.basePath}/${slug}`
}
