import { Lock, ShieldCheck, Building2, FileSearch, DatabaseBackup, KeyRound } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

const items = [
  { icon: ShieldCheck, title: "Roles y permisos", detail: "Control granular por módulo y acción." },
  { icon: Lock, title: "Cifrado", detail: "Datos protegidos en tránsito y en reposo." },
  { icon: DatabaseBackup, title: "Backups", detail: "Respaldos automáticos de tu información." },
  { icon: Building2, title: "Aislamiento", detail: "Cada clínica opera en un entorno separado." },
  { icon: FileSearch, title: "Auditoría", detail: "Registro de cambios con trazabilidad." },
  { icon: KeyRound, title: "Propiedad", detail: "Tus datos son tuyos. Exporta cuando quieras." },
] as const

export function Security() {
  return (
    <>
      {/* Transition dark → light */}
      <div style={{ height: 80, background: "linear-gradient(to bottom, #061525, #0a1e30 40%, #FFFFFF)" }} />

      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal>
            <div className="mx-auto max-w-[850px] text-center">
              <h2
                className="text-balance text-ink"
                style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 680, lineHeight: 1.04, letterSpacing: "-0.04em" }}
              >
                Tus datos clínicos merecen una infraestructura seria.
              </h2>
            </div>
          </SectionReveal>

          {/* Diagram layout */}
          <SectionReveal>
            <div className="mx-auto mt-14 max-w-[900px]">
              {/* Center node */}
              <div className="flex justify-center">
                <span className="inline-flex h-12 items-center rounded-full bg-brand-600 px-5 text-[14px] font-semibold text-white shadow-premium-sm">
                  {siteConfig.name}
                </span>
              </div>

              {/* Connector */}
              <div className="mx-auto h-10 w-px bg-border" />

              {/* Feature grid — 3 columns */}
              <div className="grid gap-px rounded-[20px] bg-border sm:grid-cols-3" style={{ border: "1px solid rgba(15,23,42,0.07)" }}>
                {items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="bg-white p-6 first:rounded-tl-[20px] last:rounded-br-[20px] sm:[&:nth-child(3)]:rounded-tr-[20px] sm:[&:nth-child(4)]:rounded-bl-[20px]">
                      <Icon className="h-5 w-5 text-brand-500" />
                      <p className="mt-3 text-[14px] font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">{item.detail}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
