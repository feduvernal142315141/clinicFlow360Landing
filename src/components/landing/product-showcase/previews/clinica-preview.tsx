export function ClinicaPreview() {
  return (
    <div>
      <div className="mb-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Configuración</p>
        <p className="text-[17px] font-semibold text-ink">Clínica Dental Sonrisa</p>
      </div>
      <div className="space-y-4">
        <div className="rounded-xl bg-surface-soft p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">General</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div><p className="text-[11px] text-muted">Nombre</p><p className="text-[13px] font-medium text-ink">Clínica Dental Sonrisa</p></div>
            <div><p className="text-[11px] text-muted">Teléfono</p><p className="text-[13px] font-medium text-ink">+505 8888 0000</p></div>
            <div><p className="text-[11px] text-muted">Moneda</p><p className="text-[13px] font-medium text-ink">USD ($)</p></div>
            <div><p className="text-[11px] text-muted">Zona horaria</p><p className="text-[13px] font-medium text-ink">UTC-6 (CST)</p></div>
          </div>
        </div>
        <div className="rounded-xl bg-surface-soft p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">Horario</p>
          <div className="flex gap-1.5">
            {["L", "M", "Mi", "J", "V"].map((d) => (
              <span key={d} className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-[11px] font-semibold text-brand-700">{d}</span>
            ))}
            {["S", "D"].map((d) => (
              <span key={d} className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[11px] font-medium text-muted-light">{d}</span>
            ))}
          </div>
          <p className="mt-2 text-[12px] text-muted">8:00 AM — 5:00 PM</p>
        </div>
      </div>
    </div>
  )
}
