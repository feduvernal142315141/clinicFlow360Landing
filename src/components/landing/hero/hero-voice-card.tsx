import { heroCopy, voiceCopy } from "@/data/home"
import { TabletOdontogram } from "../voice/tablet-odontogram"

/** Tablet-style card: a voice command and the odontogram reacting to it. */
export function HeroVoiceCard() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl sm:w-[300px] lg:w-[340px]"
      style={{
        background: "rgba(9,22,38,0.94)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
            <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 11a7 7 0 0014 0M12 18v4" />
            </svg>
          </div>
          <div>
            <div className="text-[13px] font-bold text-white">{heroCopy.stage.voiceTitle}</div>
            <div className="text-[11px] text-slate-400">{voiceCopy.demo.screenTitle} · tablet</div>
          </div>
        </div>
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" aria-hidden="true" />
      </div>

      <div className="p-3 sm:p-4">
        <p className="rounded-xl border border-white/[0.06] bg-white/[0.06] px-3.5 py-2 text-[13px] font-medium text-slate-100">
          «{heroCopy.stage.voiceCommand}»
        </p>
        <div className="mt-3 overflow-hidden rounded-xl border border-white/[0.08]">
          <TabletOdontogram
            changes={{ mesial34: true }}
            zoom="always"
            alt={voiceCopy.demo.odontogramLabel}
            sizes="800px"
          />
        </div>
        <p className="mt-3 flex items-center gap-2 text-[12px] font-semibold text-emerald-400">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-950 text-[10px]">✓</span>
          {heroCopy.stage.voiceResult}
        </p>
      </div>
    </div>
  )
}
