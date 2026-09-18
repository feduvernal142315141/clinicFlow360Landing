const appointments = [
  { time: "08:00", name: "María Pérez", service: "Limpieza", dot: "bg-emerald-400" },
  { time: "09:30", name: "Carlos Ruiz", service: "Endodoncia", dot: "bg-violet-400" },
  { time: "10:30", name: "Sofía López", service: "Ortodoncia", dot: "bg-brand-400" },
  { time: "14:00", name: "Ana Martínez", service: "Revisión", dot: "bg-amber-400" },
  { time: "15:30", name: "Diego Torres", service: "Limpieza", dot: "bg-amber-400" },
] as const

export function BrowserMockup() {
  return (
    <div className="browser-frame shadow-tier-3">
      {/* Chrome */}
      <div className="browser-chrome">
        <div className="flex gap-[5px]">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </div>
        <div className="browser-url">app.clinicflow360.com/agenda</div>
      </div>

      <div className="flex">
        {/* Sidebar — desktop only */}
        <div className="hidden w-[160px] shrink-0 border-r border-[#eef1f5] bg-[#f8f9fb] p-3 md:block lg:w-[180px]">
          <div className="space-y-0.5">
            {["Agenda", "Pacientes", "Doctores", "Clínica", "WhatsApp"].map((item, i) => (
              <div key={item} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] font-medium ${i === 0 ? "bg-brand-50 text-brand-700" : "text-muted"}`}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-3 sm:p-4 lg:p-5">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted sm:text-[11px]">Agenda del día</p>
              <p className="text-[14px] font-semibold text-ink sm:text-[16px]">Miércoles 18 Sep</p>
            </div>
            <span className="hidden items-center gap-1.5 rounded-lg border border-[#eef1f5] bg-white px-2 py-1 text-[11px] font-medium text-muted sm:flex">
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-100 text-[8px] font-bold text-brand-700">VL</span>
              Dra. Valeria
            </span>
          </div>

          <div className="space-y-[2px]">
            {appointments.map((a) => (
              <div key={a.time} className="flex items-center gap-2 rounded-lg px-2 py-[7px] transition-colors hover:bg-[#f8f9fb] sm:gap-3 sm:px-3 sm:py-2">
                <span className="w-[38px] text-[12px] font-semibold tabular-nums text-muted sm:w-[44px] sm:text-[13px]">{a.time}</span>
                <span className={`h-[6px] w-[6px] shrink-0 rounded-full ${a.dot}`} />
                <span className="flex-1 text-[12px] font-medium text-ink sm:text-[13px]">{a.name}</span>
                <span className="text-[10px] text-muted sm:text-[11px]">{a.service}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex gap-3 border-t border-[#eef1f5] pt-2">
            <span className="text-[11px] text-muted"><strong className="text-ink">5</strong> citas</span>
            <span className="text-[11px] text-emerald-600">1 completada</span>
            <span className="text-[11px] text-violet-600">1 en curso</span>
          </div>
        </div>
      </div>
    </div>
  )
}
