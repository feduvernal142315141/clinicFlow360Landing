import { plans } from "@/data/pricing"
import { SectionReveal } from "../section-reveal"

export function Pricing() {
  return (
    <section id="precios" className="border-t border-slate-200 bg-white px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 sm:text-xs">
              Planes Transparentes
            </p>
            <h2 className="headline-section text-balance text-[28px] sm:text-[36px] lg:text-[42px]">
              Comienza hoy con 14 días gratis. Sin tarjeta.
            </h2>
            <p className="mt-4 text-[15px] text-muted sm:text-base">
              Elige el plan que se adapte al tamaño actual de tu consulta y escala cuando lo necesites.
            </p>
            {/* Billing toggle */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-100 p-1 text-[12px] font-semibold">
              <span className="rounded-full bg-white px-3 py-1.5 font-bold text-ink shadow-sm">Facturación Mensual</span>
              <span className="cursor-pointer px-3 py-1.5 text-muted hover:text-ink">
                Anual <strong className="font-bold text-emerald-600">(Ahorra 20%)</strong>
              </span>
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <SectionReveal key={plan.slug}>
              <div className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 ${
                plan.highlighted
                  ? "border-2 border-brand-600 bg-brand-50/40 shadow-xl"
                  : "border border-slate-200 bg-white"
              }`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {plan.badge}
                  </div>
                )}
                <div>
                  <div className="text-[17px] font-bold text-ink">{plan.name}</div>
                  <div className="mt-1 text-[12px] text-muted">{plan.description}</div>
                  <div className="my-6">
                    <span className="text-[36px] font-black text-ink">${plan.price}</span>
                    <span className="text-[14px] font-medium text-muted">/mes</span>
                  </div>
                  <ul className="space-y-3 text-[12px] text-slate-700 sm:text-[13px]">
                    {plan.features.map((f) => (
                      <li key={f.name} className={`flex items-center gap-2.5 ${!f.included ? "text-muted-light" : ""}`}>
                        {f.included ? "✓" : "✕"} {f.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`mt-8 w-full rounded-full py-3 text-[13px] font-semibold transition sm:text-[14px] ${
                  plan.highlighted
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/30 hover:bg-brand-700"
                    : "border border-slate-300 text-slate-800 hover:bg-slate-50"
                }`}>
                  {plan.ctaLabel}
                </button>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
