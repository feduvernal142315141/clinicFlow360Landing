import { siteConfig } from "@/lib/config"

const footerLinks = {
  Producto: [
    { label: "Agenda", href: "#producto" },
    { label: "Pacientes", href: "#producto" },
    { label: "Odontograma", href: "#producto" },
    { label: "App móvil", href: "#app-movil" },
    { label: "ClinicFlow AI", href: "#recepcion-ia" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Pie de página" className="border-t border-border px-6 py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-[17px] font-bold tracking-tight text-ink" style={{ letterSpacing: "-0.03em" }}>
              ClinicFlow<span className="text-brand-600">360</span>
            </p>
            <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed text-muted">
              La plataforma que conecta tu clínica, tus doctores y tus pacientes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
                {title}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[14px] text-muted transition-colors duration-150 hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient mt-10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[13px] text-muted-light">
            © {year} {siteConfig.name}
          </p>
          <a href="#" className="text-[13px] text-muted transition-colors hover:text-ink">
            Iniciar sesión
          </a>
        </div>
      </div>
    </footer>
  )
}
