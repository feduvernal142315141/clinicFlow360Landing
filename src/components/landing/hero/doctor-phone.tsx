export function DoctorPhone() {
  return (
    <div className="phone-frame shadow-phone w-[200px] sm:w-[240px] lg:w-[270px]">
      <div className="phone-screen flex min-h-[320px] flex-col justify-between sm:min-h-[370px]">
        {/* Status bar */}
        <div>
          <div className="phone-notch">
            <span className="text-[10px] font-semibold text-muted">9:41</span>
            <div className="phone-dynamic-island" />
            <span className="h-2 w-3 rounded-[2px] bg-ink" />
          </div>

          <div className="p-3 sm:p-4">
            {/* Greeting */}
            <span className="text-[10px] text-muted">Buenos días,</span>
            <h4 className="text-[13px] font-bold text-ink sm:text-[14px]">Dra. Valeria</h4>
            <p className="text-[10px] font-semibold text-brand-600 sm:text-[11px]">5 citas hoy</p>

            {/* Next appointment */}
            <div className="mt-3 rounded-2xl border border-brand-100 bg-brand-50/70 p-3 sm:mt-4">
              <div className="text-[8px] font-extrabold uppercase tracking-wider text-brand-600 sm:text-[9px]">Próxima</div>
              <div className="mt-0.5 text-[20px] font-black text-ink sm:text-2xl">10:30</div>
              <div className="text-[11px] font-bold text-ink sm:text-xs">Sofía López</div>
              <div className="text-[10px] text-muted sm:text-[11px]">Ortodoncia · 45 min</div>
            </div>

            {/* Alert */}
            <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:mt-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold text-ink sm:text-[11px]">Nueva cita confirmada</div>
                <div className="text-[9px] text-muted sm:text-[10px]">Ana Martínez · 3:30 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center justify-around border-t border-slate-100 px-2 py-2.5 text-[10px] font-medium text-muted sm:text-xs">
          <span className="font-bold text-brand-600">Agenda</span>
          <span>Pacientes</span>
          <span>Cámara</span>
        </div>
      </div>
    </div>
  )
}
