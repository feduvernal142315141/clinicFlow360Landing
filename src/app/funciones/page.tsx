import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"
import { FeatureCardList } from "@/components/landing/feature-page/feature-card-list"
import { featurePages, featurePagesCopy } from "@/data/feature-pages"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: featurePagesCopy.indexMetaTitle,
  description: featurePagesCopy.indexMetaDescription,
  alternates: { canonical: featurePagesCopy.basePath },
  openGraph: {
    title: `${featurePagesCopy.indexMetaTitle} | ${siteConfig.name}`,
    description: featurePagesCopy.indexMetaDescription,
    url: featurePagesCopy.basePath,
    images: ["/opengraph-image"],
    siteName: siteConfig.name,
    locale: "es_LA",
    type: "website",
  },
}

export default function FeaturesIndexPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="min-h-screen px-4 pb-24 pt-32 sm:px-6 lg:pt-40" style={{ background: "#060d1a" }}>
        <div className="mx-auto max-w-5xl">
          <header className="max-w-3xl">
            <h1 className="text-balance text-[32px] font-black leading-[1.1] tracking-tight text-white sm:text-[48px]">
              {featurePagesCopy.indexHeading}
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-slate-300 sm:text-[18px]">
              {featurePagesCopy.indexIntro}
            </p>
            <Link href={siteConfig.trialSignupPath} className="btn-primary mt-8 inline-flex h-[50px] items-center justify-center rounded-full px-7 text-[15px]">
              {featurePagesCopy.ctaPrimary}
            </Link>
          </header>

          <div className="mt-14">
            <FeatureCardList pages={featurePages} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
