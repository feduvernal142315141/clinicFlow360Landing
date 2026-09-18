import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden px-5 sm:px-6"
      style={{
        background: "#071525",
        paddingTop: 100,
        paddingBottom: 100,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}
    >
      {/* === Atmospheric layers === */}

      {/* Aurora glow — primary blue */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[20%] top-[10%] h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(7,156,251,0.18), transparent 60%)", filter: "blur(80px)" }}
        />
      </div>

      {/* Aurora glow — teal accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[15%] bottom-[10%] h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.10), transparent 55%)", filter: "blur(70px)" }}
        />
      </div>

      {/* Mesh gradient overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 60% 30%, rgba(7,156,251,0.08), transparent),
            radial-gradient(ellipse 40% 50% at 30% 70%, rgba(45,212,191,0.05), transparent),
            radial-gradient(ellipse 60% 30% at 80% 60%, rgba(3,126,204,0.06), transparent)
          `,
        }}
      />

      {/* Dot grid pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent 70%)",
        }}
      />

      {/* Ghost product UI — very subtle */}
      <div className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"
        style={{ opacity: 0.04 }}
      >
        <div className="h-[300px] w-[600px] rounded-[20px] border border-white/10 sm:h-[400px] sm:w-[800px]">
          <div className="h-[40px] border-b border-white/5" />
          <div className="flex h-full">
            <div className="w-[25%] border-r border-white/5" />
            <div className="flex-1 p-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="mb-3 h-[18px] rounded bg-white/20" style={{ width: `${70 - i * 10}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === Content === */}
      <div className="relative z-10 mx-auto max-w-[800px]">
        <SectionReveal>
          <div className="text-center">
            {/* Eyebrow */}
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-400">
              Empieza hoy
            </p>

            <h2
              className="text-balance text-white"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 720,
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
              }}
            >
              Menos tiempo administrando.
              <br />
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-accent bg-clip-text text-transparent">
                Más tiempo atendiendo.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-white/50 sm:text-[17px]">
              Tu clínica, tus doctores y tus pacientes en un solo lugar.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#precios"
                className="inline-flex h-[52px] items-center rounded-[14px] px-7 text-[15px] font-semibold text-brand-700 transition-all duration-200 hover:-translate-y-0.5 sm:text-[16px]"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #E8F0FE 100%)",
                  boxShadow: "0 4px 16px rgba(255,255,255,0.15), 0 12px 40px rgba(3,126,204,0.20)",
                }}
              >
                Probar {siteConfig.name} gratis →
              </a>
              <a
                href="#"
                className="inline-flex h-[52px] items-center rounded-[14px] px-7 text-[15px] font-medium text-white/60 transition-all duration-200 hover:text-white sm:text-[16px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Solicitar demo
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Bottom ambient line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" aria-hidden="true"
        style={{ background: "linear-gradient(90deg, transparent, rgba(7,156,251,0.15), rgba(45,212,191,0.10), transparent)" }}
      />
    </section>
  )
}
