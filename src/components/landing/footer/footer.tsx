import { siteConfig } from "@/lib/config"

const footerLinks = {
  Producto: [
    { label: "Agenda", href: "#producto" },
    { label: "Pacientes", href: "#producto" },
    { label: "Odontograma", href: "#producto" },
    { label: "App móvil", href: "#app-movil" },
    { label: "ClinicFlow AI", href: "#recepcion-ia" },
    { label: "Automatizaciones", href: "#producto" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  Recursos: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
  ],
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-light bg-surface-soft px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-bold tracking-tight text-ink">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              La plataforma que conecta tu clínica, tus doctores y tus
              pacientes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                {title}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-light pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <a
            href="#"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            Iniciar sesión
          </a>
        </div>
      </div>
    </footer>
  )
}
