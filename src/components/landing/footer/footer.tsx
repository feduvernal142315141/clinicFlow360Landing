export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-14 text-[12px] text-slate-400 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
                </svg>
              </div>
              <span className="text-lg font-black text-white">ClinicFlow360</span>
            </div>
            <p className="max-w-sm text-[12px] leading-relaxed text-slate-400">
              La plataforma clínica y de recepción autónoma que sincroniza agenda, odontograma digital, WhatsApp y flujo odontológico en una sola experiencia.
            </p>
            <p className="text-[11px] text-slate-500">
              Diseñado para clínicas en México, Colombia, Chile, España y toda Latinoamérica.
            </p>
          </div>

          {/* Producto */}
          <div>
            <div className="mb-3 font-bold uppercase tracking-wider text-white">Producto</div>
            <ul className="space-y-2">
              {["Agenda Dental", "Recepción IA WhatsApp", "Odontograma Digital", "App para Doctores", "Dictado Clínico IA"].map((item) => (
                <li key={item}><a href="#" className="transition hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <div className="mb-3 font-bold uppercase tracking-wider text-white">Especialidades</div>
            <ul className="space-y-2">
              {["Ortodoncia", "Implantología", "Odontopediatría", "Endodoncia", "Clínicas Multisede"].map((item) => (
                <li key={item}><a href="#" className="transition hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-3 font-bold uppercase tracking-wider text-white">Seguridad &amp; Legal</div>
            <ul className="space-y-2">
              {["Privacidad de Datos", "Términos de Servicio", "Estado del Sistema", "Centro de Ayuda"].map((item) => (
                <li key={item}><a href="#" className="transition hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 text-[11px] text-slate-500 sm:flex-row">
          <span>© {year} ClinicFlow360 Technologies. Todos los derechos reservados.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Aviso de Privacidad</a>
            <a href="#" className="hover:text-slate-400">Políticas de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
