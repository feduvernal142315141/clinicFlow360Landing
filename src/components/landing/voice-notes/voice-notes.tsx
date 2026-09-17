import { SectionReveal } from "../section-reveal"
import { VoicePhoneMockup } from "./voice-phone-mockup"

export function VoiceNotes() {
  return (
    <section className="bg-surface-soft px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Phone mockup */}
          <div className="flex justify-center lg:order-1">
            <SectionReveal>
              <VoicePhoneMockup />
            </SectionReveal>
          </div>

          {/* Copy */}
          <SectionReveal className="lg:order-2">
            <div>
              <h2
                className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.035em" }}
              >
                Termina la consulta sin terminar haciendo papeleo.
              </h2>
              <p className="text-pretty mt-5 text-lg leading-relaxed text-muted">
                Dicta la nota clínica mientras termina la atención.
                ClinicFlow360 convierte tu voz en una nota lista para
                revisar y guardar en el expediente.
              </p>
              <p className="mt-4 text-sm text-muted-light">
                El doctor siempre puede revisar antes de guardar.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
