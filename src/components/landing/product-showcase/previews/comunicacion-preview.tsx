import { MessageSquare, Check } from "lucide-react"

const mensajes = [
  { name: "Ana Martínez", preview: "Confirmo 👍", time: "14:02", unread: false },
  { name: "Sofía López", preview: "¿Puedo reagendar para el viernes?", time: "13:45", unread: true },
  { name: "Carlos Ruiz", preview: "Gracias, ahí estaré.", time: "12:30", unread: false },
] as const

export function ComunicacionPreview() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted">WhatsApp</p>
          <p className="text-[17px] font-semibold text-ink">Conversaciones</p>
        </div>
        <span className="flex h-6 items-center rounded-md bg-brand-50 px-2 text-[11px] font-semibold text-brand-700">1 nueva</span>
      </div>
      <div className="space-y-1">
        {mensajes.map((m) => (
          <div key={m.name} className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-surface-soft">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
              <MessageSquare className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-semibold text-ink">{m.name}</p>
                <p className="text-[10px] text-muted-light">{m.time}</p>
              </div>
              <div className="flex items-center gap-1">
                {!m.unread && <Check className="h-3 w-3 shrink-0 text-brand-400" />}
                <p className="truncate text-[12px] text-muted">{m.preview}</p>
              </div>
            </div>
            {m.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />}
          </div>
        ))}
      </div>
    </div>
  )
}
