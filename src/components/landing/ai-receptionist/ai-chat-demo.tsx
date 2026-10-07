import { receptionistCopy } from "@/data/home"

/**
 * WhatsApp conversation with ClinicFlow AI outside reception hours:
 * the patient asks, the agent offers real slots and creates the appointment.
 */
export function AIChatDemo() {
  const { chat } = receptionistCopy

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-4 shadow-2xl sm:p-6">
      <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">CF</div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[13px] font-bold text-white sm:text-[14px]">
              {chat.title}
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            </div>
            <div className="truncate text-[11px] text-emerald-400">{chat.status}</div>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-slate-800 px-2.5 py-1 text-[10px] text-slate-400">{chat.tag}</span>
      </div>

      <div className="space-y-3 py-4 text-[13px] sm:space-y-4 sm:py-5">
        <div className="text-center text-[10px] text-slate-500">{chat.timestamp}</div>

        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-[#005C4B] p-3 text-white shadow-md">{chat.patientFirst}</div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-2xl rounded-tl-none border border-slate-700 bg-slate-800 p-3 text-slate-200">{chat.aiFirst}</div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-[#005C4B] p-3 text-white">{chat.patientSecond}</div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-2xl rounded-tl-none border border-slate-700 bg-slate-800 p-3.5 text-slate-200">
            <p className="font-bold text-white">✅ {chat.confirmationTitle}</p>
            <dl className="mt-1.5 space-y-0.5 text-[12px] text-slate-300">
              {chat.confirmationRows.map((row) => (
                <div key={row.label} className="flex gap-1.5">
                  <dt className="font-bold">{row.label}:</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 rounded-lg border border-brand-800/60 bg-brand-950/60 p-2 text-[11px] text-brand-300">
              {chat.confirmationNote}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 text-[12px] text-slate-500" aria-hidden="true">
        {chat.inputPlaceholder}
      </div>
    </div>
  )
}
