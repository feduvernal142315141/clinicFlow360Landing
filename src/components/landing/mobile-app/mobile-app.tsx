import { mobileChips } from "@/data/features"
import { SectionReveal } from "../section-reveal"
import { MobilePhoneMockup } from "./mobile-phone-mockup"

export function MobileApp() {
  return (
    <section id="app-movil" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Phone mockup */}
          <div className="flex justify-center lg:order-2">
            <SectionReveal>
              <MobilePhoneMockup />
            </SectionReveal>
          </div>

          {/* Copy */}
          <SectionReveal className="lg:order-1">
            <div>
              <h2
                className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.035em" }}
              >
                Tu clínica también cabe en tu bolsillo.
              </h2>
              <p className="text-pretty mt-5 text-lg leading-relaxed text-muted">
                Consulta tu agenda, revisa pacientes, documenta tratamientos
                y completa notas clínicas sin depender de una computadora.
              </p>

              {/* Feature chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {mobileChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-border-light bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
