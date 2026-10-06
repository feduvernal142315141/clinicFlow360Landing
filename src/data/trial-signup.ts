export const trialSignupCopy = {
  metaTitle: "Prueba gratis de 14 días",
  metaDescription:
    "Crea tu clínica en ClinicFlow360 y pruébala gratis durante 14 días. Solo necesitas tu correo y el nombre de tu clínica.",
  eyebrow: "Prueba gratis de 14 días",
  heading: "Empieza a usar ClinicFlow360 hoy",
  intro:
    "Completa el formulario y te enviaremos un correo para crear tu contraseña y entrar a tu clínica.",
  highlights: [
    "Sin tarjeta de crédito",
    "Solo tu correo y el nombre de tu clínica",
    "Sin compromisos de permanencia",
  ],
  steps: [
    "Llenas este formulario.",
    "Recibes un correo con un enlace, válido por 15 minutos.",
    "Creas tu contraseña y entras a tu clínica.",
  ],
  stepsTitle: "Cómo funciona",
  fields: {
    clinicName: { label: "Nombre de la clínica", placeholder: "Clínica Dental Sonrisa" },
    fullName: { label: "Tu nombre completo", placeholder: "Ana Pérez" },
    email: { label: "Correo electrónico", placeholder: "ana@tuclinica.com" },
  },
  terms: {
    prefix: "Acepto las",
    termsLabel: "Condiciones del Servicio",
    connector: "y la",
    privacyLabel: "Política de Privacidad",
  },
  submit: "Crear mi clínica de prueba",
  submitting: "Creando tu clínica…",
  successTitle: "Revisa tu correo",
  successFallback:
    "Te enviamos un enlace para crear tu contraseña y entrar a tu clínica.",
  successHint:
    "El enlace vence en 15 minutos. Si no lo ves, revisa tu carpeta de spam.",
  errors: {
    clinicName: "El nombre de la clínica debe tener entre 2 y 120 caracteres.",
    fullName: "Tu nombre debe tener entre 2 y 120 caracteres.",
    unsafeText: "Los nombres no pueden contener los símbolos < o >.",
    email: "Escribe un correo válido.",
    terms: "Debes aceptar las condiciones y la política de privacidad.",
    captcha: "Completa la verificación anti-robots e inténtalo de nuevo.",
    rateLimited: "Demasiadas solicitudes. Inténtalo de nuevo en unos minutos.",
    unavailable:
      "No pudimos procesar tu registro en este momento. Inténtalo más tarde.",
  },
} as const
