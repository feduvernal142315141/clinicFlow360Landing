import { MessageSquare } from "lucide-react"

const messages = [
  {
    from: "patient" as const,
    text: "Hola, quisiera una limpieza mañana después de las 3.",
  },
  {
    from: "ai" as const,
    text: "Claro, Ana 😊 Tenemos disponible con la Dra. López a las 3:30 PM o 4:15 PM. ¿Cuál prefieres?",
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
    <div
      className="w-[300px] overflow-hidden rounded-[20px] sm:w-[320px]"
      style={{
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(15,23,42,0.08)",
        boxShadow: "0 24px 60px rgba(15,23,42,0.16)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-[#EEF2F6] px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600">
          <MessageSquare className="h-3.5 w-3.5 text-white" />
        </div>
        <div>
          <p className="text-[13px] font-semibold text-ink">ClinicFlow AI</p>
          <div className="flex items-center gap-1.5">
            <span className="h-[6px] w-[6px] rounded-full bg-accent" />
            <span className="text-[11px] text-accent-dark">Disponible 24/7</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 p-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 ${
              msg.from === "patient"
                ? "self-end text-white"
                : "self-start text-ink"
            }`}
            style={
              msg.from === "patient"
                ? { background: "linear-gradient(135deg, #079CFB, #037ECC)" }
                : { background: "#F1F5F9" }
            }
          >
            <p style={{ fontSize: 13, lineHeight: 1.45 }}>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
