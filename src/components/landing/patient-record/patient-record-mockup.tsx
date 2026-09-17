const tabs = ["Resumen", "Historia", "Odontograma", "Imágenes", "Citas"] as const

const treatments = [
  { tooth: "16", condition: "Caries", status: "bg-red-100 text-red-700" },
  { tooth: "26", condition: "Restauración", status: "bg-brand-100 text-brand-700" },
  { tooth: "37", condition: "Endodoncia", status: "bg-amber-100 text-amber-700" },
  { tooth: "45", condition: "Sellante", status: "bg-emerald-100 text-emerald-700" },
] as const

// FDI notation — upper and lower rows
const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28]
const lowerTeeth = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]

// Teeth with conditions for visual marking
const markedTeeth: Record<number, string> = {
  16: "bg-red-200 border-red-400",
  26: "bg-brand-200 border-brand-400",
  37: "bg-amber-200 border-amber-400",
  45: "bg-emerald-200 border-emerald-400",
}

export function PatientRecordMockup() {
  return (
    <div className="surface-elevated-strong mx-auto max-w-[900px] overflow-hidden rounded-[20px] bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border-light bg-surface-soft px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
          <div className="h-3 w-3 rounded-full bg-green-400/60" />
        </div>
        <div className="ml-4 flex-1 rounded-md bg-surface px-3 py-1 text-xs text-muted">
          app.clinicflow360.com/pacientes/andrea-martinez
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Patient header */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">
            AM
          </div>
          <div>
            <p className="text-base font-semibold text-ink">
              Andrea Martínez
            </p>
            <p className="text-sm text-muted">29 años · Paciente activa</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 flex gap-1 overflow-x-auto border-b border-border-light">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`whitespace-nowrap px-3.5 py-2.5 text-sm font-medium transition-colors ${
                i === 2
                  ? "border-b-2 border-brand-600 text-brand-600"
                  : "text-muted hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Odontogram */}
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
            Odontograma — FDI
          </p>

          {/* Tooth grid */}
          <div className="overflow-x-auto">
            <div className="mx-auto flex w-fit flex-col gap-2">
              {/* Upper row */}
              <div className="flex gap-1">
                {upperTeeth.map((tooth) => (
                  <div
                    key={tooth}
                    className={`flex h-7 w-7 items-center justify-center rounded border text-[9px] font-medium sm:h-8 sm:w-8 sm:text-[10px] ${
                      markedTeeth[tooth] ?? "border-border-light bg-surface-soft text-muted"
                    }`}
                  >
                    {tooth}
                  </div>
                ))}
              </div>
              {/* Midline */}
              <div className="mx-auto h-px w-[95%] bg-border-light" />
              {/* Lower row */}
              <div className="flex gap-1">
                {lowerTeeth.map((tooth) => (
                  <div
                    key={tooth}
                    className={`flex h-7 w-7 items-center justify-center rounded border text-[9px] font-medium sm:h-8 sm:w-8 sm:text-[10px] ${
                      markedTeeth[tooth] ?? "border-border-light bg-surface-soft text-muted"
                    }`}
                  >
                    {tooth}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Treatment list */}
          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
              Tratamientos
            </p>
            <div className="space-y-1.5">
              {treatments.map((t) => (
                <div
                  key={t.tooth}
                  className="flex items-center gap-3 rounded-[8px] bg-surface-soft px-3 py-2"
                >
                  <span className="w-8 text-sm font-semibold tabular-nums text-ink">
                    {t.tooth}
                  </span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-medium ${t.status}`}
                  >
                    {t.condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
