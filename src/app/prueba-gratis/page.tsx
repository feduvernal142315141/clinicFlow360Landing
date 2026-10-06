import type { Metadata } from "next"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"
import { TrialSignupForm } from "@/components/landing/trial-signup/trial-signup-form"
import { trialSignupCopy } from "@/data/trial-signup"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: trialSignupCopy.metaTitle,
  description: trialSignupCopy.metaDescription,
  alternates: { canonical: siteConfig.trialSignupPath },
  openGraph: {
    title: `${trialSignupCopy.metaTitle} | ${siteConfig.name}`,
    description: trialSignupCopy.metaDescription,
    url: siteConfig.trialSignupPath,
    images: ["/opengraph-image"],
    siteName: siteConfig.name,
    locale: "es_LA",
    type: "website",
  },
}

export default function TrialSignupPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:pt-40" style={{ background: "#060d1a" }}>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400">
              {trialSignupCopy.eyebrow}
            </p>
            <h1 className="text-balance mt-4 text-[32px] font-black leading-[1.1] tracking-tight text-white sm:text-[44px]">
              {trialSignupCopy.heading}
            </h1>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-slate-400">
              {trialSignupCopy.intro}
            </p>

            <ul className="mt-8 space-y-3 text-[14px] text-slate-300">
              {trialSignupCopy.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2.5">
                  <span className="font-bold text-emerald-400">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
              {trialSignupCopy.stepsTitle}
            </h2>
            <ol className="mt-4 space-y-3 text-[14px] leading-relaxed text-slate-400">
              {trialSignupCopy.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-950 text-[12px] font-bold text-brand-300">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div
            className="h-fit rounded-3xl p-6 shadow-tier-3 sm:p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <TrialSignupForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
