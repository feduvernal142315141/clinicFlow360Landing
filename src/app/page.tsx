import type { Metadata } from "next"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Hero } from "@/components/landing/hero/hero"
import { Ecosystem } from "@/components/landing/ecosystem/ecosystem"
import { UnifiedPlatform } from "@/components/landing/unified-platform/unified-platform"
import { AIReceptionist } from "@/components/landing/ai-receptionist/ai-receptionist"
import { VoiceSection } from "@/components/landing/voice/voice-section"
import { Chairside } from "@/components/landing/chairside/chairside"
import { ClinicFlowRX } from "@/components/landing/rx/clinicflow-rx"
import { ProductShowcase } from "@/components/landing/product-showcase/product-showcase"
import { MobileApp } from "@/components/landing/mobile-app/mobile-app"
import { Operations } from "@/components/landing/operations/operations"
import { Growth } from "@/components/landing/growth/growth"
import { DayTimeline } from "@/components/landing/day-timeline/day-timeline"
import { Security } from "@/components/landing/security/security"
import { Pricing } from "@/components/landing/pricing/pricing"
import { FAQSection } from "@/components/landing/faq/faq-section"
import { FinalCTA } from "@/components/landing/final-cta/final-cta"
import { Footer } from "@/components/landing/footer/footer"
import { SiteJsonLd } from "@/lib/seo/structured-data"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function LandingPage() {
  return (
    <>
      <SiteJsonLd />

      <Navbar />

      <main id="main-content">
        <Hero />
        <Ecosystem />
        <UnifiedPlatform />
        <AIReceptionist />
        <VoiceSection />
        <Chairside />
        <ClinicFlowRX />
        <ProductShowcase />
        <MobileApp />
        <Operations />
        <Growth />
        <DayTimeline />
        <Security />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
