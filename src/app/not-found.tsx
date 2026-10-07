import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"
import { featurePagesCopy } from "@/data/feature-pages"
import { notFoundCopy } from "@/data/not-found"

export const metadata: Metadata = {
  title: notFoundCopy.title,
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex min-h-[70vh] items-center px-4 pb-24 pt-32 sm:px-6" style={{ background: "#060d1a" }}>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[13px] font-bold tracking-[0.12em] text-brand-400">404</p>
          <h1 className="text-balance mt-4 text-[32px] font-black leading-[1.1] tracking-tight text-white sm:text-[44px]">
            {notFoundCopy.heading}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-slate-400">{notFoundCopy.text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary inline-flex h-[50px] items-center justify-center rounded-full px-7 text-[15px]">
              {notFoundCopy.home}
            </Link>
            <Link href={featurePagesCopy.basePath} className="inline-flex h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-6 text-[15px] font-semibold text-white transition hover:bg-white/10">
              {notFoundCopy.features}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
