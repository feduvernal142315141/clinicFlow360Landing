import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SmoothScrollProvider } from "@/components/landing/smooth-scroll-provider"
import { siteConfig } from "@/lib/config"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${siteConfig.name} | Software para clínicas dentales con IA`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Software para clínicas dentales con IA`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software para clínicas dentales con IA`,
    description: siteConfig.description,
  },
  keywords: [
    "software dental",
    "software para clínicas dentales",
    "agenda odontológica",
    "odontograma digital",
    "gestión de pacientes",
    "recordatorios WhatsApp",
    "software odontológico",
    "recepcionista IA",
    "citas odontológicas",
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-10 focus:items-center focus:rounded-[10px] focus:bg-brand-600 focus:px-4 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          Ir al contenido principal
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
