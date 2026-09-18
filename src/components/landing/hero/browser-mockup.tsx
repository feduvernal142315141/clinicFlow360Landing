const appointments = [
  { time: "08:00", name: "María Pérez", detail: "Limpieza dental profiláctica · Dra. Valeria", status: "Completada", statusClass: "bg-slate-100 text-slate-600", dot: "bg-emerald-500", active: false },
  { time: "09:30", name: "Carlos Ruiz", detail: "Endodoncia pieza #16 · Gabinete 2", status: "En curso", statusClass: "bg-brand-100 text-brand-800", dot: "bg-brand-600", active: true },
  { time: "10:30", name: "Sofía López", detail: "Ortodoncia ajuste mensual", status: "En espera", statusClass: "bg-amber-50 text-amber-700", dot: "bg-purple-500", active: false },
  { time: "14:00", name: "Ana Martínez", detail: "Valoración implante · Confirmado vía WhatsApp", status: "Confirmada", statusClass: "bg-slate-100 text-slate-600", dot: "bg-amber-500", active: false },
  { time: "15:30", name: "Diego Torres", detail: "Revisión ortodoncia invisible", status: "Confirmada", statusClass: "bg-slate-100 text-slate-600", dot: "bg-slate-400", active: false },
] as const

const specialtyBadges = [
  { label: "🦷 Odontología General", className: "bg-brand-50 text-brand-700 border-brand-100" },
  { label: "✨ Ortodoncia", className: "bg-purple-50 text-purple-700 border-purple-100" },
  { label: "🔩 Implantes", className: "bg-amber-50 text-amber-700 border-amber-100" },
] as const

export function BrowserMockup() {
  return (
    <div className="browser-frame shadow-tier-3 overflow-hidden">
      {/* Chrome */}
      <div className="browser-chrome">
        <div className="flex gap-[5px]">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </div>
        <div className="browser-url font-mono">app.clinicflow360.com/agenda</div>
        <div className="w-10" />
      </div>

      <div className="flex min-h-[380px] sm:min-h-[440px]">
        {/* Sidebar — hidden on smallest screens */}
        <div className="hidden w-[150px] shrink-0 border-r border-[#eef1f5] bg-[#f8f9fb] p-3 sm:block lg:w-[170px]">
          <div className="mb-3 text-[9px] font-semibold uppercase tracking-wider text-muted-light">Navegación</div>
          <div className="space-y-0.5">
            {[
              { icon: "📅", label: "Agenda", active: true },
              { icon: "👤", label: "Pacientes", active: false },
              { icon: "🦷", label: "Odontograma", active: false },
              { icon: "🏥", label: "Clínica", active: false },
            ].map((item) => (
              <div key={item.label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] font-medium ${item.active ? "bg-brand-50 text-brand-700 font-semibold" : "text-muted"}`}>
                <span className="text-[11px]">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-4 sm:p-5 lg:p-6">
          {/* Header with specialty badges */}
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-1 hidden items-center gap-1.5 text-[10px] font-semibold text-muted lg:flex">
                {specialtyBadges.map((b) => (
                  <span key={b.label} className={`rounded border px-2 py-0.5 ${b.className}`}>{b.label}</span>
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-light">Agenda del día</span>
              <h3 className="text-[16px] font-bold text-ink sm:text-[18px]">Miércoles 18 Sep</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-muted">5 citas</span>
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">1 completada</span>
              <span className="hidden rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700 sm:inline-flex">1 en curso</span>
            </div>
          </div>

          {/* Appointments — dental detail */}
          <div className="divide-y divide-slate-100">
            {appointments.map((a) => (
              <div key={a.time} className={`flex items-center justify-between py-3 ${a.active ? "-mx-2 rounded-lg bg-sky-50/50 px-2" : ""}`}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className={`w-[42px] text-[13px] font-semibold tabular-nums ${a.active ? "text-brand-700" : "text-muted"}`}>{a.time}</span>
                  <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${a.dot} ${a.active ? "animate-pulse" : ""}`} />
                  <div>
                    <div className="text-[13px] font-bold text-ink">{a.name}</div>
                    <div className="hidden text-[11px] text-muted sm:block">{a.detail}</div>
                  </div>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${a.statusClass} ${a.active ? "font-semibold" : ""}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
