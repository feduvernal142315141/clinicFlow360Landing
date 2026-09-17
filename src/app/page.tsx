import { siteConfig } from "@/lib/config"

export default function LandingPage() {
  return (
    <>
      <header>
        {/* Navbar — Sprint 1 */}
      </header>

      <main>
        {/* Hero — Sprint 1 */}
        <section
          id="hero"
          className="min-h-[80dvh] flex items-center justify-center px-6 py-24"
        >
          <div className="mx-auto max-w-[900px] text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-light bg-surface-soft px-4 py-1.5 text-sm text-muted">
              ✦ La nueva forma de administrar una clínica dental
            </p>
            <h1
              className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ lineHeight: "1.02", letterSpacing: "-0.045em" }}
            >
              Tu clínica sigue atendiendo, incluso cuando tú no estás.
            </h1>
            <p className="text-pretty mx-auto mt-6 max-w-[720px] text-lg text-muted sm:text-xl">
              {siteConfig.name} conecta agenda, pacientes, historia clínica,
              odontograma, doctores y WhatsApp en una sola plataforma.
              Automatiza la recepción y dale a tu equipo el control de la
              clínica desde cualquier lugar.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#precios"
                className="inline-flex h-12 items-center rounded-[14px] bg-brand-600 px-6 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg"
              >
                Probar gratis 14 días →
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-light">
              Sin tarjeta · Configuración guiada · Cancela cuando quieras
            </p>
          </div>
        </section>

        {/* Product Showcase — Sprint 2 */}
        {/* Social Proof — Sprint 2 */}
        {/* Unified Platform — Sprint 2 */}
        {/* AI Receptionist — Sprint 2 */}
        {/* Mobile App — Sprint 2 */}
        {/* Before/After — Sprint 3 */}
        {/* Voice Notes — Sprint 3 */}
        {/* Patient Record — Sprint 3 */}
        {/* WhatsApp Automation — Sprint 4 */}
        {/* Day Timeline — Sprint 4 */}
        {/* Security — Sprint 5 */}
        {/* Pricing — Sprint 5 */}
        {/* Testimonials — Sprint 5 */}
        {/* FAQ — Sprint 5 */}
        {/* Final CTA — Sprint 5 */}
      </main>

      <footer>
        {/* Footer — Sprint 5 */}
      </footer>
    </>
  )
}
