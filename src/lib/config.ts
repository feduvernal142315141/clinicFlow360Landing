export const siteConfig = {
  name: "ClinicFlow360",
  title: "ClinicFlow360 | Software para clínicas dentales con IA",
  description:
    "Software para clínicas dentales: agenda, pacientes, odontograma por voz, finanzas y una recepcionista IA 24/7 por WhatsApp, con reactivación de pacientes y seguimiento de nuevas oportunidades.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinicflow360.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.clinicflow360.com",
  loginUrl:
    process.env.NEXT_PUBLIC_LOGIN_URL ?? "https://app.clinicflow360.com/login",
  signupUrl: process.env.NEXT_PUBLIC_SIGNUP_URL ?? null,
  trialSignupPath: "/prueba-gratis",
  // Server-only: base URL of the clinic backend that creates trial clinics.
  apiUrl: process.env.CLINIC_API_URL ?? null,
  // Version of /terms shown to the person signing up (its "last updated" date).
  termsVersion: "2026-09-25",
  // Captcha is optional: the widget only renders when a site key is configured.
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? null,
  turnstileScriptUrl:
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
  whatsappDemoUrl: null as string | null,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "soporte@clinicflow360.com",
  // Company that develops and operates the product (see footer and legal pages).
  publisher: "KodeWave Solutions",
  themeColor: "#060d1a",
  locale: "es" as const,
} as const
