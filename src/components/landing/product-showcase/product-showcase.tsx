import { platformCopy } from "@/data/home"
import { SectionReveal } from "../section-reveal"
import { ProductNavigator } from "./product-navigator"
import { BrandToothOutline } from "../shared/brand-logo"

export function ProductShowcase() {
  return (
    <section
      id="producto"
      className="relative px-4 py-20 sm:px-6 lg:py-24"
      style={{ background: "linear-gradient(180deg, #080e1c 0%, #0a1628 100%)" }}
    >
      {/* Dental decoration — top right */}
      <div className="pointer-events-none absolute right-4 top-10 hidden h-72 w-72 text-white/[0.03] opacity-75 lg:block" aria-hidden="true">
        <BrandToothOutline className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400 sm:text-xs">
              {platformCopy.eyebrow}
            </p>
            <h2 className="headline-section text-balance text-white text-[28px] sm:text-[36px] lg:text-[42px]">
              {platformCopy.heading}
            </h2>
            <p className="mt-4 text-[15px] text-slate-400 sm:text-base">
              {platformCopy.text}
            </p>
          </div>
        </SectionReveal>

        <ProductNavigator />
      </div>
    </section>
  )
}
