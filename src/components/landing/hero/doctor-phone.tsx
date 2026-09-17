import { Bell } from "lucide-react"

export function DoctorPhone() {
  return (
    <div className="surface-elevated w-[180px] overflow-hidden rounded-[24px] bg-white sm:w-[200px]">
      {/* Phone status bar */}
      <div className="flex items-center justify-between bg-surface-soft px-4 py-2">
        <span className="text-[10px] font-medium text-muted">9:41</span>
        <div className="h-5 w-16 rounded-full bg-ink" />
        <div className="flex gap-0.5">
          <div className="h-2 w-1 rounded-sm bg-muted" />
          <div className="h-2.5 w-1 rounded-sm bg-muted" />
          <div className="h-3 w-1 rounded-sm bg-muted" />
          <div className="h-3.5 w-1 rounded-sm bg-ink" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted">Buenos días,</p>
        <p className="text-sm font-semibold text-ink">Dra. Valeria</p>

        <div className="mt-4 space-y-3">
          {/* Next appointment */}
          <div className="rounded-[10px] bg-brand-50 p-3">
            <p className="text-[10px] font-medium uppercase tracking-wide text-brand-600">
              Próxima cita
            </p>
            <p className="mt-1 text-lg font-bold text-brand-700">10:30 AM</p>
            <p className="text-xs font-medium text-ink">Sofía López</p>
            <p className="text-[11px] text-muted">Ortodoncia</p>
          </div>

          {/* Push notification */}
          <div className="flex items-start gap-2 rounded-[10px] border border-border-light p-2.5">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
              <Bell className="h-3 w-3 text-brand-600" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-ink">
                Nueva cita agendada
              </p>
              <p className="text-[10px] text-muted">
                María Pérez · 3:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
