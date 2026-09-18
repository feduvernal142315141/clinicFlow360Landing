const pacientes = [
  { initials: "AM", name: "Ana Martínez", age: "29 años", lastVisit: "15 Sep 2026" },
  { initials: "SL", name: "Sofía López", age: "34 años", lastVisit: "12 Sep 2026" },
  { initials: "CR", name: "Carlos Ruiz", age: "41 años", lastVisit: "10 Sep 2026" },
  { initials: "DT", name: "Diego Torres", age: "26 años", lastVisit: "8 Sep 2026" },
] as const

export function PacientesPreview() {
  return (
    <div>
      <div className="mb-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Pacientes</p>
        <p className="text-[17px] font-semibold text-ink">142 registrados</p>
      </div>
      <div className="space-y-2">
        {pacientes.map((p) => (
          <div key={p.name} className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-surface-soft">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[12px] font-bold text-brand-700">
              {p.initials}
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-semibold text-ink">{p.name}</p>
              <p className="text-[11px] text-muted">{p.age}</p>
            </div>
            <p className="text-[11px] text-muted-light">{p.lastVisit}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
