import { Navbar } from "@/components/landing/navbar/navbar"
import { Hero } from "@/components/landing/hero/hero"
import { ProductShowcase } from "@/components/landing/product-showcase/product-showcase"
import { SocialProof } from "@/components/landing/social-proof/social-proof"
import { UnifiedPlatform } from "@/components/landing/unified-platform/unified-platform"
import { AIReceptionist } from "@/components/landing/ai-receptionist/ai-receptionist"
import { MobileApp } from "@/components/landing/mobile-app/mobile-app"

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

        {/* Before/After — Sprint 3 */}
        {/* Voice Notes — Sprint 3 */}
        {/* Patient Record — Sprint 3 */}
        {/* WhatsApp Automation — Sprint 4 */}
        {/* Day Timeline — Sprint 4 */}
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
