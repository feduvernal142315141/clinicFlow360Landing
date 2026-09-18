import { SectionReveal } from "../section-reveal"
import { MobilePhoneMockup } from "./mobile-phone-mockup"
import { MobileStoryBlocks } from "./mobile-story-blocks"

export function MobileApp() {
  return (
    <section
      id="app-movil"
      className="relative px-6 py-28 lg:py-36"
      style={{ background: "#F8FAFC" }}
    >
      {/* Blue glow behind phone */}
      <div
        className="pointer-events-none absolute left-[30%] top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(7,156,251,0.08), transparent 50%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[850px] text-center lg:text-left">
            <h2
              className="text-balance text-ink"
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 680,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              Tu clínica también cabe en tu bolsillo.
            </h2>
            <p
              className="text-pretty mt-5 max-w-[600px] text-muted lg:mx-0"
              style={{ fontSize: 18, lineHeight: 1.6 }}
            >
              Todo lo que el doctor necesita antes, durante y después de una consulta.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Phone */}
          <div className="lg:sticky lg:top-32 lg:shrink-0">
            <SectionReveal>
              <MobilePhoneMockup />
            </SectionReveal>
          </div>

          {/* Story blocks */}
          <div className="flex-1">
            <MobileStoryBlocks />
          </div>
        </div>
      </div>
    </section>
  )
}
