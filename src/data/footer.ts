import { siteConfig } from "@/lib/config"
import { featurePages, featurePath } from "./feature-pages"

export type FooterLink = { label: string; href: string; external?: boolean }
export type FooterColumn = { title: string; links: FooterLink[] }

export const footerCopy = {
  tagline:
    "La plataforma inteligente para clínicas dentales: recepción, agenda, odontograma, imágenes y administración en un solo flujo.",
  trial: {
    badge: "14 días gratis — sin tarjeta",
    cta: "Empezar prueba gratis",
    login: "Iniciar sesión",
  },
  contactLabel: "Escríbenos",
  navLabel: "Enlaces del sitio",
  legalLabel: "Enlaces legales",
  rights: "Todos los derechos reservados.",
  operatedBy: `${siteConfig.name} es una plataforma SaaS desarrollada y operada por ${siteConfig.publisher}.`,
  backToTop: "Volver arriba",
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Producto",
    links: [
      ...featurePages.map((page) => ({ label: page.name, href: featurePath(page.slug) })),
      { label: "Todas las funciones", href: "/funciones" },
    ],
  },
  {
    title: "Plataforma",
    links: [
      { label: "Ecosistema", href: "/#ecosistema" },
      { label: "Chairside en tablet", href: "/#chairside" },
      { label: "Finanzas", href: "/#finanzas" },
      { label: "ClinicFlow Growth", href: "/#growth" },
      { label: "Un día en tu clínica", href: "/#un-dia" },
      { label: "Seguridad", href: "/#seguridad" },
    ],
  },
  {
    title: "Empezar",
    links: [
      { label: "Precios", href: "/#precios" },
      { label: "Prueba gratis de 14 días", href: siteConfig.trialSignupPath },
      { label: "Preguntas frecuentes", href: "/#faq" },
      { label: "Iniciar sesión", href: siteConfig.loginUrl, external: true },
    ],
  },
]

export const footerLegalLinks: FooterLink[] = [
  { label: "Política de Privacidad", href: "/privacy" },
  { label: "Condiciones del Servicio", href: "/terms" },
  { label: "Eliminación de Datos", href: "/data-deletion" },
]
