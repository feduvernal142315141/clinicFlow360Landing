import { Bell } from "lucide-react"

export function DoctorPhone() {
  return (
    <div className="phone-frame shadow-phone w-[180px] sm:w-[220px] lg:w-[260px]">
      <div className="phone-screen">
        {/* Notch */}
        <div className="phone-notch">
          <span className="text-[9px] font-semibold text-ink">9:41</span>
          <div className="phone-dynamic-island" />
          <div className="flex gap-px">
            <div className="h-[6px] w-[2px] rounded-sm bg-muted-light" />
            <div className="h-[8px] w-[2px] rounded-sm bg-muted-light" />
            <div className="h-[10px] w-[2px] rounded-sm bg-muted" />
            <div className="h-[12px] w-[2px] rounded-sm bg-ink" />
          </div>
        </div>

        <div className="p-3 sm:p-3.5 lg:p-4">
          <p className="text-[10px] text-muted sm:text-[11px]">Buenos días,</p>
          <p className="text-[13px] font-bold text-ink sm:text-[14px]">Dra. Valeria</p>
          <p className="text-[9px] text-muted sm:text-[10px]">5 citas hoy</p>

          {/* Next appointment */}
          <div className="mt-3 rounded-[12px] bg-brand-50 p-2.5 sm:mt-4 sm:p-3">
            <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-brand-500 sm:text-[9px]">Próxima</p>
            <p className="mt-1 text-[18px] font-bold tabular-nums text-brand-700 sm:text-[20px]">10:30</p>
            <p className="text-[11px] font-semibold text-ink sm:text-[12px]">Sofía López</p>
            <p className="text-[9px] text-muted sm:text-[10px]">Ortodoncia · 45 min</p>
          </div>

          {/* Notification */}
          <div className="mt-2 flex items-start gap-2 rounded-[10px] border border-[#eef1f5] bg-white p-2 sm:mt-2.5">
            <div className="mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-100">
              <Bell className="h-[10px] w-[10px] text-brand-600" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-ink sm:text-[11px]">Nueva cita</p>
              <p className="truncate text-[9px] text-muted sm:text-[10px]">Ana Martínez · 3:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
