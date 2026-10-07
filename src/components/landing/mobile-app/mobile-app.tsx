"use client"

import { useState } from "react"
import Image from "next/image"
import { mobileCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { SectionHeader } from "../shared/section-header"

const { screens } = mobileCopy
type Screen = (typeof screens)[number]

/* ── Phone frame. Every capture stays mounted and only its opacity changes,
      so switching screens never reloads an image or moves the layout. ── */
function Phone({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-[13%/6%] border-[6px] border-[#1a1a1a] bg-black"
      style={{
        boxShadow: [
          "0 0 0 1px rgba(255,255,255,0.08)",
          "0 8px 16px rgba(0,0,0,0.2)",
          "0 24px 48px rgba(0,0,0,0.25)",
          "0 48px 96px rgba(0,0,0,0.3)",
        ].join(","),
      }}
    >
      <div className="relative aspect-[1080/2400]">
        {screens.map((screen, index) => (
          <Image
            key={screen.id}
            src={screen.src}
            alt={index === activeIndex ? screen.alt : ""}
            aria-hidden={index !== activeIndex}
            fill
            sizes="270px"
            className={`object-cover transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
      {/* Glass reflection */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 30%, transparent 60%)" }}
        aria-hidden="true"
      />
    </div>
  )
}

export function MobileApp() {
  const [activeIndex, setActiveIndex] = useState(0)
  const count = screens.length
  const previousIndex = (activeIndex + count - 1) % count
  const nextIndex = (activeIndex + 1) % count

  return (
    <section
      id="app-movil"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
      style={{ background: "linear-gradient(180deg, #060d1b 0%, #0a1628 40%, #0d1f3c 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -bottom-20 right-[10%] h-96 w-96"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader eyebrow={mobileCopy.eyebrow} heading={mobileCopy.heading} text={mobileCopy.text} />

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          {/* ── Phones: the active screen in front, its neighbours behind ── */}
          <SectionReveal className="lg:order-2">
            <div className="relative mx-auto flex h-[470px] max-w-[560px] items-center justify-center sm:h-[620px]">
              {/* Glow behind the phones */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:h-[560px] sm:w-[560px]"
                style={{ background: "radial-gradient(circle, rgba(3,126,204,0.22) 0%, rgba(3,126,204,0.06) 45%, transparent 70%)", filter: "blur(50px)" }}
                aria-hidden="true"
              />

              {[
                { index: previousIndex, side: "left-0 -rotate-6 sm:left-2" },
                { index: nextIndex, side: "right-0 rotate-6 sm:right-2" },
              ].map(({ index, side }) => (
                <button
                  key={side}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${mobileCopy.showScreen} ${screens[index]!.label}`}
                  className={`absolute top-1/2 w-[150px] -translate-y-1/2 cursor-pointer opacity-45 transition-opacity duration-300 hover:opacity-80 sm:w-[210px] ${side}`}
                >
                  <Phone activeIndex={index} />
                </button>
              ))}

              <div className="relative z-10 w-[205px] sm:w-[270px]">
                <Phone activeIndex={activeIndex} />
              </div>
            </div>

            {/* Position dots */}
            <div className="mt-6 flex justify-center gap-1.5">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  aria-label={`${mobileCopy.showScreen} ${screen.label}`}
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-brand-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </SectionReveal>

          {/* ── Feature list (drives the phones) ── */}
          <div role="tablist" aria-label={mobileCopy.screensLabel} aria-orientation="vertical" className="flex w-full flex-col gap-1 lg:order-1 lg:max-w-[440px]">
            {screens.map((screen, index) => (
              <FeatureRow
                key={screen.id}
                screen={screen}
                isActive={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* ── Capability strip ── */}
        <SectionReveal>
          <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2 sm:mt-16">
            {mobileCopy.capabilities.map((capability) => (
              <li key={capability} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-slate-300">
                {capability}
              </li>
            ))}
          </ul>
        </SectionReveal>

        {/* ── One platform, three contexts ── */}
        <SectionReveal>
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <p className="text-center text-[20px] font-black tracking-tight text-white sm:text-[24px]">
              {mobileCopy.contextsTitle}
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {mobileCopy.contexts.map((context) => (
                <div key={context.device} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-300">{context.device}</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-slate-300">{context.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

/* ── Feature row — selects which screen the phones show.
      Title and description are always rendered, so selecting a row never changes heights. ── */
function FeatureRow({ screen, isActive, onActivate }: { screen: Screen; isActive: boolean; onActivate: () => void }) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onActivate}
      className={`group w-full cursor-pointer rounded-2xl border-l-[3px] px-5 py-3.5 text-left transition-colors duration-300 ${
        isActive ? "border-brand-400 bg-brand-500/[0.08]" : "border-transparent hover:bg-white/[0.03]"
      }`}
    >
      <h3 className={`text-[16px] font-bold leading-snug transition-colors duration-300 sm:text-[18px] ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
        {screen.label}
      </h3>
      <p className={`mt-1 text-[13px] leading-relaxed transition-colors duration-300 sm:text-[14px] ${isActive ? "text-slate-300" : "text-slate-500 group-hover:text-slate-400"}`}>
        {screen.desc}
      </p>
    </button>
  )
}
