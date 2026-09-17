import { Check, X } from "lucide-react"
import { plans } from "@/data/pricing"
import { SectionReveal } from "../section-reveal"

export function Pricing() {
  return (
    <section id="precios" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Un plan para cada clínica.
            </h2>
            <p className="text-pretty mt-4 text-lg text-muted">
              Empieza con lo esencial y crece cuando estés listo.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <SectionReveal key={plan.slug}>
              <div
                className={`relative flex flex-col rounded-[20px] border p-6 sm:p-7 ${
                  plan.highlighted
                    ? "border-brand-300 bg-white shadow-lg shadow-brand-100/40"
                    : "border-border-light bg-white"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                )}

                {/* Header */}
                <div>
                  <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-5 border-b border-border-light pb-5">
                  <span className="text-4xl font-bold tracking-tight text-ink">
                    {plan.price !== null ? `$${plan.price}` : "$XX"}
                  </span>
                  <span className="ml-1 text-sm text-muted">/ mes</span>
                </div>

                {/* Features */}
                <ul className="mt-5 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-2.5"
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4 shrink-0 text-brand-600" />
                      ) : (
                        <X className="h-4 w-4 shrink-0 text-muted-light" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-ink" : "text-muted-light"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href="#"
                    className={`inline-flex h-11 w-full items-center justify-center rounded-[12px] text-sm font-medium transition-all ${
                      plan.highlighted
                        ? "bg-brand-600 text-white hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg"
                        : "border border-border bg-white text-ink hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
                    }`}
                  >
                    Probar gratis
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
