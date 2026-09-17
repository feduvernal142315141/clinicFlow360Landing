import {
  Calendar,
  Smartphone,
  Users,
  ImageIcon,
  FileText,
  Bell,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/lib/config"
import { SectionReveal } from "../section-reveal"

const beforeItems = [
  { label: "Agenda", tool: "Herramienta 1", icon: Calendar },
  { label: "WhatsApp", tool: "Teléfono personal", icon: Smartphone },
  { label: "Pacientes", tool: "Otro software", icon: Users },
  { label: "Fotos", tool: "Galería del celular", icon: ImageIcon },
  { label: "Notas", tool: "Papel / teclado", icon: FileText },
  { label: "Recordatorios", tool: "Recepción manual", icon: Bell },
] as const

const afterGroups = [
  {
    title: "Clínica",
    items: ["Agenda", "Pacientes", "Odontograma"],
  },
  {
    title: "Doctor móvil",
    items: ["Citas", "Fotos", "Voz"],
  },
  {
    title: "Paciente",
    items: ["WhatsApp", "Reservas", "Recordatorios"],
  },
] as const

export function UnifiedPlatform() {
  return (
    <section className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Administrar una clínica no debería requerir cinco herramientas.
            </h2>
            <p className="text-pretty mt-4 text-lg text-muted">
              Agenda, mensajes, expedientes, imágenes y seguimiento deberían
              trabajar juntos, no vivir en sistemas separados.
            </p>
          </div>
        </SectionReveal>

        {/* Before / After comparison */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* BEFORE */}
          <SectionReveal>
            <div className="rounded-[20px] border border-border-light bg-white p-6 sm:p-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted">
                Antes
              </p>
              <div className="space-y-3">
                {beforeItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-[10px] bg-red-50/60 px-4 py-3"
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-red-400" />
                    <span className="flex-1 text-sm font-medium text-ink">
                      {item.label}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-light" />
                    <span className="text-sm text-muted">{item.tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* AFTER */}
          <SectionReveal>
            <div className="rounded-[20px] border border-brand-200 bg-brand-50/30 p-6 sm:p-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-600">
                Con {siteConfig.name}
              </p>
              <div className="mb-6 text-center">
                <span className="inline-flex items-center rounded-full bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white">
                  {siteConfig.name}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {afterGroups.map((group) => (
                  <div key={group.title} className="text-center">
                    <p className="mb-2 text-sm font-semibold text-ink">
                      {group.title}
                    </p>
                    <div className="space-y-1.5">
                      {group.items.map((item) => (
                        <p
                          key={item}
                          className="rounded-md bg-white px-2 py-1.5 text-xs font-medium text-brand-700 shadow-sm"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-brand-700">
                Una clínica. Un sistema. Todo conectado.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
