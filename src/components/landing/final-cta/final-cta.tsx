import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

export function FinalCTA() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[28px] bg-brand-600 px-8 py-16 text-center sm:px-16 sm:py-20">
            {/* Background glow */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <div className="absolute -top-24 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-400/30 blur-3xl" />
            </div>

            <div className="relative">
              <h2
                className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.035em" }}
              >
                Menos tiempo administrando.
                <br />
                Más tiempo atendiendo.
              </h2>
              <p className="text-pretty mx-auto mt-5 max-w-[540px] text-lg text-brand-100/80">
                Lleva tu clínica, tus doctores y tus pacientes a un mismo
                lugar.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#precios"
                  className="inline-flex h-[52px] items-center rounded-[14px] bg-white px-7 text-base font-medium text-brand-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.985]"
                >
                  Probar {siteConfig.name} gratis →
                </a>
                {/* "Solicitar demostración" — enable when demo flow exists */}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
