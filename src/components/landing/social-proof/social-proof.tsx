import { SectionReveal } from "../section-reveal"

const keywords = [
  "Agenda",
  "Pacientes",
  "Odontograma",
  "WhatsApp",
  "App móvil",
] as const

export function SocialProof() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <p className="text-center text-[15px] text-muted">
            Diseñado para clínicas que quieren dedicar menos tiempo a administrar.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {keywords.map((kw, i) => (
              <span key={kw} className="flex items-center gap-2">
                <span className="text-[14px] font-medium text-ink/60">{kw}</span>
                {i < keywords.length - 1 && (
                  <span className="text-[14px] text-muted-light/50">·</span>
                )}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
