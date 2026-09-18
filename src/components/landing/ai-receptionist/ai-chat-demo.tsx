/**
 * WhatsApp AI simulator — dental emergency scenario at night.
 * Shows the AI responding instantly to urgent dental pain at 11:24 PM Sunday.
 */
export function AIChatDemo() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-2xl sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">CF</div>
          <div>
            <div className="flex items-center gap-2 text-[13px] font-bold text-white sm:text-[14px]">
              WhatsApp Clínica Dental
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="text-[11px] text-emerald-400">En línea · ClinicFlow AI 24/7</div>
          </div>
        </div>
        <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] text-slate-400">Automático</span>
      </div>

      {/* Chat */}
      <div className="space-y-4 py-5 text-[12px] sm:text-[13px]">
        <div className="text-center text-[10px] text-slate-500">HOY DOMINGO · 11:24 PM</div>

        {/* Patient — urgent */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-[#005C4B] p-3 text-white shadow-md">
            Hola buenas noches, tengo un dolor insoportable en una muela y se me inflamó la encía. ¿Tienen cita para mañana a primera hora?
            <div className="mt-1 text-right text-[9px] text-emerald-200">11:24 PM ✓✓</div>
          </div>
        </div>

        {/* AI — instant response */}
        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-2xl rounded-tl-none border border-slate-700 bg-slate-800 p-3.5 text-slate-200">
            <p>Buenas noches. Lamento mucho el dolor 😔 Hemos registrado tu caso como prioridad de urgencia dental.</p>
            <p className="mt-2">
              El Dr. Roberto tiene un espacio para valoración de emergencia mañana lunes a las{" "}
              <strong className="text-white">08:30 AM</strong> o a las{" "}
              <strong className="text-white">09:15 AM</strong>. ¿Cuál te conviene?
            </p>
            <div className="mt-1 text-right text-[9px] text-slate-400">11:24 PM (Respondido en 4s)</div>
          </div>
        </div>

        {/* Patient selects */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-[#005C4B] p-3 text-white">
            A las 8:30 AM por favor, muchas gracias por responder tan rápido.
            <div className="mt-1 text-right text-[9px] text-emerald-200">11:25 PM ✓✓</div>
          </div>
        </div>

        {/* AI — confirmation card */}
        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-2xl rounded-tl-none border border-slate-700 bg-slate-800 p-3.5 text-slate-200">
            <p className="font-bold text-white">✅ Cita Confirmada:</p>
            <ul className="mt-1.5 space-y-0.5 text-[12px] text-slate-300">
              <li>• <strong>Doctor:</strong> Dr. Roberto Sánchez</li>
              <li>• <strong>Horario:</strong> Lunes 8:30 AM</li>
              <li>• <strong>Motivo:</strong> Dolor dental urgente</li>
            </ul>
            <p className="mt-2 rounded-lg border border-brand-800/60 bg-brand-950/60 p-2 text-[11px] text-brand-300">
              Indicación preventiva: Evita masticar sobre esa zona y no apliques calor directo. Te esperamos en Calle Médica 204.
            </p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-[12px] text-slate-500">
        <span>Escribe un mensaje...</span>
        <span className="rounded bg-slate-800 px-2 py-1 text-slate-400">Presiona enter</span>
      </div>
    </div>
  )
}
