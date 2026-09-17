import { Mic } from "lucide-react"
import { VoiceWaveform } from "./voice-waveform"

export function VoicePhoneMockup() {
  return (
    <div className="surface-elevated-strong w-[260px] overflow-hidden rounded-[36px] bg-white sm:w-[280px]">
      {/* Status bar */}
      <div className="flex items-center justify-between bg-surface-soft px-5 py-2.5">
        <span className="text-[11px] font-semibold text-ink">9:41</span>
        <div className="h-6 w-20 rounded-full bg-ink" />
        <span className="text-[11px] text-muted">100%</span>
      </div>

      <div className="p-5">
        {/* Header */}
        <p className="text-xs text-muted">Nota clínica</p>
        <p className="text-sm font-semibold text-ink">Sofía López</p>

        {/* Recording state */}
        <div className="mt-5 flex flex-col items-center rounded-[14px] bg-red-50 p-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
            <Mic className="h-5 w-5 text-white" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
            <span className="text-sm font-semibold tabular-nums text-red-600">
              Grabando 00:18
            </span>
          </div>

          {/* Waveform */}
          <div className="mt-4 w-full">
            <VoiceWaveform />
          </div>
        </div>

        {/* Transcription preview */}
        <div className="mt-4 rounded-[10px] border border-border-light bg-surface-soft p-3">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
            Transcripción
          </p>
          <p className="text-xs leading-relaxed text-ink">
            Paciente presenta evolución favorable del tratamiento de
            ortodoncia. Se ajustan brackets superiores...
          </p>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <button className="flex h-9 flex-1 items-center justify-center rounded-[10px] border border-border-light bg-white text-xs font-medium text-ink">
            Revisar
          </button>
          <button className="flex h-9 flex-1 items-center justify-center rounded-[10px] bg-brand-600 text-xs font-medium text-white">
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}
