import Image from "next/image"

/**
 * Real product screenshot in a browser frame.
 * Uses the actual ClinicFlow360 agenda view (light mode).
 */
export function BrowserMockup() {
  return (
    <div className="browser-frame shadow-tier-3 relative overflow-hidden">
      {/* Chrome */}
      <div className="browser-chrome">
        <div className="flex gap-[5px]">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </div>
        <div className="browser-url font-mono">app.clinicflow360.com/agenda</div>
        <div className="w-10" />
      </div>

      {/* Real product screenshot */}
      <Image
        src="/landing/screenshots/agenda-light.webp"
        alt="Agenda de citas de ClinicFlow360 mostrando vista semanal con citas de pacientes, filtros por especialista y etiquetas de estado"
        width={1400}
        height={780}
        className="w-full"
        priority
      />

      {/* Bottom fade on mobile — depth transition to cards below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:hidden"
        style={{ background: "linear-gradient(to top, rgba(6,16,26,0.6), transparent)" }}
      />
    </div>
  )
}
