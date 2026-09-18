import { faqItems } from "@/data/faq"
import { SectionReveal } from "../section-reveal"
import { FAQAccordion } from "./faq-accordion"
import { FAQStructuredData } from "./faq-structured-data"

export function FAQSection() {
  return (
    <section id="faq" className="px-6 py-28 lg:py-36">
      <FAQStructuredData items={faqItems} />

      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">
          {/* Left — headline */}
          <SectionReveal>
            <div className="lg:sticky lg:top-32">
              <h2
                className="text-ink"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 680,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                }}
              >
                Preguntas frecuentes
              </h2>
              <p className="mt-3 max-w-[300px] text-[16px] leading-relaxed text-muted">
                Respuestas breves a lo que más nos preguntan.
              </p>
            </div>
          </SectionReveal>

          {/* Right — accordion */}
          <div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
