import { Check, X } from "lucide-react"
import { plans } from "@/data/pricing"
import { SectionReveal } from "../section-reveal"

export function Pricing() {
  return (
    <section id="precios" className="px-6 py-28 lg:py-36" style={{ background: "#F8FAFC" }}>
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[850px] text-center">
            <h2
              className="text-balance text-ink"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 680, lineHeight: 1.04, letterSpacing: "-0.04em" }}
            >
              Un plan para cada clínica.
            </h2>
            <p className="text-pretty mt-4 text-[18px] text-muted">
              Empieza con lo esencial y crece cuando estés listo.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const isDark = plan.highlighted

            return (
              <SectionReveal key={plan.slug}>
                <div
                  className="relative flex flex-col rounded-[24px] p-7"
                  style={{
                    background: isDark ? "#071525" : "#FFFFFF",
                    border: isDark
                      ? "1px solid rgba(7,156,251,0.35)"
                      : "1px solid rgba(15,23,42,0.07)",
                    boxShadow: isDark
                      ? "0 30px 80px rgba(3,126,204,0.15)"
                      : "0 12px 40px rgba(15,23,42,0.06)",
                    minHeight: 560,
                  }}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold text-white">
                      {plan.badge}
                    </span>
                  )}

                  <h3
                    className="text-[18px] font-bold"
                    style={{ color: isDark ? "#FFFFFF" : "#0F172A" }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="mt-1 text-[14px]"
                    style={{ color: isDark ? "#94A3B8" : "#64748B" }}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6 border-b pb-6" style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "#EEF2F6" }}>
                    <span
                      className="font-bold"
                      style={{
                        fontSize: 52,
                        letterSpacing: "-0.04em",
                        color: isDark ? "#FFFFFF" : "#0F172A",
                      }}
                    >
                      {plan.price !== null ? `$${plan.price}` : "$XX"}
                    </span>
                    <span className="ml-1 text-[15px]" style={{ color: isDark ? "#94A3B8" : "#64748B" }}>
                      / mes
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.name} className="flex items-center gap-2.5">
                        {f.included ? (
                          <Check className="h-4 w-4 shrink-0" style={{ color: isDark ? "#2DD4BF" : "#037ECC" }} />
                        ) : (
                          <X className="h-4 w-4 shrink-0" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "#CBD5E1" }} />
                        )}
                        <span
                          className="text-[14px]"
                          style={{
                            color: f.included
                              ? isDark ? "rgba(255,255,255,0.85)" : "#0F172A"
                              : isDark ? "rgba(255,255,255,0.25)" : "#CBD5E1",
                          }}
                        >
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex h-[48px] w-full items-center justify-center rounded-[12px] text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                      style={
                        isDark
                          ? {
                              background: "linear-gradient(180deg, #079CFB 0%, #037ECC 100%)",
                              color: "#FFFFFF",
                              border: "1px solid rgba(255,255,255,0.15)",
                              boxShadow: "0 8px 24px rgba(3,126,204,0.30)",
                            }
                          : {
                              background: "#FFFFFF",
                              color: "#0F172A",
                              border: "1px solid #E2E8F0",
                              boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
                            }
                      }
                    >
                      Probar gratis
                    </a>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
