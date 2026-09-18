import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden px-6"
      style={{
        background: "#071525",
        paddingTop: 120,
        paddingBottom: 120,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
      }}
    >
      {/* Subtle product hint bg */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[40%] h-[400px] w-[600px] -translate-x-1/2" style={{ background: "radial-gradient(circle, rgba(7,156,251,0.12), transparent 50%)", filter: "blur(80px)" }} />
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[800px] text-center">
            <h2
              className="text-balance text-white"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 680,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Menos tiempo administrando.
              <br />
              Más tiempo atendiendo.
            </h2>
            <p className="text-pretty mx-auto mt-5 max-w-[540px] text-[18px] leading-relaxed" style={{ color: "#94A3B8" }}>
              Tu clínica, tus doctores y tus pacientes en un solo lugar.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#precios"
                className="inline-flex h-[54px] items-center rounded-[14px] bg-white px-7 text-[16px] font-semibold text-brand-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.985]"
              >
                Probar {siteConfig.name} gratis →
              </a>
              <a
                href="#"
                className="inline-flex h-[54px] items-center rounded-[14px] px-7 text-[16px] font-medium text-white/70 transition-colors hover:text-white"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                Solicitar demo
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
