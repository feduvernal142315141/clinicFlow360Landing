import { SectionReveal } from "../section-reveal"
import { PatientRecordMockup } from "./patient-record-mockup"

export function PatientRecord() {
  return (
    <section className="px-6 py-28 lg:py-36" style={{ background: "#F8FAFC" }}>
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[850px] text-center">
            <p
              className="mb-4 text-[12px] font-semibold uppercase text-brand-600"
              style={{ letterSpacing: "0.08em" }}
            >
              ● Experiencia clínica
            </p>
            <h2
              className="text-balance text-ink"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 680,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Todo el contexto del paciente, antes de empezar a atender.
            </h2>
            <p className="text-pretty mx-auto mt-5 max-w-[650px] text-[18px] leading-relaxed text-muted">
              Historia clínica, notas, odontograma, imágenes y evolución
              reunidos en un solo expediente.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-14">
          <PatientRecordMockup />
        </SectionReveal>

        {/* Callout line — not cards */}
        <SectionReveal>
          <div className="mx-auto mt-10 flex max-w-[700px] flex-wrap items-center justify-center gap-6 text-[14px]">
            {["Historial completo", "Imágenes organizadas", "Tratamientos por pieza"].map((c, i) => (
              <span key={c} className="flex items-center gap-2">
                {i > 0 && <span className="hidden text-muted-light sm:inline">·</span>}
                <span className="h-1 w-1 rounded-full bg-brand-400" />
                <span className="font-medium text-ink">{c}</span>
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
