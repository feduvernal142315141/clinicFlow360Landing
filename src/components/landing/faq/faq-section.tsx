import { faqItems } from "@/data/faq"
import { SectionReveal } from "../section-reveal"
import { FAQAccordion } from "./faq-accordion"
import { FAQStructuredData } from "./faq-structured-data"

export function FAQSection() {
  return (
    <section id="faq" className="px-6 py-24 lg:py-32">
      <FAQStructuredData items={faqItems} />

      <div className="mx-auto max-w-[800px]">
        <SectionReveal>
          <div className="text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-lg text-muted">
              Respuestas breves a lo que más nos preguntan.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}
