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
    "Conoce las funciones de ClinicFlow360: recepcionista con IA en WhatsApp, odontograma por voz, agenda dental, odontograma digital y app móvil para dentistas.",
  indexHeading: "Funciones de ClinicFlow360",
  indexIntro:
    "ClinicFlow360 es la plataforma inteligente para clínicas dentales: conecta recepción, agenda, expediente, odontograma, imágenes y administración en un solo flujo.",
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
    slug: "recepcionista-ia-whatsapp",
    name: "Recepcionista IA en WhatsApp",
    summary: "Un agente que atiende WhatsApp 24/7 y agenda, reprograma, cancela y confirma citas en tu agenda real.",
    metaTitle: "Recepcionista con IA en WhatsApp para clínicas dentales",
    metaDescription:
      "ClinicFlow AI atiende el WhatsApp de tu clínica dental 24/7: consulta tu agenda en tiempo real y agenda, reprograma, cancela o confirma citas directamente.",
    heading: "Recepcionista con IA en WhatsApp para clínicas dentales",
    intro:
      "ClinicFlow AI es un agente conectado al sistema de tu clínica que atiende WhatsApp las 24 horas: consulta la disponibilidad real de tu agenda, ofrece horarios y crea, reprograma, cancela o confirma citas directamente en ClinicFlow.",
    capabilities: [
      {
        title: "Consulta disponibilidad real",
        description: "Revisa la agenda de tus doctores en el momento y ofrece horarios que de verdad están libres.",
      },
      {
        title: "Crea la cita",
        description: "La cita queda registrada en ClinicFlow, no en un mensaje pendiente para recepción.",
      },
      {
        title: "Reprograma y cancela",
        description: "El paciente cambia o cancela su cita por WhatsApp y la agenda se actualiza.",
      },
      {
        title: "Confirma",
        description: "El paciente confirma su asistencia desde la misma conversación.",
      },
      {
        title: "Responde con la información de tu clínica",
        description: "Contesta lo básico, como dirección y teléfono, con los datos de tu clínica.",
      },
      {
        title: "Pasa la conversación a tu equipo",
        description: "Cuando hace falta una persona, tu equipo continúa desde la bandeja de mensajes.",
      },
    ],
    planNote: "ClinicFlow AI Receptionist 24/7 está incluido desde el plan Pro.",
    faq: [
      {
        question: "¿La recepcionista IA realmente puede crear citas?",
        answer:
          "Sí. ClinicFlow AI consulta la disponibilidad real de tu agenda, ofrece horarios al paciente y crea la cita directamente en ClinicFlow.",
      },
      {
        question: "¿Puede cancelar y reprogramar citas?",
        answer:
          "Sí. El paciente puede confirmar, cancelar o reprogramar su cita por WhatsApp y el cambio queda reflejado en la agenda.",
      },
      {
        question: "¿Cómo se conecta al WhatsApp de la clínica?",
        answer: "ClinicFlow AI trabaja sobre la API oficial de WhatsApp Cloud de Meta.",
      },
    ],
  },
  {
    slug: "odontograma-por-voz",
    name: "Odontograma por voz",
    summary: "ClinicFlow Voice: dices el hallazgo y el odontograma se actualiza, con las manos en el paciente.",
    metaTitle: "Odontograma por voz: manos libres durante la consulta",
    metaDescription:
      "ClinicFlow Voice actualiza el odontograma con tu voz: entiende piezas FDI, superficies, diagnósticos, ICDAS y contexto clínico, sin interrumpir la consulta.",
    heading: "Odontograma por voz, con las manos en el paciente",
    intro:
      "ClinicFlow Voice permite actualizar el odontograma hablando: el doctor dice el hallazgo y ClinicFlow interpreta la pieza, la superficie, el diagnóstico y el contexto para proponer el cambio sobre el odontograma. No es un dictado de notas: es una forma de actuar sobre el odontograma sin soltar el instrumental.",
    capabilities: [
      {
        title: "Reconoce piezas FDI",
        description: "«Caries mesial en la pieza 34» se convierte en un registro sobre la pieza 34.",
      },
      {
        title: "Entiende superficies",
        description: "Mesial, oclusal y el resto de las caras se registran en la superficie correcta.",
      },
      {
        title: "Interpreta el contexto",
        description: "Si dices «esta», ClinicFlow usa la pieza que tienes abierta en pantalla.",
      },
      {
        title: "Registra ICDAS",
        description: "Puedes incluir el código ICDAS en la misma frase.",
      },
      {
        title: "Elimina condiciones",
        description: "También puedes quitar un hallazgo con la voz; eliminar siempre pide confirmación.",
      },
      {
        title: "Tú confirmas",
        description: "Ves la propuesta antes de aplicarla y puedes aplicar, descartar o deshacer con la voz.",
      },
    ],
    planNote: "ClinicFlow Voice (odontograma manos libres) está incluido desde el plan Pro.",
    faq: [
      {
        question: "¿Cómo funciona el odontograma por voz?",
        answer:
          "Dices lo que encuentras —pieza, superficie, hallazgo y, si aplica, el código ICDAS— y ClinicFlow Voice lo convierte en cambios sobre el odontograma. Ves la propuesta antes de aplicarla, y eliminar una condición siempre pide confirmación.",
      },
      {
        question: "¿Necesito tocar la tablet mientras dicto?",
        answer:
          "Solo un toque para iniciar la sesión de voz. Después el micrófono queda abierto y puedes aplicar, descartar o deshacer cada cambio con la voz.",
      },
      {
        question: "¿Es lo mismo que dictar una nota clínica?",
        answer:
          "No. El dictado convierte voz en texto. ClinicFlow Voice interpreta la intención clínica y actúa sobre el odontograma: registra, modifica o elimina condiciones en la pieza y superficie indicadas.",
      },
    ],
  },
  {
    slug: "clinicflow-rx",
    name: "ClinicFlow RX",
    summary: "Integración de imagenología: la radiografía llega al expediente del paciente, con equipos compatibles.",
    metaTitle: "ClinicFlow RX: radiografías directo al expediente",
    metaDescription:
      "ClinicFlow RX conecta equipos de imagenología compatibles con el expediente del paciente para que las radiografías lleguen al lugar correcto. Consulta compatibilidad.",
    heading: "Radiografías directo al expediente del paciente",
    intro:
      "ClinicFlow RX es la integración de imagenología de ClinicFlow360: conecta equipos compatibles con el expediente del paciente para que la radiografía quede asociada al paciente correcto sin exportar archivos. Funciona únicamente con equipos e integraciones compatibles.",
    capabilities: [
      {
        title: "Tomas la radiografía como siempre",
        description: "El flujo de captura con tu equipo no cambia.",
      },
      {
        title: "Llega al paciente activo",
        description: "La imagen se asocia al paciente que tienes abierto en ClinicFlow.",
      },
      {
        title: "Sin exportar archivos",
        description: "No hace falta guardar, renombrar ni subir la imagen a mano.",
      },
      {
        title: "Sin carpetas compartidas",
        description: "Las imágenes viven en el expediente, junto al odontograma y el historial.",
      },
      {
        title: "Equipos compatibles",
        description: "Funciona con los equipos e integraciones compatibles; la lista se valida equipo por equipo.",
      },
      {
        title: "Consulta antes de contratar",
        description: "Escríbenos para confirmar la compatibilidad de los equipos de tu clínica.",
      },
    ],
    planNote:
      "ClinicFlow RX está incluido desde el plan Pro para una estación o equipo compatible, y con más estaciones en Elite.",
    faq: [
      {
        question: "¿Qué es ClinicFlow RX?",
        answer:
          "Es la integración de imagenología de ClinicFlow360: conecta equipos compatibles con el expediente para que la radiografía quede asociada al paciente sin exportar archivos. Funciona con equipos e integraciones compatibles.",
      },
      {
        question: "¿Tengo que cambiar mis equipos de radiografía?",
        answer:
          "La idea es que no: ClinicFlow RX está pensado para trabajar con los equipos compatibles que la clínica ya utiliza. Consulta la compatibilidad de los tuyos antes de contratar.",
      },
      {
        question: "¿ClinicFlow RX funciona con cualquier sensor?",
        answer:
          "No. Funciona únicamente con equipos e integraciones compatibles, y la lista se está validando equipo por equipo.",
      },
    ],
  },
  {
    slug: "agenda-dental",
    name: "Agenda dental",
    summary: "Calendario de citas por especialista, conectado con WhatsApp y con la app del doctor.",
    metaTitle: "Agenda dental online para clínicas y consultorios",
    metaDescription:
      "Agenda dental online: organiza las citas por especialista, envía recordatorios por WhatsApp y avisa al doctor cuando algo cambia. Pruébala gratis 14 días.",
    heading: "Agenda dental online para tu clínica",
    intro:
      "La agenda de ClinicFlow360 es un calendario de citas pensado para clínicas dentales: organiza las citas por especialista en vistas de día, semana y mes, y está conectada con WhatsApp y con la app del doctor para que nadie tenga que avisar de los cambios.",
    screenshot: {
      src: "/landing/screenshots/agenda-dark.webp",
      alt: "Agenda dental de ClinicFlow360 en vista mensual, con citas por especialista y etiquetas de estado",
      width: 1400,
      height: 703,
    },
    capabilities: [
      {
        title: "Citas por especialista",
        description: "Filtra el calendario por doctor y ve quién atiende y a qué hora.",
      },
      {
        title: "Vistas de día, semana y mes",
        description: "Cambia de vista según lo que necesites: el detalle del día o la carga de todo el mes.",
      },
      {
        title: "Estados y etiquetas",
        description: "Distingue las citas agendadas, confirmadas y canceladas, y usa etiquetas para el tipo de atención.",
      },
      {
        title: "Recordatorios por WhatsApp",
        description: "El paciente recibe el recordatorio con botones para confirmar, reagendar o cancelar.",
      },
      {
        title: "El doctor se entera",
        description: "Cuando una cita se crea o cambia, el doctor recibe una notificación en su app.",
      },
      {
        title: "Conectada a la recepcionista IA",
        description: "Desde el plan Pro, ClinicFlow AI consulta esta misma agenda para agendar, reprogramar y cancelar.",
      },
    ],
    planNote: "La agenda está incluida en todos los planes, desde Essential.",
    faq: [
      {
        question: "¿La agenda está incluida en todos los planes?",
        answer: "Sí. La agenda forma parte del software clínico completo que incluye el plan Essential.",
      },
      {
        question: "¿Los pacientes pueden agendar por WhatsApp?",
        answer:
          "Sí, desde el plan Pro. ClinicFlow AI consulta la disponibilidad real de tu agenda y agenda, reprograma o cancela la cita directamente.",
      },
      {
        question: "¿Cómo funcionan los recordatorios de cita?",
        answer:
          "Salen automáticamente por WhatsApp, con botones para confirmar, reagendar o cancelar, en los tiempos que configure la clínica.",
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
      "El odontograma digital de ClinicFlow360 es un odontograma interactivo con nomenclatura FDI: registras el estado de cada diente y de cada superficie, el diagnóstico, el plan de tratamiento y lo realizado, dentro del expediente del paciente.",
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
        title: "También por voz",
        description: "Desde el plan Pro, ClinicFlow Voice actualiza el odontograma con comandos naturales.",
      },
    ],
    planNote:
      "El odontograma está incluido en todos los planes. El control por voz (ClinicFlow Voice) está incluido desde Pro.",
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
        question: "¿Puedo actualizar el odontograma sin tocar la pantalla?",
        answer:
          "Sí, con ClinicFlow Voice, incluido desde el plan Pro: dices el hallazgo y ClinicFlow propone el cambio sobre el odontograma.",
      },
    ],
  },
  {
    slug: "app-movil-dentistas",
    name: "App móvil para dentistas",
    summary: "La app del doctor: agenda, pacientes, expediente, fotografías clínicas y avisos de cambios.",
    metaTitle: "App móvil para dentistas",
    metaDescription:
      "App móvil para dentistas: agenda, pacientes, expediente, fotografías clínicas, antes y después, y notificaciones cuando una cita cambia.",
    heading: "App móvil para dentistas",
    intro:
      "La app móvil de ClinicFlow360 es la herramienta del doctor cuando no está frente al escritorio: su agenda, sus pacientes y sus expedientes en el teléfono, con notificaciones cuando hay una cita nueva o algo cambia.",
    screenshot: {
      src: "/landing/screenshots/mobile/home.webp",
      alt: "Pantalla de inicio de la app móvil de ClinicFlow360 con el resumen del día y las citas pendientes",
      width: 1280,
      height: 2856,
    },
    capabilities: [
      {
        title: "Agenda del doctor",
        description: "Sus citas del día y de la semana, con el detalle de cada una.",
      },
      {
        title: "Pacientes y expediente",
        description: "Busca entre tus pacientes y consulta su información clínica.",
      },
      {
        title: "Fotografías clínicas",
        description: "Toma fotos desde la app y guárdalas en el expediente del paciente.",
      },
      {
        title: "Antes y después",
        description: "Compara imágenes del paciente para mostrar la evolución.",
      },
      {
        title: "Notificaciones push",
        description: "Avisos de citas nuevas, cambios de estado y modificaciones de la agenda.",
      },
      {
        title: "En tablet: Chairside",
        description: "En tablet, ClinicFlow se convierte en la herramienta clínica al lado del sillón.",
      },
    ],
    planNote: "La app móvil está incluida desde el plan Essential.",
    faq: [
      {
        question: "¿Los doctores tienen app móvil?",
        answer:
          "Sí. Desde la app el doctor consulta su agenda y sus pacientes, revisa expedientes, toma fotografías clínicas, compara antes y después, y recibe notificaciones.",
      },
      {
        question: "¿De qué le avisa la app al doctor?",
        answer: "De citas nuevas, cambios de estado y modificaciones relevantes de su agenda.",
      },
      {
        question: "¿La tablet usa otra aplicación?",
        answer:
          "No. Es ClinicFlow adaptándose al contexto: en el teléfono sirve para el seguimiento y en la tablet se convierte en la herramienta clínica de la consulta.",
      },
    ],
  },
]

export function featurePath(slug: string) {
  return `${featurePagesCopy.basePath}/${slug}`
}
