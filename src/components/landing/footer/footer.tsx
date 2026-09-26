export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 py-14 text-[12px] text-slate-400 sm:px-6 lg:py-16" style={{ background: "#060d1a" }}>
      <div className="mx-auto max-w-6xl">
        {/* Top divider */}
        <div className="mb-12 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />

        <div className="mb-14 grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 text-white shadow-md shadow-brand-500/20">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
                  <path d="M9 9c1.5 1 4.5 1 6 0" />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-lg font-black tracking-tight text-white">ClinicFlow</span>
                <span className="text-lg font-extrabold tracking-tight text-brand-400">360</span>
              </div>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-slate-500">
              La plataforma clínica y de recepción autónoma que sincroniza agenda, odontograma digital, WhatsApp y flujo odontológico en una sola experiencia.
            </p>
            <p className="text-[11px] text-slate-600">
              Diseñado para clínicas en México, Colombia, Chile, España y toda Latinoamérica.
            </p>

            {/* Social placeholder */}
            <div className="flex items-center gap-3 pt-1">
              {["twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-slate-600 transition-colors hover:border-white/10 hover:text-slate-400"
                  aria-label={social}
                >
                  {social === "twitter" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  )}
                  {social === "linkedin" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  )}
                  {social === "instagram" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">Producto</div>
            <ul className="space-y-2.5">
              {["Agenda Dental", "Recepción IA WhatsApp", "Odontograma Digital", "App para Doctores", "Dictado Clínico IA"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-slate-500 transition-colors hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">Especialidades</div>
            <ul className="space-y-2.5">
              {["Ortodoncia", "Implantología", "Odontopediatría", "Endodoncia", "Clínicas Multisede"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-slate-500 transition-colors hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">Seguridad &amp; Legal</div>
            <ul className="space-y-2.5">
              {[
                { label: "Privacidad de Datos", href: "/privacy" },
                { label: "Términos de Servicio", href: "#" },
                { label: "Estado del Sistema", href: "#" },
                { label: "Centro de Ayuda", href: "#" }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[13px] text-slate-500 transition-colors hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)" }} />
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[11px] text-slate-600 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span>© {year} KodeWave Solutions. Todos los derechos reservados.</span>
            <span className="text-[10px] text-slate-700">ClinicFlow360 es una plataforma SaaS desarrollada y operada por KodeWave Solutions.</span>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a href="/privacy" className="transition-colors hover:text-slate-400">Política de Privacidad</a>
            <a href="/terms" className="transition-colors hover:text-slate-400">Condiciones del Servicio</a>
            <a href="/data-deletion" className="transition-colors hover:text-slate-400">Eliminación de Datos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
