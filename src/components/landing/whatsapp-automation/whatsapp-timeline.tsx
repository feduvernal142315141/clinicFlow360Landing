import { Calendar, MessageSquare, CheckCheck } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    label: "Cita agendada",
    detail: "Viernes 10:30 AM — Limpieza dental",
    accent: "bg-brand-100 text-brand-600",
  },
  {
    icon: MessageSquare,
    label: "24 h antes",
    detail: "WhatsApp enviado ✓",
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MessageSquare,
    label: "2 h antes",
    detail: "WhatsApp enviado ✓",
    accent: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: CheckCheck,
    label: "Paciente",
    detail: "CONFIRMÓ ✓",
    accent: "bg-accent/15 text-accent-dark",
  },
] as const

export function WhatsAppTimeline() {
  return (
    <div className="mx-auto max-w-[340px] rounded-[20px] border border-border-light bg-white p-6">
      <div className="space-y-0">
        {steps.map((step, i) => {
          const Icon = step.icon
          const isLast = i === steps.length - 1

          return (
            <div key={step.label} className="flex gap-4">
              {/* Connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${step.accent}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-border-light" style={{ minHeight: 32 }} />
                )}
              </div>

              {/* Content */}
              <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                <p className="text-sm font-semibold text-ink">{step.label}</p>
                <p className="mt-0.5 text-sm text-muted">{step.detail}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
