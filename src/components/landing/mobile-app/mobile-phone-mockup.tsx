import { Camera, Mic, Bell } from "lucide-react"

const appointments = [
  { time: "08:00", name: "María Pérez", service: "Limpieza", active: false },
  { time: "09:30", name: "Carlos Ruiz", service: "Endodoncia", active: false },
  { time: "10:30", name: "Sofía López", service: "Ortodoncia", active: true },
  { time: "14:00", name: "Ana Martínez", service: "Revisión", active: false },
] as const

export function MobilePhoneMockup() {
  return (
    <div className="surface-elevated-strong w-[260px] overflow-hidden rounded-[36px] bg-white sm:w-[280px]">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-surface-soft px-5 py-2.5">
        <span className="text-[11px] font-semibold text-ink">9:41</span>
        <div className="h-6 w-20 rounded-full bg-ink" />
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="h-2 w-1 rounded-sm bg-muted" />
            <div className="h-2.5 w-1 rounded-sm bg-muted" />
            <div className="h-3 w-1 rounded-sm bg-muted" />
            <div className="h-3.5 w-1 rounded-sm bg-ink" />
          </div>
        </div>
      </div>

      {/* App content */}
      <div className="p-5">
        {/* Greeting */}
        <p className="text-xs text-muted">Buenos días,</p>
        <p className="text-base font-bold text-ink">Dra. Valeria López</p>

        {/* Quick actions */}
        <div className="mt-4 flex gap-2">
          <button className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-brand-50 text-xs font-medium text-brand-700">
            <Camera className="h-3.5 w-3.5" />
            Foto
          </button>
          <button className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-accent/10 text-xs font-medium text-accent-dark">
            <Mic className="h-3.5 w-3.5" />
            Dictar
          </button>
        </div>

        {/* Agenda */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Agenda del día
            </p>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500">
              <Bell className="h-3 w-3 text-white" />
            </span>
          </div>

          <div className="space-y-2">
            {appointments.map((appt) => (
              <div
                key={appt.time}
                className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2 ${
                  appt.active
                    ? "border border-brand-200 bg-brand-50"
                    : "bg-surface-soft"
                }`}
              >
                <span
                  className={`text-xs font-semibold tabular-nums ${
                    appt.active ? "text-brand-600" : "text-muted"
                  }`}
                >
                  {appt.time}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-medium text-ink">{appt.name}</p>
                  <p className="text-[10px] text-muted">{appt.service}</p>
                </div>
                {appt.active && (
                  <span className="rounded-md bg-brand-600 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                    AHORA
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-border-light bg-white px-4 py-3">
        {["Agenda", "Pacientes", "Perfil"].map((tab, i) => (
          <span
            key={tab}
            className={`text-[10px] font-medium ${
              i === 0 ? "text-brand-600" : "text-muted-light"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  )
}
