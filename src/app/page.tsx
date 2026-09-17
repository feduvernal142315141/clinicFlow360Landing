import { Navbar } from "@/components/landing/navbar/navbar"
import { Hero } from "@/components/landing/hero/hero"
import { ProductShowcase } from "@/components/landing/product-showcase/product-showcase"
import { SocialProof } from "@/components/landing/social-proof/social-proof"
import { UnifiedPlatform } from "@/components/landing/unified-platform/unified-platform"
import { AIReceptionist } from "@/components/landing/ai-receptionist/ai-receptionist"
import { MobileApp } from "@/components/landing/mobile-app/mobile-app"
import { BeforeAfter } from "@/components/landing/before-after/before-after"
import { VoiceNotes } from "@/components/landing/voice-notes/voice-notes"
import { PatientRecord } from "@/components/landing/patient-record/patient-record"
import { WhatsAppAutomation } from "@/components/landing/whatsapp-automation/whatsapp-automation"
import { DayTimeline } from "@/components/landing/day-timeline/day-timeline"

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductShowcase />
        <SocialProof />
        <UnifiedPlatform />
        <AIReceptionist />
        <MobileApp />
        <BeforeAfter />
        <VoiceNotes />
        <PatientRecord />
        <WhatsAppAutomation />
        <DayTimeline />

        {/* Security — Sprint 5 */}
        {/* Pricing — Sprint 5 */}
        {/* Testimonials — Sprint 5 */}
        {/* FAQ — Sprint 5 */}
        {/* Final CTA — Sprint 5 */}
      </main>

      <footer>
        {/* Footer — Sprint 5 */}
      </footer>
    </>
  )
}
