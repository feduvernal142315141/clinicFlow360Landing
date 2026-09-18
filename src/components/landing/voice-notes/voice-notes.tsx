import { SectionReveal } from "../section-reveal"
import { VoicePhoneMockup } from "./voice-phone-mockup"

export function VoiceNotes() {
  return (
    <section
      className="px-6 py-28 lg:py-36"
      style={{
        background: "linear-gradient(180deg, #F0F7FF 0%, #F8FAFC 100%)",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Copy — left */}
          <SectionReveal>
            <div>
              <p
                className="mb-4 text-[12px] font-semibold uppercase text-brand-600"
                style={{ letterSpacing: "0.08em" }}
              >
                ● Dictado clínico
              </p>
              <h2
                className="text-balance text-ink"
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 680,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                }}
              >
                Termina la consulta sin terminar haciendo papeleo.
              </h2>
              <p className="text-pretty mt-5 max-w-[480px] text-[17px] leading-relaxed text-muted">
                Dicta tus observaciones mientras finalizas la atención.
                ClinicFlow360 prepara la nota para que puedas revisarla
                y guardarla.
              </p>
              <div className="mt-6 flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  Escuchando
                </span>
                <span className="text-muted-light">→</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Procesando
                </span>
                <span className="text-muted-light">→</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Listo para revisar
                </span>
              </div>
            </div>
          </SectionReveal>

          {/* Phone — right */}
          <div className="flex justify-center lg:justify-end">
            <SectionReveal>
              <VoicePhoneMockup />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
