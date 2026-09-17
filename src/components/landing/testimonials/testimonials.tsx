import { SectionReveal } from "../section-reveal"

/**
 * Testimonials section — placeholder until real testimonials exist (PEND-07).
 * No invented quotes, clients, or metrics.
 */
export function Testimonials() {
  return (
    <section className="bg-surface-soft px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">
              Testimonios
            </p>
            <h2
              className="text-balance mt-3 text-3xl font-bold text-ink sm:text-4xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Lo que dicen quienes ya lo usan.
            </h2>
            <p className="mt-6 rounded-[16px] border border-border-light bg-white p-8 text-lg italic leading-relaxed text-muted">
              Estamos trabajando con clínicas pioneras para perfeccionar la
              plataforma. Pronto compartiremos sus experiencias aquí.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
