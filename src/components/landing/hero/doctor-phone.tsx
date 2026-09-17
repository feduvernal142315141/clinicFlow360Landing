import { Bell } from "lucide-react"

export function DoctorPhone() {
  return (
    <div
      className="w-[240px] overflow-hidden sm:w-[260px]"
      style={{
        borderRadius: 44,
        border: "8px solid #1a2332",
        boxShadow: "0 35px 80px rgba(15,23,42,0.20)",
        transform: "rotateZ(1.5deg)",
        background: "#1a2332",
      }}
    >
      <div className="overflow-hidden rounded-[36px] bg-white">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#FBFCFE] px-4 py-2">
          <span className="text-[10px] font-semibold text-ink">9:41</span>
          <div className="h-[22px] w-[72px] rounded-full bg-ink" />
          <div className="flex items-center gap-0.5">
            <div className="flex gap-px">
              <div className="h-[7px] w-[3px] rounded-sm bg-muted-light" />
              <div className="h-[9px] w-[3px] rounded-sm bg-muted-light" />
              <div className="h-[11px] w-[3px] rounded-sm bg-muted" />
              <div className="h-[13px] w-[3px] rounded-sm bg-ink" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-[11px] text-muted">Buenos días,</p>
          <p className="text-[15px] font-bold text-ink">Dra. Valeria</p>
          <p className="mt-0.5 text-[11px] text-muted">5 citas hoy</p>

          {/* Next appointment card */}
          <div className="mt-4 rounded-[14px] bg-brand-50 p-3.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-brand-500">
              Próxima cita
            </p>
            <p className="mt-1.5 text-[22px] font-bold tabular-nums text-brand-700">
              10:30 AM
            </p>
            <p className="mt-0.5 text-[13px] font-semibold text-ink">Sofía López</p>
            <p className="text-[11px] text-muted">Ortodoncia · 45 min</p>
            <div className="mt-2.5">
              <span className="inline-flex h-[28px] items-center rounded-lg bg-brand-600 px-3 text-[11px] font-semibold text-white">
                Ver paciente
              </span>
            </div>
          </div>

          {/* Notification */}
          <div className="mt-3 flex items-start gap-2.5 rounded-[12px] border border-[#EEF2F6] bg-white p-2.5">
            <div className="mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-100">
              <Bell className="h-3 w-3 text-brand-600" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-ink">Nueva cita agendada</p>
              <p className="text-[10px] text-muted">Ana Martínez · 3:30 PM · Limpieza</p>
            </div>
            <span className="ml-auto text-[9px] text-muted-light">Ahora</span>
          </div>
        </div>
      </div>
    </div>
  )
}
