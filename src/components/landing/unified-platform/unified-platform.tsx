import Image from "next/image"
import { SectionReveal } from "../section-reveal"

const painPoints = [
  { icon: "📅", pain: "Agenda en papel o Google Calendar", tool: "Herramienta aislada" },
  { icon: "📱", pain: "WhatsApp en celular de recepción", tool: "Teléfono personal" },
  { icon: "📸", pain: "Fotos perdidas en galería del doctor", tool: "Sin respaldo clínico" },
  { icon: "📝", pain: "Notas escritas a mano post-consulta", tool: "1-2 hrs de papeleo" },
] as const

export function UnifiedPlatform() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400 sm:text-xs">
              Evolución Clínica
            </p>
            <h2 className="headline-section text-balance text-white text-[26px] sm:text-[34px] lg:text-[40px]">
              Administrar una clínica no debería requerir cinco herramientas desconectadas.
            </h2>
          </div>
        </SectionReveal>

        {/* Visual transformation layout */}
        <div className="relative">
          {/* BEFORE — scattered, fragmented look */}
          <SectionReveal>
            <div className="mb-6 sm:mb-8">
              <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-red-400">
                Así opera hoy la mayoría de clínicas
              </p>
              <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                {painPoints.map((p) => (
                  <div key={p.pain} className="rounded-xl border border-red-500/20 bg-red-950/30 p-3 text-center sm:p-4">
                    <span className="text-xl sm:text-2xl">{p.icon}</span>
                    <p className="mt-2 text-[11px] font-semibold text-slate-300 sm:text-[12px]">{p.pain}</p>
                    <p className="mt-0.5 text-[10px] text-red-400/70 sm:text-[11px]">{p.tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Arrow / transformation line */}
          <div className="flex flex-col items-center gap-1 py-3 sm:py-4">
            <div className="h-8 w-px bg-gradient-to-b from-red-500/40 to-brand-400/40 sm:h-10" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-[12px] font-bold text-white shadow-md shadow-brand-600/30 sm:h-10 sm:w-10 sm:text-[14px]">
              ↓
            </div>
            <div className="h-4 w-px bg-brand-400/40 sm:h-6" />
          </div>

          {/* AFTER — unified product screenshot */}
          <SectionReveal>
            <div>
              <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400">
                Con ClinicFlow360 — todo conectado
              </p>
              <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-tier-3 sm:rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <Image
                  src="/landing/screenshots/dashboard-light.webp"
                  alt="Dashboard de ClinicFlow360 con métricas de la clínica, señales operativas y ocupación de doctores unificados en una sola vista"
                  width={1400}
                  height={780}
                  className="w-full"
                />
              </div>
              {/* Value props below screenshot */}
              <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] font-medium text-slate-400 sm:mt-8 sm:text-[13px]">
                {[
                  "Agenda inteligente",
                  "Recepción IA 24/7",
                  "Odontograma + fotos",
                  "Dictado por voz",
                ].map((v, i) => (
                  <span key={v} className="flex items-center gap-1.5">
                    {i > 0 && <span className="hidden text-slate-700 sm:inline">·</span>}
                    <span className="text-brand-400">✓</span> {v}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
