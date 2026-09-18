const doctores = [
  { initials: "VL", name: "Dra. Valeria López", specialty: "Odontología General", citas: 5, status: "Activa" },
  { initials: "AR", name: "Dra. Andrea Ruiz", specialty: "Ortodoncia", citas: 3, status: "Activa" },
  { initials: "MC", name: "Dr. Mario Castillo", specialty: "Endodoncia", citas: 4, status: "Activo" },
] as const

export function DoctoresPreview() {
  return (
    <div>
      <div className="mb-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Equipo</p>
        <p className="text-[17px] font-semibold text-ink">3 doctores activos</p>
      </div>
      <div className="space-y-2">
        {doctores.map((d) => (
          <div key={d.name} className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-surface-soft">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[12px] font-bold text-violet-700">
              {d.initials}
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-ink">{d.name}</p>
              <p className="text-[11px] text-muted">{d.specialty}</p>
            </div>
            <div className="text-right">
              <p className="text-[12px] font-medium text-ink">{d.citas} citas hoy</p>
              <p className="text-[10px] text-emerald-600">{d.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
