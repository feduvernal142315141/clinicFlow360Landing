import { SectionReveal } from "../section-reveal"
import { ProductNavigator } from "./product-navigator"

export function ProductShowcase() {
  return (
    <section
      id="producto"
      className="relative px-6 py-28 lg:py-36"
      style={{ background: "#F8FAFC" }}
    >
      {/* Subtle glow behind product area */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(7,156,251,0.07), transparent 55%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[900px] text-center">
            <h2
              className="text-balance text-ink"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 680,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Todo lo que ocurre en tu clínica, conectado.
            </h2>
            <p
              className="text-pretty mx-auto mt-5 max-w-[650px] text-muted"
              style={{ fontSize: 18 }}
            >
              Una plataforma central para cada área de tu operación clínica.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 lg:mt-16">
          <ProductNavigator />
        </div>
      </div>
    </section>
  )
}
