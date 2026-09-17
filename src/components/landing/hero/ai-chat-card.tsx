import { MessageSquare } from "lucide-react"

const messages = [
  {
    from: "patient" as const,
    text: "Hola, quisiera una limpieza mañana después de las 3.",
  },
  {
    from: "ai" as const,
    text: "Claro 😊 Tenemos disponible 3:30 PM o 4:15 PM. ¿Cuál prefieres?",
  },
  {
    from: "patient" as const,
    text: "Las 3:30, por favor.",
  },
  {
    from: "ai" as const,
    text: "Perfecto. Tu cita quedó agendada para mañana a las 3:30 PM. ¡Te enviaremos un recordatorio!",
  },
] as const

export function AIChatCard() {
  return (
    <div className="surface-elevated w-[280px] overflow-hidden rounded-[16px] bg-white sm:w-[300px]">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-border-light bg-surface-soft px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">ClinicFlow AI</p>
          <p className="text-xs text-accent-dark">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2.5 p-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-snug ${
              msg.from === "patient"
                ? "self-end bg-brand-500 text-white"
                : "self-start bg-surface-soft text-ink"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  )
}
