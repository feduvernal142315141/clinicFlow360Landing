import { Smartphone, Camera, Mic } from "lucide-react"

export function AppMovilPreview() {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
      {/* Mini phone */}
      <div className="w-[200px] shrink-0 overflow-hidden rounded-[32px] bg-white" style={{ border: "6px solid #1a2332" }}>
        <div className="rounded-[26px] bg-white p-3">
          <p className="text-[10px] text-muted">Buenos días,</p>
          <p className="text-[13px] font-bold text-ink">Dra. Valeria</p>
          <div className="mt-3 rounded-[10px] bg-brand-50 p-2.5">
            <p className="text-[8px] font-bold uppercase tracking-wider text-brand-500">Próxima</p>
            <p className="text-[16px] font-bold text-brand-700">10:30</p>
            <p className="text-[11px] font-medium text-ink">Sofía López</p>
            <p className="text-[9px] text-muted">Ortodoncia</p>
          </div>
          <div className="mt-2 flex gap-1.5">
            <span className="flex h-7 flex-1 items-center justify-center gap-1 rounded-lg bg-surface-soft text-[9px] font-medium text-muted">
              <Camera className="h-3 w-3" /> Foto
            </span>
            <span className="flex h-7 flex-1 items-center justify-center gap-1 rounded-lg bg-surface-soft text-[9px] font-medium text-muted">
              <Mic className="h-3 w-3" /> Dictar
            </span>
          </div>
        </div>
      </div>

      {/* Features list */}
      <div className="flex-1 space-y-4">
        <div className="flex items-start gap-3">
          <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
          <div>
            <p className="text-[14px] font-semibold text-ink">iOS y Android</p>
            <p className="text-[13px] text-muted">Disponible para ambas plataformas con seguridad biométrica.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Camera className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
          <div>
            <p className="text-[14px] font-semibold text-ink">Fotografías clínicas</p>
            <p className="text-[13px] text-muted">Captura y organiza directamente en el expediente del paciente.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mic className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
          <div>
            <p className="text-[14px] font-semibold text-ink">Dictado por voz</p>
            <p className="text-[13px] text-muted">Convierte tu voz en notas clínicas listas para revisar.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
