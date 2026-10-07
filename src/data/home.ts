/**
 * Copy for the home page sections.
 * Only capabilities confirmed in the product are described here.
 */

export const heroCopy = {
  eyebrow: "Plataforma inteligente para clínicas dentales",
  eyebrowShort: "Plataforma dental inteligente",
  headingLead: "Tu clínica conectada.",
  headingAccent: "De recepción al sillón.",
  text: "Gestiona tu clínica, automatiza la recepción y trabaja desde el sillón con IA, voz e imagenología conectadas.",
  growthText: "ClinicFlow también te ayuda a recuperar pacientes y convertir nuevas oportunidades en citas.",
  primaryCta: "Probar gratis 14 días",
  secondaryCta: "Ver ClinicFlow en acción",
  microcopy: ["Sin tarjeta", "Configuración guiada", "Cancela cuando quieras"],
  /** Three moments of the clinic shown around the agenda. */
  stage: {
    reception: { label: "Recepción", title: "Cita creada", text: "Doctor notificado" },
    chair: { label: "Sillón", title: "ClinicFlow Voice", command: "Caries mesial en la pieza 34.", result: "Odontograma actualizado" },
    imaging: { label: "Imagenología", title: "ClinicFlow RX", text: "Radiografía capturada · Expediente actualizado" },
  },
} as const

export const ecosystemCopy = {
  eyebrow: "Todo conectado",
  heading: "Opera. Automatiza. Crece.",
  text: "Una plataforma para administrar tu clínica, automatizar el trabajo diario y convertir más conversaciones en citas.",
  stages: [
    { title: "Opera", plan: "Essential", items: ["Agenda", "Pacientes", "Odontograma", "Finanzas"], href: "#producto" },
    { title: "Automatiza y retén", plan: "Pro", items: ["Dalia", "Voice", "RX", "Reactivación"], href: "#recepcion-ia" },
    { title: "Capta y convierte", plan: "Elite", items: ["Lead CRM", "ClinicFlow Sites", "Dalia para prospectos"], href: "#adquisicion" },
  ],
  flowCaption: "La información fluye. Nadie repite trabajo.",
  steps: [
    "Recepción",
    "Agenda",
    "Paciente",
    "Consulta",
    "Odontograma",
    "Voz",
    "Imagenología",
    "Tratamiento",
    "Finanzas",
    "Seguimiento",
  ],
} as const

export const problemCopy = {
  eyebrow: "El problema",
  heading: "Administrar una clínica no debería requerir cinco herramientas desconectadas.",
  beforeLabel: "Hoy, en la mayoría de clínicas",
  beforeLabelShort: "Hoy",
  afterLabel: "Con ClinicFlow360",
  rows: [
    {
      before: "La agenda vive en un calendario aparte",
      beforeDetail: "El doctor se entera tarde de los cambios.",
      after: "La cita cambia. El doctor recibe la notificación.",
      href: "#app-movil",
    },
    {
      before: "WhatsApp está en el celular de recepción",
      beforeDetail: "Nadie responde cuando la clínica cierra.",
      after: "El paciente escribe. ClinicFlow agenda.",
      href: "#recepcion-ia",
    },
    {
      before: "Las radiografías quedan en carpetas",
      beforeDetail: "Hay que buscarlas por nombre.",
      after: "Tomas la radiografía. Aparece en el expediente.",
      href: "#rx",
    },
    {
      before: "El odontograma se llena después de la consulta",
      beforeDetail: "Se completa de memoria.",
      after: "Hablas. El odontograma cambia.",
      href: "#voice",
    },
  ],
} as const

export const receptionistCopy = {
  eyebrow: "ClinicFlow AI · Dalia",
  heading: "Tu recepción no cierra cuando termina el horario.",
  text: "Dalia es tu recepcionista IA 24/7: atiende a tus pacientes y gestiona tu agenda por WhatsApp, incluso cuando tu recepción no está disponible.",
  flow: [
    { label: "WhatsApp", detail: "El paciente escribe" },
    { label: "Dalia", detail: "Entiende lo que necesita" },
    { label: "Agenda real", detail: "Consulta disponibilidad" },
    { label: "Cita creada", detail: "Queda en ClinicFlow" },
    { label: "Doctor notificado", detail: "Aviso en su app" },
  ],
  inbox: {
    src: "/landing/screenshots/desktop/bandeja-whatsapp.webp",
    alt: "Bandeja de WhatsApp de ClinicFlow360 con las conversaciones de los pacientes, las respuestas de Dalia y el momento en que el equipo toma la conversación",
    caption: "Tu equipo ve cada conversación en la bandeja y puede tomar el control cuando quiera.",
  },
  capabilities: [
    "Consulta disponibilidad real",
    "Ofrece horarios",
    "Agenda citas",
    "Reprograma",
    "Cancela",
    "Confirma",
    "Responde con la información de tu clínica",
    "Pasa la conversación a tu equipo",
  ],
  chat: {
    title: "WhatsApp de la clínica",
    status: "En línea · Dalia, ClinicFlow AI 24/7",
    tag: "Fuera de horario",
    timestamp: "DOMINGO · 11:24 PM",
    patientFirst: "Hola, buenas noches. Me duele una muela. ¿Tienen cita para mañana a primera hora?",
    aiFirst: "Buenas noches. Mañana lunes el Dr. Roberto tiene disponible a las 8:30 AM o a las 9:15 AM. ¿Cuál le parece mejor?",
    patientSecond: "A las 8:30 AM, por favor.",
    confirmationTitle: "Cita creada",
    confirmationRows: [
      { label: "Doctor", value: "Dr. Roberto Sánchez" },
      { label: "Horario", value: "Lunes 8:30 AM" },
      { label: "Motivo", value: "Dolor dental" },
    ],
    confirmationNote: "La cita ya está en la agenda y el doctor recibió el aviso.",
    inputPlaceholder: "Escribe un mensaje...",
  },
} as const

export const voiceCopy = {
  eyebrow: "ClinicFlow Voice",
  heading: "Tu voz. Tus manos en el paciente.",
  text: "Actualiza el odontograma mientras trabajas. ClinicFlow entiende piezas, superficies, diagnósticos y contexto clínico para ejecutar cambios sin interrumpir la consulta.",
  support: "No dictas para escribir. Hablas para actuar.",
  supportText:
    "Hablas. El odontograma cambia. ClinicFlow Voice interpreta el contexto clínico y ejecuta acciones directamente sobre el odontograma.",
  badges: [
    "Reconoce piezas FDI",
    "Entiende superficies",
    "Interpreta contexto",
    "Registra condiciones",
    "Modifica hallazgos",
    "Elimina condiciones",
    "Manos libres",
  ],
  commands: [
    {
      said: "Caries mesial en la pieza 34.",
      feedback: ["Pieza 34", "Superficie mesial", "Caries registrada"],
    },
    {
      context: "El doctor abre la pieza 36 en pantalla.",
      said: "Esta tiene caries oclusal con ICDAS 4.",
      feedback: ["Pieza activa detectada", "Oclusal", "ICDAS 4", "Odontograma actualizado"],
    },
    {
      said: "Eliminar caries mesial de la 34.",
      feedback: ["Condición localizada", "Eliminada"],
    },
  ],
  demo: {
    screenTitle: "Odontograma",
    icdasLabel: "ICDAS 4",
    statusListening: "Escuchando",
    statusDone: "Cambio aplicado",
    odontogramLabel:
      "Odontograma de ClinicFlow360 en tablet, con el botón Dictar, que se actualiza con cada comando de voz del doctor",
    legendCondition: "Caries registrada",
    legendActive: "Pieza activa",
    commandsLabel: "Comandos de voz de la demostración",
    commandWord: "Comando",
    speaker: "Doctor",
  },
} as const

export const chairsideCopy = {
  eyebrow: "ClinicFlow Chairside",
  heading: "El expediente completo, al lado del sillón.",
  text: "Una experiencia diseñada para tablet que pone odontograma, historial, imágenes, notas y plan de tratamiento frente al doctor durante la consulta.",
  highlight: "Menos clics. Menos interrupciones. Más atención al paciente.",
  screensLabel: "Pantallas de ClinicFlow Chairside",
  screens: [
    {
      id: "odontograma",
      label: "Odontograma",
      src: "/landing/screenshots/tablet/odontograma.webp",
      alt: "Odontograma completo en tablet con arcada superior e inferior, hallazgos por superficie y el botón Dictar",
    },
    {
      id: "pieza",
      label: "Pieza",
      src: "/landing/screenshots/tablet/pieza-superficies.webp",
      alt: "Ficha de la pieza 16 en tablet con sus superficies vestibular, oclusal y palatina",
    },
    {
      id: "diagnostico",
      label: "Diagnóstico",
      src: "/landing/screenshots/tablet/pieza-diagnostico.webp",
      alt: "Diagnóstico de la pieza 16 en tablet",
    },
    {
      id: "plan",
      label: "Plan",
      src: "/landing/screenshots/tablet/pieza-plan.webp",
      alt: "Plan de tratamiento de la pieza 16 en tablet, con procedimientos y prioridades",
    },
    {
      id: "pacientes",
      label: "Pacientes",
      src: "/landing/screenshots/tablet/pacientes.webp",
      alt: "Lista de pacientes en tablet con alergias, antecedentes y plan de tratamiento del paciente seleccionado",
    },
  ],
  features: [
    { title: "Odontograma", text: "Grande, táctil y optimizado para tablet." },
    { title: "Expediente", text: "Información clínica disponible sin regresar al escritorio." },
    { title: "Imágenes", text: "Fotografías y radiografías dentro del paciente." },
    { title: "Voice", text: "Actualización del odontograma mediante comandos naturales." },
    { title: "Plan", text: "Tratamiento disponible durante la consulta." },
  ],
} as const

export const rxCopy = {
  eyebrow: "ClinicFlow RX",
  heading: "Toma la radiografía como siempre. Ya está en el expediente.",
  text: "ClinicFlow RX conecta tus equipos de imagenología compatibles con el expediente del paciente para que las imágenes lleguen automáticamente al lugar correcto.",
  flow: [
    { label: "Paciente activo", detail: "Ana Martínez · Pieza 36" },
    { label: "ClinicFlow RX", detail: "Esperando imagen..." },
    { label: "Equipo / sensor", detail: "Radiografía capturada" },
    { label: "ClinicFlow", detail: "Imagen recibida" },
    { label: "Expediente", detail: "Radiografía asociada al paciente" },
  ],
  negatives: [
    "Sin exportar archivos.",
    "Sin carpetas compartidas.",
    "Sin volver a escribir el nombre del paciente.",
  ],
  cta: "Consultar compatibilidad",
  ctaSubject: "Compatibilidad con ClinicFlow RX",
  note: "Disponible para equipos e integraciones compatibles. Consulta la compatibilidad de los tuyos.",
} as const

export const platformCopy = {
  screensLabel: "Módulos de la plataforma",
  demoNote: "Capturas del producto con datos de demostración.",
  screens: [
    {
      id: "agenda",
      label: "Agenda",
      desc: "Citas por especialista, día a día",
      src: "/landing/screenshots/desktop/agenda-dia.webp",
      alt: "Agenda del día en ClinicFlow360 con las citas de cada especialista por horario y etiquetas de tipo de atención",
    },
    {
      id: "pacientes",
      label: "Pacientes",
      desc: "Toda tu base, a un clic",
      src: "/landing/screenshots/desktop/pacientes.webp",
      alt: "Listado de pacientes en ClinicFlow360 con edad, contacto, dirección y estado",
    },
    {
      id: "expediente",
      label: "Expediente",
      desc: "Evolución, alertas y antecedentes",
      src: "/landing/screenshots/desktop/expediente.webp",
      alt: "Expediente del paciente con su evolución clínica, alertas de alergias, antecedentes médicos y radiografías",
    },
    {
      id: "odontograma",
      label: "Odontograma",
      desc: "FDI interactivo, con dictado",
      src: "/landing/screenshots/desktop/odontograma.webp",
      alt: "Odontograma interactivo de ClinicFlow360 con arcada superior e inferior, hallazgos por superficie y el botón para dictar",
    },
    {
      id: "tratamientos",
      label: "Tratamientos",
      desc: "El plan, pieza por pieza",
      src: "/landing/screenshots/desktop/tratamientos.webp",
      alt: "Plan de tratamiento del paciente con cada servicio por pieza, su importe y su estado",
    },
    {
      id: "imagenes",
      label: "Imágenes",
      desc: "Radiografías y archivos del paciente",
      src: "/landing/screenshots/desktop/imagenes.webp",
      alt: "Galería de imágenes y archivos clínicos del paciente con radiografías, consentimientos e informes",
    },
    {
      id: "dashboard",
      label: "Dashboard",
      desc: "La clínica de un vistazo",
      src: "/landing/screenshots/desktop/dashboard.webp",
      alt: "Dashboard de ClinicFlow360 con las citas de hoy, la tasa de asistencia, los pacientes nuevos y la ocupación de doctores",
    },
  ],
  eyebrow: "La base clínica",
  heading: "Agenda, pacientes y expediente: la base de todo lo demás.",
  text: "Lo esencial de una clínica dental, resuelto y conectado: agenda, pacientes, expediente clínico, odontograma, tratamientos e imágenes.",
} as const

export const mobileCopy = {
  eyebrow: "App móvil del doctor",
  heading: "Tu clínica también va contigo.",
  text: "Tu agenda, tus pacientes y sus expedientes en el teléfono, con avisos cuando hay una cita nueva o algo cambia.",
  capabilities: [
    "Agenda del doctor",
    "Pacientes y expediente",
    "Fotografías clínicas",
    "Antes / después",
    "Notificaciones push",
  ],
  screensLabel: "Pantallas de la app móvil",
  showScreen: "Ver",
  screens: [
    {
      id: "home",
      label: "Tu día de un vistazo",
      desc: "Citas del día, la consulta en curso y lo que sigue, con acceso directo al expediente.",
      src: "/landing/screenshots/mobile/home.webp",
      alt: "Pantalla de inicio de la app con las citas del día, la consulta en curso y las próximas citas",
    },
    {
      id: "agenda",
      label: "Agenda en tiempo real",
      desc: "Tu semana y el detalle de cada día: citas, estados y espacios libres.",
      src: "/landing/screenshots/mobile/agenda.webp",
      alt: "Agenda del doctor en la app con las citas del día, sus estados y los espacios libres",
    },
    {
      id: "cita",
      label: "Cada cita, con su contexto",
      desc: "Estado de la cita, alergias y antecedentes del paciente, y contacto por WhatsApp o llamada.",
      src: "/landing/screenshots/mobile/cita.webp",
      alt: "Detalle de una cita en la app con su estado, alergias y antecedentes del paciente y botones de WhatsApp y llamada",
    },
    {
      id: "pacientes",
      label: "Tus pacientes contigo",
      desc: "Busca entre todos tus pacientes y entra a su ficha en un toque.",
      src: "/landing/screenshots/mobile/pacientes.webp",
      alt: "Lista de pacientes en la app con buscador y datos de contacto",
    },
    {
      id: "ficha",
      label: "Ficha del paciente",
      desc: "Alergias, antecedentes, próxima cita y plan de tratamiento en una sola pantalla.",
      src: "/landing/screenshots/mobile/paciente-detalle.webp",
      alt: "Ficha de un paciente en la app con alergias, antecedentes, próxima cita y plan de tratamiento",
    },
    {
      id: "perfil",
      label: "Perfil y horario",
      desc: "Tus datos, tu horario de atención y qué notificaciones quieres recibir.",
      src: "/landing/screenshots/mobile/perfil.webp",
      alt: "Perfil del doctor en la app con sus datos de contacto, su horario y los ajustes de notificaciones",
    },
  ],
  contextsTitle: "Una plataforma. Tres contextos.",
  contexts: [
    { device: "Móvil", text: "Seguimiento y operación cuando el doctor está en movimiento." },
    { device: "Tablet", text: "Herramienta clínica chairside durante la consulta." },
    { device: "Desktop", text: "Administración completa de la clínica." },
  ],
} as const

export const financeCopy = {
  eyebrow: "Finanzas",
  heading: "De la cita al ingreso.",
  text: "Presupuestos, recibos y pagos ligados al paciente, con la caja del día y lo que falta por cobrar a la vista.",
  screenshot: {
    src: "/landing/screenshots/desktop/finanzas.webp",
    alt: "Reportes de finanzas en ClinicFlow360 con lo emitido, lo cobrado, lo que falta por cobrar y el cobro por método de pago",
    caption: "Captura del producto con datos de demostración.",
  },
  flow: [
    { label: "Tratamiento" },
    { label: "Presupuesto" },
    { label: "Pago" },
    { label: "Ingreso" },
    { label: "Dashboard financiero" },
  ],
  points: [
    "Presupuestos y recibos por paciente",
    "Registro de pagos y saldo a favor",
    "Apertura y cierre de caja",
    "Cuentas por cobrar",
    "Dashboard de ingresos",
  ],
} as const

/**
 * Patient acquisition (Lead CRM, ClinicFlow Sites, domain, business email, lead origin)
 * is not generally available yet. While this label is set it is shown next to every
 * acquisition feature; set it to null once the features ship.
 */
export const acquisitionStatusLabel: string | null = "Próximamente"

export const growthCopy = {
  eyebrow: "ClinicFlow Growth",
  heading: "Dos motores de crecimiento.",
  text: "Uno hace que tus pacientes regresen. El otro convierte nuevas oportunidades en pacientes.",
  demoLabel: "Demostración",
  reactivation: {
    tag: "Ya te conocen",
    plan: "Disponible en Pro",
    title: "Haz que tus pacientes regresen.",
    text: "Segmenta, automatiza recordatorios y reactiva pacientes que dejaron de venir.",
    story: [
      {
        kind: "card",
        eyebrow: "Paciente inactivo",
        title: "María López",
        lines: ["Última visita: hace 8 meses", "Sin cita futura"],
        badge: "Reactivación",
        action: "Reactivar paciente",
      },
      { kind: "outbound", from: "WhatsApp", text: "Hola María 👋 Hace tiempo que no te vemos. ¿Te gustaría agendar tu revisión?" },
      { kind: "inbound", from: "María", text: "Sí, quisiera una cita esta semana." },
      { kind: "system", text: "Dalia consulta disponibilidad" },
      { kind: "result", text: "Nueva cita" },
    ],
    footerTitle: "Campañas que puedes enviar",
    categories: [
      "Pacientes inactivos",
      "Inasistencias",
      "Citas canceladas sin reagendar",
      "Seguimientos",
      "Cumpleaños",
      "Por servicio",
    ],
    microcopy: "De paciente inactivo a paciente recuperado.",
  },
  leads: {
    tag: "Aún no son pacientes",
    plan: "Disponible en Elite",
    title: "Convierte nuevas oportunidades.",
    text: "Dalia también atiende a tus prospectos: responde, consulta la agenda y los acompaña hasta la cita de valoración.",
    story: [
      {
        kind: "card",
        eyebrow: "Nueva oportunidad",
        title: "Carlos Mendoza",
        lines: ["Interés: implantes", "Origen: WhatsApp"],
        badge: "Lead",
        action: "Ver oportunidad",
      },
      { kind: "inbound", from: "Carlos", text: "Hola, quisiera información sobre implantes." },
      { kind: "outbound", from: "Dalia", text: "Hola Carlos. Podemos verte en una cita de valoración. ¿Te queda bien mañana?" },
      { kind: "system", text: "Dalia consulta disponibilidad" },
      { kind: "result", text: "Cita de valoración" },
    ],
    conversion: ["Lead", "Cita", "Paciente"],
    footerTitle: "El recorrido de cada oportunidad",
    stages: ["Nueva oportunidad", "Contactado", "Calificado", "Cita", "Paciente"],
    microcopy: "De conversación a cita. De cita a paciente.",
  },
  campaigns: {
    title: "Comunícate con intención.",
    screenshot: {
      src: "/landing/screenshots/desktop/segmentos.webp",
      alt: "Segmentos de pacientes en ClinicFlow360 definidos con reglas, como sin limpieza en seis meses, ortodoncia en tratamiento o cumpleaños del mes",
      caption: "Segmentos definidos con reglas. Captura con datos de demostración.",
    },
    text: "Segmenta pacientes, crea campañas personalizadas y da seguimiento desde ClinicFlow. Habla con el grupo correcto de pacientes en el momento correcto.",
    flow: [
      { label: "Paciente inactivo" },
      { label: "Reactivación" },
      { label: "WhatsApp" },
      { label: "Respuesta" },
      { label: "Disponibilidad" },
      { label: "Nueva cita" },
    ],
    points: [
      "Segmentos con reglas: última visita, citas futuras, cancelaciones, servicio o doctor",
      "Recordatorios de cita con botones para confirmar, reagendar o cancelar",
      "Campañas programadas o de envío inmediato",
      "Resultados por campaña",
    ],
  },
} as const

export const acquisitionCopy = {
  eyebrow: "ClinicFlow Elite · Patient Acquisition",
  heading: "Convierte oportunidades en nuevos pacientes.",
  statusNote: "Estas funciones se están incorporando al plan Elite.",
  text: "Captura nuevas oportunidades, organízalas en un solo lugar y acompáñalas desde el primer contacto hasta la cita.",
  pipeline: {
    label: "Lead CRM",
    title: "Organiza nuevas oportunidades, dales seguimiento y conviértelas en citas.",
    boardLabel: "Ejemplo del recorrido de las oportunidades en el Lead CRM",
    columns: [
      { stage: "Nueva oportunidad", leads: [{ name: "Carlos Mendoza", interest: "Implantes", origin: "WhatsApp" }, { name: "Laura Pineda", interest: "Ortodoncia", origin: "Sitio web" }] },
      { stage: "Contactado", leads: [{ name: "Andrés Solís", interest: "Blanqueamiento", origin: "Referido" }] },
      { stage: "Calificado", leads: [{ name: "Marta Reyes", interest: "Carillas", origin: "Sitio web" }] },
      { stage: "Cita", leads: [{ name: "Diego Luna", interest: "Valoración", origin: "WhatsApp" }] },
      { stage: "Paciente", leads: [{ name: "Elena Cruz", interest: "Implantes", origin: "Referido" }] },
    ],
  },
  sites: {
    label: "ClinicFlow Sites",
    title: "Tu sitio no termina en un formulario.",
    text: "Tu presencia digital conectada directamente con ClinicFlow: cada oportunidad entra al Lead CRM para que tu equipo pueda darle seguimiento y convertirla en una cita.",
    domain: "clinicadentalmendoza.com",
    siteName: "Clínica Dental Mendoza",
    siteTagline: "Agenda tu valoración",
    formFields: ["Nombre", "Teléfono", "Tratamiento de interés"],
    formAction: "Solicitar cita",
    flow: ["Visitante", "ClinicFlow Site", "Formulario", "Lead CRM", "Dalia / Recepción", "Cita", "Paciente"],
  },
  identity: [
    {
      title: "Dominio propio",
      text: "Tu clínica con su propia dirección digital. El dominio pertenece a tu clínica.",
      example: "clinicadentalmendoza.com",
    },
    {
      title: "1 correo empresarial incluido",
      text: "Comunícate con la identidad profesional de tu clínica. Cuentas adicionales disponibles como complemento.",
      example: "citas@clinicadentalmendoza.com",
    },
    {
      title: "¿Ya tienes página web?",
      text: "Conéctala a ClinicFlow. ClinicFlow Sites no es requisito para captar oportunidades.",
    },
  ],
  origins: {
    title: "Conoce el origen de tus oportunidades.",
    items: ["Sitio web", "WhatsApp", "Google", "Meta", "Referido", "Manual"],
  },
  disclaimer: "Elite te da la infraestructura para captar, organizar, atender y convertir. El presupuesto publicitario no está incluido.",
  closing: "De conversación a cita. De cita a paciente.",
  cta: "Ver planes",
} as const

export const dayCopy = {
  eyebrow: "Recorrido completo",
  heading: "Un día con ClinicFlow.",
  text: "Del primer mensaje al seguimiento, sin que nadie vuelva a capturar lo mismo.",
  closing: "Una clínica. Un flujo. Cero información desconectada.",
  phases: [
    {
      label: "Antes de abrir",
      steps: [
        { time: "07:12", event: "Paciente escribe por WhatsApp", detail: "«¿Tienen cita hoy después de las 3?»" },
        { time: "07:12", event: "Dalia consulta disponibilidad", detail: "Revisa la agenda real y ofrece horarios" },
        { time: "07:13", event: "Cita creada automáticamente", detail: "Agenda actualizada" },
        { time: "07:13", event: "Doctor recibe push", detail: "Nueva cita a las 15:00" },
      ],
    },
    {
      label: "En consulta",
      steps: [
        { time: "15:00", event: "Paciente llega", detail: "Su expediente ya está listo" },
        { time: "15:03", event: "Doctor abre ClinicFlow en la tablet", detail: "Odontograma, historial e imágenes al lado del sillón" },
        { time: "15:10", event: "«Esta tiene caries oclusal con ICDAS 4.»", detail: "ClinicFlow Voice actualiza el odontograma" },
        { time: "15:18", event: "Doctor solicita radiografía", detail: "Se toma con el equipo habitual" },
        { time: "15:20", event: "ClinicFlow RX la incorpora al expediente", detail: "Asociada al paciente y a la pieza" },
        { time: "15:35", event: "Tratamiento actualizado", detail: "El plan queda al día" },
        { time: "15:40", event: "Información financiera registrada", detail: "El cargo de la cita queda en la cuenta del paciente" },
      ],
    },
    {
      label: "Después de la consulta",
      steps: [
        { time: "Luego", event: "Seguimiento y recordatorios", detail: "Continúan automáticamente por WhatsApp" },
      ],
    },
  ],
} as const

export const securityCopy = {
  eyebrow: "Seguridad",
  heading: "La información de tus pacientes merece el mismo cuidado que ellos.",
  text: "Controles de acceso pensados para una clínica donde no todos deben ver lo mismo.",
  items: [
    {
      title: "Acceso por roles",
      text: "Recepción, doctores y administración trabajan con permisos por módulo y por acción.",
    },
    {
      title: "Datos separados por clínica",
      text: "Cada sesión queda ligada a su clínica: un usuario solo accede a la información de la suya.",
    },
    {
      title: "Registro de cambios",
      text: "Queda constancia de quién modificó qué y cuándo.",
    },
    {
      title: "Conexión segura",
      text: "El acceso es por HTTPS y las contraseñas nunca se guardan en texto plano.",
    },
  ],
} as const

export const pricingCopy = {
  eyebrow: "Planes",
  heading: "Comienza hoy con 14 días gratis.",
  headingMuted: "Sin tarjeta.",
  text: "Tres niveles de resultado: operar tu clínica, automatizarla y retener pacientes, y captar nuevos.",
  doctorsLabel: (count: number) => `Hasta ${count} doctores incluidos`,
  extraDoctorsTitle: "¿Tu equipo es más grande?",
  extraDoctorsText: "Agrega doctores adicionales sin cambiar de plan.",
  usageNote: "El uso de Dalia, ClinicFlow AI y ClinicFlow Voice está incluido según el plan.",
  compareLabel: "Ver todas las funciones",
  compareCaption: "Comparación de los planes Essential, Pro y Elite",
  featureColumn: "Función",
  currency: "USD",
  period: "/mes",
  footnote: "Todos los planes incluyen la prueba gratis de 14 días. Sin contratos de permanencia.",
} as const

export const finalCtaCopy = {
  headingLead: "El paciente escribe. El doctor habla.",
  headingAccent: "ClinicFlow conecta el resto.",
  text: "Prueba ClinicFlow360 con tu clínica durante 14 días. Sin tarjeta.",
  primaryCta: "Probar ClinicFlow360 gratis",
  secondaryCta: "Ver planes",
  microcopy: ["Sin tarjeta", "Configuración guiada", "Cancela cuando quieras"],
} as const
