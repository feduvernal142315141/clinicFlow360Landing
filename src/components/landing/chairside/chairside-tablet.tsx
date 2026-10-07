"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { easeOutPremium } from "@/lib/motion/easings"
import { chairsideCopy } from "@/data/home"

type ScreenId = (typeof chairsideCopy.screens)[number]["id"]

/** Tablet frame that switches between real ClinicFlow Chairside screens. */
export function ChairsideTablet() {
  const [active, setActive] = useState<ScreenId>("odontograma")
  const current = chairsideCopy.screens.find((screen) => screen.id === active)!

  return (
    <div>
      <div
        className="rounded-[22px] border-[8px] border-[#141a24] bg-black sm:rounded-[34px] sm:border-[12px]"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 100px rgba(0,0,0,0.5)" }}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#0f172a] sm:rounded-[22px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOutPremium }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div role="tablist" aria-label={chairsideCopy.screensLabel} className="mt-5 flex flex-wrap justify-center gap-2">
        {chairsideCopy.screens.map((screen) => (
          <button
            key={screen.id}
            role="tab"
            aria-selected={screen.id === active}
            onClick={() => setActive(screen.id)}
            className={`cursor-pointer rounded-full px-4 py-2 text-[12px] font-bold transition-colors sm:text-[13px] ${
              screen.id === active
                ? "bg-brand-500/20 text-brand-300"
                : "bg-white/[0.04] text-slate-400 hover:text-slate-200"
            }`}
          >
            {screen.label}
          </button>
        ))}
      </div>
    </div>
  )
}
