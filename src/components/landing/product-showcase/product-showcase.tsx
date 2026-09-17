import {
  Calendar,
  Users,
  Stethoscope,
  Building2,
  MessageSquare,
  Smartphone,
} from "lucide-react"
import { platformFeatures } from "@/data/features"
import { ProductShowcaseReveal } from "./product-showcase-reveal"

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Stethoscope: <Stethoscope className="h-5 w-5" />,
  Building2: <Building2 className="h-5 w-5" />,
  MessageSquare: <MessageSquare className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
}

export function ProductShowcase() {
  return (
    <section id="producto" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <ProductShowcaseReveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2
              className="text-balance text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.035em" }}
            >
              Todo lo que ocurre en tu clínica, conectado.
            </h2>
            <p className="text-pretty mt-4 text-lg text-muted">
              Una plataforma central para cada área de tu operación clínica.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[20px] border border-border-light bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ProductShowcaseReveal>
      </div>
    </section>
  )
}
