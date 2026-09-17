import { SectionReveal } from "../section-reveal"
import { PatientRecordMockup } from "./patient-record-mockup"

export function PatientRecord() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Todo el contexto del paciente, antes de empezar a atender.
            </h2>
            <p className="text-pretty mt-4 text-lg text-muted">
              Historia clínica, notas, odontograma, imágenes y evolución
              reunidos en un solo expediente.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-12 lg:mt-16">
          <PatientRecordMockup />
        </SectionReveal>
      </div>
    </section>
  )
}
