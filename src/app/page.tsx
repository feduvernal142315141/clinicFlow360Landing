import { Navbar } from "@/components/landing/navbar/navbar"
import { Hero } from "@/components/landing/hero/hero"
import { SocialProof } from "@/components/landing/social-proof/social-proof"
import { ProductShowcase } from "@/components/landing/product-showcase/product-showcase"
import { AIReceptionist } from "@/components/landing/ai-receptionist/ai-receptionist"
import { MobileApp } from "@/components/landing/mobile-app/mobile-app"
import { BeforeAfter } from "@/components/landing/before-after/before-after"
import { VoiceNotes } from "@/components/landing/voice-notes/voice-notes"
import { PatientRecord } from "@/components/landing/patient-record/patient-record"
import { WhatsAppAutomation } from "@/components/landing/whatsapp-automation/whatsapp-automation"
import { DayTimeline } from "@/components/landing/day-timeline/day-timeline"
import { Security } from "@/components/landing/security/security"
import { Pricing } from "@/components/landing/pricing/pricing"
import { Testimonials } from "@/components/landing/testimonials/testimonials"
import { FAQSection } from "@/components/landing/faq/faq-section"
import { FinalCTA } from "@/components/landing/final-cta/final-cta"
import { Footer } from "@/components/landing/footer/footer"
import {
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
} from "@/lib/seo/structured-data"

export default function LandingPage() {
  return (
    <>
      <OrganizationJsonLd />
      <SoftwareApplicationJsonLd />

      <Navbar />

      <main id="main-content">
        <Hero />
        <SocialProof />
        <ProductShowcase />
        <AIReceptionist />
        <MobileApp />
        <BeforeAfter />
        <VoiceNotes />
        <PatientRecord />
        <WhatsAppAutomation />
        <DayTimeline />
        <Security />
        <Pricing />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
