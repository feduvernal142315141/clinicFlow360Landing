import dynamic from "next/dynamic"
import { SectionReveal } from "../section-reveal"

const BeforeAfterSlider = dynamic(() =>
  import("./before-after-slider").then((m) => m.BeforeAfterSlider),
  {
    loading: () => (
      <div className="aspect-[4/3] w-full animate-pulse rounded-[20px] bg-surface-soft" />
    ),
  }
)

export function BeforeAfter() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <SectionReveal>
            <div>
              <h2
                className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.035em" }}
              >
                El progreso también se puede ver.
              </h2>
              <p className="text-pretty mt-5 text-lg leading-relaxed text-muted">
                Documenta la evolución del paciente desde el teléfono.
                Captura fotografías, organízalas en su expediente y compara
                el antes y el después en segundos.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Capturar foto", "Subir imagen", "Comparar", "Guardar"].map(
                  (action) => (
                    <span
                      key={action}
                      className="inline-flex items-center rounded-full border border-border-light bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-sm"
                    >
                      {action}
                    </span>
                  )
                )}
              </div>
            </div>
          </SectionReveal>

          {/* Slider */}
          <SectionReveal>
            <BeforeAfterSlider />
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
