const appointments = [
  { time: "08:00", name: "María Pérez", service: "Limpieza", duration: "45 min", status: "Completada", color: "bg-emerald-50 text-emerald-600", dot: "bg-emerald-400" },
  { time: "09:30", name: "Carlos Ruiz", service: "Endodoncia", duration: "90 min", status: "En curso", color: "bg-violet-50 text-violet-600", dot: "bg-violet-400" },
  { time: "10:30", name: "Sofía López", service: "Ortodoncia", duration: "45 min", status: "Confirmada", color: "bg-brand-50 text-brand-600", dot: "bg-brand-400" },
  { time: "14:00", name: "Ana Martínez", service: "Revisión", duration: "30 min", status: "Pendiente", color: "bg-amber-50 text-amber-600", dot: "bg-amber-400" },
  { time: "15:30", name: "Diego Torres", service: "Limpieza", duration: "45 min", status: "Pendiente", color: "bg-amber-50 text-amber-600", dot: "bg-amber-400" },
] as const

export function BrowserMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-[22px] bg-white"
      style={{
        border: "1px solid rgba(15,23,42,0.08)",
        boxShadow: "0 2px 4px rgba(15,23,42,0.04), 0 14px 40px rgba(15,23,42,0.08), 0 50px 120px rgba(3,126,204,0.10)",
        transform: "rotateX(1deg)",
        transformOrigin: "center bottom",
      }}
    >
      {/* Browser chrome */}
      <div className="flex h-[44px] items-center gap-2 border-b px-4" style={{ background: "#FBFCFE", borderColor: "#EEF2F6" }}>
        <div className="flex gap-1.5">
          <div className="h-[10px] w-[10px] rounded-full" style={{ background: "#CBD5E1" }} />
          <div className="h-[10px] w-[10px] rounded-full" style={{ background: "#CBD5E1" }} />
          <div className="h-[10px] w-[10px] rounded-full" style={{ background: "#CBD5E1" }} />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-white px-3 py-1.5 text-[12px] text-muted" style={{ border: "1px solid #EEF2F6" }}>
          app.clinicflow360.com/agenda
        </div>
      </div>

      {/* Dashboard content */}
      <div className="flex">
        {/* Sidebar hint */}
        <div className="hidden w-[180px] shrink-0 border-r border-r-[#EEF2F6] bg-[#FBFCFE] p-4 lg:block">
          <div className="space-y-1">
            {["Agenda", "Pacientes", "Doctores", "Clínica"].map((item, i) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 text-[12px] font-medium ${
                  i === 0
                    ? "bg-brand-50 text-brand-700"
                    : "text-muted hover:bg-surface-soft"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main area */}
        <div className="flex-1 p-5 sm:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Agenda del día</p>
              <p className="text-[18px] font-semibold text-ink">Miércoles 18 Sep</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-lg border border-[#EEF2F6] bg-white px-2.5 py-1.5 text-[12px] font-medium text-muted">
                <span className="h-5 w-5 rounded-full bg-brand-100 text-center text-[10px] font-bold leading-5 text-brand-700">VL</span>
                Dra. Valeria López
              </span>
            </div>
          </div>

          {/* Appointments */}
          <div className="space-y-1.5">
            {appointments.map((appt) => (
              <div
                key={appt.time}
                className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-[#EEF2F6] hover:bg-[#FBFCFE]"
              >
                <span className="w-[48px] text-[13px] font-semibold tabular-nums text-muted">{appt.time}</span>
                <span className={`h-2 w-2 shrink-0 rounded-full ${appt.dot}`} />
                <span className="flex-1 text-[13px] font-medium text-ink">{appt.name}</span>
                <span className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${appt.color}`}>
                  {appt.service}
                </span>
                {appt.duration && (
                  <span className="hidden text-[11px] text-muted-light sm:inline">{appt.duration}</span>
                )}
              </div>
            ))}
          </div>

          {/* Bottom stats hint */}
          <div className="mt-4 flex items-center gap-4 border-t border-[#EEF2F6] pt-4">
            <span className="text-[12px] text-muted">
              <strong className="font-semibold text-ink">5</strong> citas hoy
            </span>
            <span className="text-[12px] text-muted">
              <strong className="font-semibold text-emerald-600">1</strong> completada
            </span>
            <span className="text-[12px] text-muted">
              <strong className="font-semibold text-violet-600">1</strong> en curso
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
