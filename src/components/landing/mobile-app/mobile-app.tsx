import { SectionReveal } from "../section-reveal"

const features = [
  { icon: "📅", title: "Agenda del día en tiempo real", description: "Consulta las citas del día por sillón dental, pacientes confirmados y cambios de última hora al instante." },
  { icon: "📸", title: "Cámara clínica instantánea", description: "Toma fotografías intraorales o de sonrisa directamente desde la app. Se guardan encriptadas en el expediente del paciente." },
  { icon: "🎙️", title: "Dictado de evolución por voz", description: "Dicta la nota mientras te quitas los guantes. La IA procesa y archiva la evolución clínica con nomenclatura médica precisa." },
] as const

export function MobileApp() {
  return (
    <section id="app-movil" className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 sm:text-xs">
              Movilidad Total
            </p>
            <h2 className="headline-section text-balance text-[28px] sm:text-[36px] lg:text-[42px]">
              Tu clínica dental también cabe en tu bolsillo.
            </h2>
            <p className="mt-4 text-[15px] text-muted sm:text-base">
              Diseñada especialmente para el flujo del odontólogo en gabinete: rápida, clara y sin clics innecesarios.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((f) => (
            <SectionReveal key={f.title}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:shadow-lg sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-xl font-bold text-brand-700">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-[17px] font-bold text-ink sm:text-lg">{f.title}</h3>
                <p className="text-[13px] leading-relaxed text-muted sm:text-[14px]">{f.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
