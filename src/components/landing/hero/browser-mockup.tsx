import Image from "next/image"

/**
 * Real product screenshot in a browser frame.
 * Uses the actual ClinicFlow360 agenda view (light mode).
 */
export function BrowserMockup() {
  return (
    <div className="browser-frame shadow-tier-3 overflow-hidden">
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
    </div>
  )
}
