const msgs = [
  { from: "p" as const, text: "Hola, quisiera una limpieza mañana después de las 3." },
  { from: "a" as const, text: "Claro, Ana 😊 Tenemos disponible 3:30 PM o 4:15 PM con la Dra. Valeria." },
  { from: "p" as const, text: "Las 3:30, por favor." },
  { from: "a" as const, text: "¡Listo! Tu cita quedó agendada para mañana 3:30 PM. Te enviamos recordatorio con indicaciones de llegada. 🦷" },
] as const

export function AIChatCard() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl sm:w-[300px] lg:w-[360px]"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-[13px] font-bold text-white">
            ClinicFlow AI
            <span className="inline-flex items-center rounded bg-emerald-950/80 px-1.5 py-px text-[10px] font-bold text-emerald-400">24/7</span>
          </div>
          <div className="text-[11px] text-slate-500">Recepción dental automatizada</div>
        </div>
      </div>
      {/* Messages */}
      <div className="space-y-2.5 p-3 text-[12px] leading-relaxed sm:p-4 sm:text-[13px]">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === "p" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2 ${
                m.from === "p"
                  ? "rounded-tr-none bg-brand-600 text-white shadow-sm"
                  : "rounded-tl-none border border-white/[0.06] bg-white/[0.06] text-slate-300"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
