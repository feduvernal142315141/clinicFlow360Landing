import { SectionReveal } from "../section-reveal"

export function VoiceNotes() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Copy */}
            <SectionReveal>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-700">
                  Dictado Inteligente Clínico
                </div>
                <h2 className="headline-section text-balance text-[26px] sm:text-[32px] lg:text-[38px]">
                  Termina la consulta sin terminar haciendo papeleo.
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                  En lugar de escribir en el teclado durante 15 minutos entre pacientes, mantén pulsado el botón y habla con total naturalidad:
                </p>
                {/* Dental dictation example */}
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-100 p-4 text-[13px] italic text-slate-800 sm:text-[14px]">
                  &ldquo;Realizamos resina compuesta mesio-oclusal en pieza 36, grabado ácido por 15 segundos, adhesivo universal y fotocurado. Se indica no masticar sólidos por 2 horas.&rdquo;
                </div>
                <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Clasificado automáticamente en Odontograma y Evolución
                </div>
              </div>
            </SectionReveal>

            {/* Voice simulator */}
            <SectionReveal>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                {/* Recording bar */}
                <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 animate-ping rounded-full bg-red-500" />
                    <span className="text-[12px] font-bold text-slate-700">Grabando dictado</span>
                  </div>
                  <div className="flex h-5 items-center gap-1">
                    {[3, 5, 2, 4, 5, 2].map((h, i) => (
                      <span key={i} className="w-1 rounded-full bg-brand-600" style={{ height: h * 4 }} />
                    ))}
                  </div>
                  <span className="font-mono text-[12px] text-muted">00:18</span>
                </div>

                {/* Generated note */}
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-light">Nota generada por ClinicFlow AI</div>
                  <div className="space-y-2 text-[12px] text-slate-700 sm:text-[13px]">
                    <div className="rounded bg-slate-50 p-2"><strong className="text-ink">Procedimiento:</strong> Restauración con resina compuesta (MO)</div>
                    <div className="rounded bg-slate-50 p-2"><strong className="text-ink">Pieza dental:</strong> #36 (Primer molar inferior izquierdo)</div>
                    <div className="rounded bg-slate-50 p-2"><strong className="text-ink">Detalles:</strong> Grabado 15s, adhesivo universal, fotocurado. Sin incidencias.</div>
                    <div className="rounded bg-slate-50 p-2"><strong className="text-ink">Indicaciones:</strong> Régimen blando por 2 horas.</div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="w-full rounded-lg bg-brand-600 py-2 text-[12px] font-bold text-white hover:bg-brand-700">Autorizar y Firmar</button>
                    <button className="rounded-lg border border-slate-200 px-3 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50">Editar</button>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
