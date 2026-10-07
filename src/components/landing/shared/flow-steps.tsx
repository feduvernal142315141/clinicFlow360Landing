import type { CSSProperties } from "react"

export interface FlowStep {
  label: string
  detail?: string
}

// Literal class names per breakpoint so Tailwind can see them.
const layouts = {
  sm: { list: "sm:flex-row", item: "sm:flex-1 sm:flex-row", node: "sm:flex-col sm:justify-center sm:px-3 sm:text-center", arrow: "sm:rotate-0" },
  md: { list: "md:flex-row", item: "md:flex-1 md:flex-row", node: "md:flex-col md:justify-center md:px-3 md:text-center", arrow: "md:rotate-0" },
  lg: { list: "lg:flex-row", item: "lg:flex-1 lg:flex-row", node: "lg:flex-col lg:justify-center lg:px-3 lg:text-center", arrow: "lg:rotate-0" },
  never: { list: "", item: "", node: "", arrow: "" },
} as const

/**
 * Connected steps that light up one after another (CSS only).
 * Stacks vertically on narrow screens; `horizontalFrom` picks where it becomes a row.
 */
export function FlowSteps({
  steps,
  horizontalFrom = "md",
  className = "",
}: {
  steps: readonly FlowStep[]
  horizontalFrom?: keyof typeof layouts
  className?: string
}) {
  const layout = layouts[horizontalFrom]

  return (
    <ol className={`flex flex-col gap-1.5 ${layout.list} ${className}`}>
      {steps.map((step, index) => (
        <li key={step.label} className={`flex min-w-0 flex-col gap-1.5 ${layout.item}`}>
          <div
            className={`flow-step flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 ${layout.node}`}
            style={{ "--flow-index": index, "--flow-count": steps.length } as CSSProperties}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-950 text-[11px] font-bold text-brand-300">
              {index + 1}
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-bold leading-snug text-white">{step.label}</span>
              {step.detail && <span className="mt-0.5 block text-[12px] leading-snug text-slate-400">{step.detail}</span>}
            </span>
          </div>
          {index < steps.length - 1 && (
            <span aria-hidden="true" className={`flex shrink-0 rotate-90 items-center justify-center self-center text-slate-600 ${layout.arrow}`}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}
