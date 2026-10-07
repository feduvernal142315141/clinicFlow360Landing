/**
 * Copy for the home page sections.
 * Only capabilities confirmed in the product are described here.
 */

export const heroCopy = {
  eyebrow: "La plataforma inteligente para clínicas dentales",
  eyebrowShort: "Plataforma dental inteligente",
  headingLead: "Tu clínica conectada.",
  headingAccent: "De recepción al sillón.",
  text: "Agenda, pacientes, odontograma manos libres, imagenología, finanzas y una recepcionista IA 24/7 conectados en una sola plataforma.",
  primaryCta: "Probar gratis 14 días",
  secondaryCta: "Ver ClinicFlow en acción",
  microcopy: ["Sin tarjeta", "Configuración guiada", "Cancela cuando quieras"],
  stage: {
    chatTitle: "WhatsApp → ClinicFlow AI",
    voiceTitle: "ClinicFlow Voice",
    voiceCommand: "Caries mesial en la pieza 34.",
    voiceResult: "Odontograma actualizado",
    rxTitle: "ClinicFlow RX",
    rxText: "Radiografía en el expediente",
    appointmentTitle: "Cita creada",
    appointmentText: "Doctor notificado",
  },
} as const

export const ecosystemCopy = {
  eyebrow: "Todo conectado",
  heading: "La información fluye. Nadie repite trabajo.",
  text: "Lo que recepción agenda, el doctor lo ve. Lo que el doctor registra en el sillón, administración ya lo tiene.",
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
  proofs: [
    {
      title: "Recepción 24/7",
      text: "El paciente escribe. ClinicFlow encuentra el horario. La cita aparece en tu agenda.",
      href: "#recepcion-ia",
    },
    {
      title: "Odontograma por voz",
      text: "Hablas. El odontograma cambia.",
      href: "#voice",
    },
    {
      title: "RX directo al expediente",
      text: "Tomas la radiografía. Aparece en el expediente.",
      href: "#rx",
    },
    {
      title: "Agenda conectada",
      text: "La cita cambia. El doctor recibe la notificación.",
      href: "#app-movil",
    },
  ],
} as const

export const problemCopy = {
  eyebrow: "El problema",
  heading: "Administrar una clínica no debería requerir cinco herramientas desconectadas.",
  beforeLabel: "Así opera hoy la mayoría de clínicas",
  afterLabel: "Con ClinicFlow360: un solo sistema",
  pains: [
    { title: "Agenda en un calendario aparte", detail: "El doctor se entera tarde de los cambios" },
    { title: "WhatsApp en el celular de recepción", detail: "Nadie responde al cerrar" },
    { title: "Radiografías en carpetas", detail: "Hay que buscarlas por nombre" },
    { title: "Odontograma después de la consulta", detail: "Se llena de memoria" },
  ],
  screenshotAlt:
    "Dashboard de ClinicFlow360 con la actividad de la clínica y la ocupación de doctores en una sola vista",
} as const

export const receptionistCopy = {
  eyebrow: "ClinicFlow AI Receptionist",
  heading: "Tu recepción no cierra cuando termina el horario.",
  text: "ClinicFlow AI atiende WhatsApp 24/7, consulta tu agenda en tiempo real y puede agendar, reprogramar o cancelar citas directamente en ClinicFlow.",
  flow: [
    { label: "WhatsApp", detail: "El paciente escribe" },
    { label: "ClinicFlow AI", detail: "Entiende lo que necesita" },
    { label: "Agenda real", detail: "Consulta disponibilidad" },
    { label: "Cita creada", detail: "Queda en ClinicFlow" },
    { label: "Doctor notificado", detail: "Aviso en su app" },
  ],
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
    status: "En línea · ClinicFlow AI 24/7",
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
    "ClinicFlow Voice interpreta el contexto clínico y ejecuta acciones directamente sobre el odontograma.",
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
    patient: "Paciente: Ana Martínez",
    statusListening: "Escuchando",
    statusDone: "Cambio aplicado",
    odontogramLabel:
      "Odontograma con nomenclatura FDI que se actualiza con cada comando de voz del doctor",
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
  screenshotAlt:
    "ClinicFlow360 en una tablet mostrando el odontograma del paciente durante la consulta",
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
  contextsTitle: "Una plataforma. Tres contextos.",
  contexts: [
    { device: "Móvil", text: "Seguimiento y operación cuando el doctor está en movimiento." },
    { device: "Tablet", text: "Herramienta clínica chairside durante la consulta." },
    { device: "Desktop", text: "Administración completa de la clínica." },
  ],
} as const

export const operationsCopy = {
  eyebrow: "Administración",
  heading: "Lo que pasa en el sillón llega a administración.",
  finance: {
    title: "De la cita al ingreso.",
    text: "Presupuestos, recibos y pagos ligados al paciente, con la caja del día y lo que falta por cobrar a la vista.",
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
  },
  campaigns: {
    title: "Comunícate con el paciente correcto, en el momento correcto.",
    text: "Recordatorios automáticos de cita por WhatsApp y campañas para los pacientes que tú definas con reglas.",
    flow: [
      { label: "Pacientes" },
      { label: "Segmentos" },
      { label: "Campaña" },
      { label: "WhatsApp" },
      { label: "Resultados" },
    ],
    segmentsTitle: "Segmenta con reglas como",
    segments: ["Sin visita reciente", "Sin cita futura", "Cumpleaños del mes", "Por doctor o servicio"],
    points: [
      "Recordatorios con botones para confirmar, reagendar o cancelar",
      "Tiempos de aviso configurables por clínica",
      "Campañas programadas o de envío inmediato",
      "Resultados por campaña",
    ],
  },
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
        { time: "07:12", event: "ClinicFlow AI consulta disponibilidad", detail: "Revisa la agenda real y ofrece horarios" },
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
  text: "Empieza con el software clínico completo. Suma inteligencia y automatización cuando la necesites.",
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
