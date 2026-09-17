export const siteConfig = {
  name: "ClinicFlow360",
  description:
    "Gestiona citas, pacientes, odontograma y doctores desde una sola plataforma. Automatiza WhatsApp y atiende pacientes 24/7 con ClinicFlow AI.",
  url: "https://clinicflow360.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.clinicflow360.com",
  loginUrl:
    process.env.NEXT_PUBLIC_LOGIN_URL ?? "https://app.clinicflow360.com/login",
  signupUrl: process.env.NEXT_PUBLIC_SIGNUP_URL ?? null,
  whatsappDemoUrl: null as string | null,
  locale: "es" as const,
} as const
