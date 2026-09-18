import { MessageSquare } from "lucide-react"

const msgs = [
  { from: "p" as const, text: "Hola, quisiera una limpieza mañana después de las 3." },
  { from: "a" as const, text: "Claro, Ana 😊 Tenemos 3:30 PM o 4:15 PM con la Dra. Valeria." },
  { from: "p" as const, text: "Las 3:30, por favor." },
  { from: "a" as const, text: "Listo. Tu cita quedó agendada. ¡Te enviaremos un recordatorio!" },
] as const

export function AIChatCard() {
  return (
    <div className="surface-glass shadow-float w-[260px] overflow-hidden rounded-[18px] sm:w-[300px] lg:w-[340px]">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-black/[0.04] px-3.5 py-2.5 sm:px-4 sm:py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600">
          <MessageSquare className="h-3 w-3 text-white" />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-ink sm:text-[13px]">ClinicFlow AI</p>
          <div className="flex items-center gap-1">
            <span className="h-[5px] w-[5px] rounded-full bg-accent" />
            <span className="text-[10px] text-accent-dark">24/7</span>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex flex-col gap-[6px] p-2.5 sm:gap-2 sm:p-3">
        {msgs.map((m, i) => (
          <div key={i}
            className={`max-w-[88%] rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 ${
              m.from === "p" ? "self-end text-white" : "self-start bg-[#f1f5f9] text-ink"
            }`}
            style={m.from === "p" ? { background: "linear-gradient(135deg,#079CFB,#037ECC)" } : undefined}
          >
            <p className="text-[12px] leading-[1.45] sm:text-[13px]">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
