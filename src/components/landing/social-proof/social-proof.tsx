import { SectionReveal } from "../section-reveal"

export function SocialProof() {
  return (
    <section className="border-y border-border-light bg-surface-soft px-6 py-12">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="text-center text-sm font-medium tracking-wide text-muted">
            Diseñado junto a profesionales de la salud dental
          </p>
          {/* Logos and metrics will be added when real data exists — PEND-08, PEND-09 */}
        </SectionReveal>
      </div>
    </section>
  )
}
