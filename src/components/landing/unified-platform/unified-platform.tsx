import { SectionReveal } from "../section-reveal"

const beforeItems = [
  { title: "Agenda en papel o Google Calendar aislado", detail: "Citas encimadas, cancelaciones sin previo aviso y huecos vacíos en horas pico." },
  { title: "WhatsApp en un único celular de recepción", detail: "Mensajes de pacientes acumulados por horas, fines de semana desatendidos." },
  { title: "Fotos clínicas perdidas en el teléfono de los doctores", detail: "Riesgo de privacidad y dificultad para mostrar avances reales a los pacientes." },
  { title: "Papeleo manual al final de una jornada agotadora", detail: "Doctores perdiendo 1 a 2 horas escribiendo notas de evolución manualmente." },
] as const

const afterItems = [
  { title: "Agenda inteligente que se auto-gestiona", detail: "Sincronizada por doctor, gabinete y duración de procedimiento en tiempo real." },
  { title: "Recepción IA activa 24 horas por WhatsApp oficial", detail: "Responde en 5 segundos, agenda citas directamente y envía recordatorios automáticos." },
  { title: "App para doctores con odontograma y fotos seguras", detail: "Captura fotos desde el gabinete y se asocian directo a la historia clínica del paciente." },
  { title: "Dictado por voz IA estructurado automáticamente", detail: "El doctor dicta el procedimiento en 20 segundos y la nota queda redactada y archivada." },
] as const

export function UnifiedPlatform() {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 sm:text-xs">
              Evolución Clínica
            </p>
            <h2 className="headline-section text-balance text-ink text-[26px] sm:text-[34px] lg:text-[40px]">
              Administrar una clínica no debería requerir cinco herramientas desconectadas.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          {/* BEFORE */}
          <SectionReveal>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-red-700">
                El modelo fragmentado tradicional
              </div>
              <ul className="space-y-5">
                {beforeItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-[11px] font-bold text-red-700">✕</div>
                    <div>
                      <h4 className="text-[14px] font-bold text-ink">{item.title}</h4>
                      <p className="mt-0.5 text-[12px] text-muted sm:text-[13px]">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* AFTER */}
          <SectionReveal>
            <div className="rounded-3xl border-2 border-brand-500 bg-brand-50/50 p-7 shadow-xl shadow-brand-500/10 sm:p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                Con ClinicFlow360
              </div>
              <ul className="space-y-5">
                {afterItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">✓</div>
                    <div>
                      <h4 className="text-[14px] font-bold text-ink">{item.title}</h4>
                      <p className="mt-0.5 text-[12px] text-slate-600 sm:text-[13px]">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
