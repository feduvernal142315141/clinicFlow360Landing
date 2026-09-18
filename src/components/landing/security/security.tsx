import { SectionReveal } from "../section-reveal"

const items = [
  { icon: "🔐", title: "Cifrado de grado médico", detail: "Encriptación AES-256 en reposo y en tránsito. Protocolos compatibles con normativas sanitarias." },
  { icon: "💾", title: "Copias de seguridad cada hora", detail: "Tus historias clínicas, radiografías y odontogramas nunca se extraviarán ante fallos de hardware." },
  { icon: "👥", title: "Permisos por roles", detail: "Recepción, especialistas y administradores solo acceden a la información correspondiente." },
  { icon: "⚡", title: "Disponibilidad 99.98%", detail: "Infraestructura en la nube con redundancia para que tu clínica nunca se detenga." },
] as const

export function Security() {
  return (
    <section className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 sm:text-xs">
              Seguridad &amp; Cumplimiento Clínico
            </p>
            <h2 className="headline-section text-balance text-[26px] sm:text-[34px] lg:text-[40px]">
              La información de tus pacientes merece el mismo cuidado que ellos.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <SectionReveal key={item.title}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg font-bold text-slate-800">
                  {item.icon}
                </div>
                <h4 className="text-[14px] font-bold text-ink sm:text-[15px]">{item.title}</h4>
                <p className="mt-1 text-[12px] leading-relaxed text-muted">{item.detail}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
