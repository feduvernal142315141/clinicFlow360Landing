import dynamic from "next/dynamic"
import { SectionReveal } from "../section-reveal"

const AIChatDemo = dynamic(() =>
  import("./ai-chat-demo").then((m) => m.AIChatDemo),
  {
    loading: () => (
      <div className="mx-auto h-[520px] w-full max-w-[620px] animate-pulse rounded-[24px] bg-white/5" />
    ),
  }
)

const capabilities = [
  "Consulta disponibilidad",
  "Agenda",
  "Cancela",
  "Reagenda",
  "Responde 24/7",
] as const

export function AIReceptionist() {
  return (
    <>
      <section
        id="recepcion-ia"
        className="relative overflow-hidden px-6"
        style={{
          background: "#061525",
          paddingTop: 120,
          paddingBottom: 100,
        }}
      >
        {/* Radial illumination */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute h-[700px] w-[700px]"
            style={{
              left: "65%",
              top: "45%",
              transform: "translate(-50%,-50%)",
              background: "radial-gradient(circle, rgba(7,156,251,0.18), transparent 35%)",
            }}
          />
          <div
            className="absolute h-[400px] w-[400px]"
            style={{
              left: "30%",
              top: "60%",
              transform: "translate(-50%,-50%)",
              background: "radial-gradient(circle, rgba(45,212,191,0.07), transparent 40%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1280px]">
          {/* Header */}
          <SectionReveal>
            <div className="mx-auto max-w-[850px] text-center">
              <p
                className="mb-5 text-[12px] font-semibold uppercase"
                style={{ letterSpacing: "0.08em", color: "#38BDF8" }}
              >
                ● ClinicFlow AI
              </p>
              <h2
                className="text-balance text-white"
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 680,
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                }}
              >
                Una recepcionista que nunca deja a un paciente esperando.
              </h2>
              <p
                className="text-pretty mx-auto mt-5 max-w-[650px]"
                style={{ fontSize: 18, lineHeight: 1.6, color: "#94A3B8" }}
              >
                Atiende WhatsApp las 24 horas, consulta disponibilidad real y
                agenda, cancela o reprograma citas mientras tu equipo se enfoca
                en atender.
              </p>
            </div>
          </SectionReveal>

          {/* Central conversation + mini agenda */}
          <div className="mt-16 flex justify-center">
            <AIChatDemo />
          </div>

          {/* Capabilities strip */}
          <SectionReveal>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {capabilities.map((cap, i) => (
                <span key={cap} className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="#2DD4BF" strokeWidth="1.5" />
                      <path d="M4.5 7L6.5 9L9.5 5.5" stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 14, color: "#CBD5E1" }}>{cap}</span>
                  </span>
                  {i < capabilities.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Transition dark → light */}
      <div style={{ height: 80, background: "linear-gradient(to bottom, #061525, #0a1e30 40%, #F8FAFC)" }} />
    </>
  )
}
