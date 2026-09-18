import { SectionReveal } from "../section-reveal"

const metrics: { value: string; label: string; accent?: boolean; green?: boolean }[] = [
  { value: "+250,000", label: "Citas gestionadas" },
  { value: "94%", label: "Confirmaciones automáticas", accent: true },
  { value: "18 hrs", label: "Ahorradas por semana en recepción" },
  { value: "0%", label: "Mensajes sin responder", green: true },
]

const trustBadges = [
  "Avalado por directores médicos dentales",
  "Protocolo FDI internacional",
  "Seguridad radiográfica en la nube",
] as const

export function SocialProof() {
  return (
    <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-muted-light">
            Diseñado y perfeccionado junto a profesionales de la salud dental en Iberoamérica
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="p-3">
                <div className={`text-[28px] font-black tracking-tight sm:text-[32px] lg:text-[36px] ${m.accent ? "text-brand-600" : m.green ? "text-emerald-600" : "text-ink"}`}>
                  {m.value}
                </div>
                <div className="mt-1 text-[12px] font-medium text-muted sm:text-[13px]">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-slate-100 pt-6 text-[11px] font-semibold text-muted sm:gap-4 sm:text-[12px]">
            {trustBadges.map((badge, i) => (
              <div key={badge} className="flex items-center gap-2">
                {i > 0 && <span className="hidden h-1.5 w-1.5 rounded-full bg-slate-300 sm:inline-block" />}
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-[10px] text-brand-600">✓</span>
                {badge}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
