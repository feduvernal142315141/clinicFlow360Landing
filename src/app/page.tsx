import { Navbar } from "@/components/landing/navbar/navbar"
import { Hero } from "@/components/landing/hero/hero"
import { SocialProof } from "@/components/landing/social-proof/social-proof"
import { ProductShowcase } from "@/components/landing/product-showcase/product-showcase"
import { UnifiedPlatform } from "@/components/landing/unified-platform/unified-platform"
import { AIReceptionist } from "@/components/landing/ai-receptionist/ai-receptionist"
import { MobileApp } from "@/components/landing/mobile-app/mobile-app"
import { VoiceNotes } from "@/components/landing/voice-notes/voice-notes"
import { DayTimeline } from "@/components/landing/day-timeline/day-timeline"
import { Security } from "@/components/landing/security/security"
import { Pricing } from "@/components/landing/pricing/pricing"
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
        <UnifiedPlatform />
        <AIReceptionist />
        <MobileApp />
        <VoiceNotes />
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
