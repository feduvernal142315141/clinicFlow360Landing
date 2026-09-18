const citas = [
  { time: "08:00", name: "María Pérez", service: "Limpieza", status: "Completada", dot: "bg-emerald-400" },
  { time: "09:30", name: "Carlos Ruiz", service: "Endodoncia", status: "En curso", dot: "bg-violet-400" },
  { time: "10:30", name: "Sofía López", service: "Ortodoncia", status: "Confirmada", dot: "bg-brand-400" },
  { time: "14:00", name: "Ana Martínez", service: "Revisión", status: "Pendiente", dot: "bg-amber-400" },
  { time: "15:30", name: "Diego Torres", service: "Limpieza", status: "Pendiente", dot: "bg-amber-400" },
] as const

export function AgendaPreview() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Agenda del día</p>
          <p className="text-[17px] font-semibold text-ink">Miércoles 18 Sep</p>
        </div>
        <span className="rounded-lg border border-[#EEF2F6] bg-white px-2.5 py-1.5 text-[12px] font-medium text-muted">
          Dra. Valeria López
        </span>
      </div>
      <div className="space-y-1">
        {citas.map((c) => (
          <div key={c.time} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-surface-soft">
            <span className="w-[48px] text-[13px] font-semibold tabular-nums text-muted">{c.time}</span>
            <span className={`h-2 w-2 shrink-0 rounded-full ${c.dot}`} />
            <span className="flex-1 text-[13px] font-medium text-ink">{c.name}</span>
            <span className="text-[11px] text-muted">{c.service}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-4 border-t border-[#EEF2F6] pt-3">
        <span className="text-[12px] text-muted"><strong className="text-ink">5</strong> citas</span>
        <span className="text-[12px] text-muted"><strong className="text-emerald-600">1</strong> completada</span>
        <span className="text-[12px] text-muted"><strong className="text-violet-600">1</strong> en curso</span>
      </div>
    </div>
  )
}
