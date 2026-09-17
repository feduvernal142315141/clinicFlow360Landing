const appointments = [
  { time: "08:00", name: "María Pérez", service: "Limpieza", color: "bg-brand-100 text-brand-700" },
  { time: "09:00", name: "Carlos Ruiz", service: "Endodoncia", color: "bg-amber-50 text-amber-700" },
  { time: "10:30", name: "Sofía López", service: "Ortodoncia", color: "bg-emerald-50 text-emerald-700" },
  { time: "11:30", name: "Ana Martínez", service: "Revisión", color: "bg-violet-50 text-violet-700" },
] as const

export function BrowserMockup() {
  return (
    <div className="surface-elevated-strong w-full overflow-hidden rounded-[20px] bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border-light bg-surface-soft px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
          <div className="h-3 w-3 rounded-full bg-green-400/60" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-surface px-3 py-1 text-xs text-muted">
          app.clinicflow360.com/agenda
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-5">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">Agenda del día</p>
            <p className="text-lg font-semibold text-ink">Hoy</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 items-center rounded-md bg-surface-soft px-2.5 text-xs font-medium text-muted">
              Dra. Valeria López
            </span>
          </div>
        </div>

        {/* Appointments */}
        <div className="space-y-2">
          {appointments.map((appt) => (
            <div
              key={appt.time}
              className="flex items-center gap-3 rounded-[10px] border border-border-light px-3 py-2.5 transition-colors hover:bg-surface-soft"
            >
              <span className="w-12 text-sm font-medium tabular-nums text-muted">
                {appt.time}
              </span>
              <span className="flex-1 text-sm font-medium text-ink">
                {appt.name}
              </span>
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-medium ${appt.color}`}
              >
                {appt.service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
