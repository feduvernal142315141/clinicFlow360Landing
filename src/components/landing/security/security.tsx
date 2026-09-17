import {
  Lock,
  ShieldCheck,
  Building2,
  FileSearch,
  DatabaseBackup,
  KeyRound,
} from "lucide-react"
import { securityFeatures } from "@/data/features"
import { SectionReveal } from "../section-reveal"

const iconMap: Record<string, React.ReactNode> = {
  Cifrado: <Lock className="h-5 w-5" />,
  "Roles y permisos": <ShieldCheck className="h-5 w-5" />,
  "Aislamiento por clínica": <Building2 className="h-5 w-5" />,
  Auditoría: <FileSearch className="h-5 w-5" />,
  Backups: <DatabaseBackup className="h-5 w-5" />,
  "Propiedad de datos": <KeyRound className="h-5 w-5" />,
}

export function Security() {
  return (
    <section className="bg-surface-soft px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              La información de tus pacientes merece el mismo cuidado que
              ellos.
            </h2>
            <p className="text-pretty mt-4 text-lg text-muted">
              Seguridad y privacidad integradas en cada capa de la
              plataforma.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <SectionReveal key={feature.title}>
              <div className="flex gap-4 rounded-[16px] border border-border-light bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-brand-50 text-brand-600">
                  {iconMap[feature.title]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
