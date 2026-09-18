import dynamic from "next/dynamic"
import { SectionReveal } from "../section-reveal"

const BeforeAfterSlider = dynamic(() =>
  import("./before-after-slider").then((m) => m.BeforeAfterSlider),
  {
    loading: () => (
      <div className="mx-auto aspect-[16/10] w-full max-w-[1100px] animate-pulse rounded-[28px] bg-surface-soft" />
    ),
  }
)

export function BeforeAfter() {
  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[850px] text-center">
            <h2
              className="text-balance text-ink"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 680,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              El progreso también se puede ver.
            </h2>
            <p className="text-pretty mx-auto mt-5 max-w-[650px] text-[18px] leading-relaxed text-muted">
              Documenta la evolución del paciente y compara fotografías desde
              el mismo expediente.
            </p>
          </div>
        </SectionReveal>

        {/* Large slider */}
        <div className="mt-14">
          <BeforeAfterSlider />
        </div>

        {/* Step line */}
        <SectionReveal>
          <div className="mx-auto mt-12 flex max-w-[700px] items-center justify-center gap-3 text-[14px] text-muted">
            <span className="font-medium text-ink">Captura desde la app</span>
            <span className="text-muted-light">→</span>
            <span className="font-medium text-ink">Se guarda en expediente</span>
            <span className="text-muted-light">→</span>
            <span className="font-medium text-ink">Compara evolución</span>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
