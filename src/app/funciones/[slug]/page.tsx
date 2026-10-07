import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/landing/navbar/navbar"
import { Footer } from "@/components/landing/footer/footer"
import { FeatureCardList } from "@/components/landing/feature-page/feature-card-list"
import { FeatureStructuredData } from "@/components/landing/feature-page/feature-structured-data"
import { featurePages, featurePagesCopy, featurePath } from "@/data/feature-pages"
import { siteConfig } from "@/lib/config"

export const dynamicParams = false

export function generateStaticParams() {
  return featurePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps<"/funciones/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const page = featurePages.find((item) => item.slug === slug)
  if (!page) return {}

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: featurePath(page.slug) },
    openGraph: {
      title: `${page.metaTitle} | ${siteConfig.name}`,
      description: page.metaDescription,
      url: featurePath(page.slug),
      images: ["/opengraph-image"],
      siteName: siteConfig.name,
      locale: "es_LA",
      type: "website",
    },
  }
}

export default async function FeaturePageRoute({ params }: PageProps<"/funciones/[slug]">) {
  const { slug } = await params
  const page = featurePages.find((item) => item.slug === slug)
  if (!page) notFound()

  const related = featurePages.filter((item) => item.slug !== page.slug)
  const isPortrait = page.screenshot ? page.screenshot.height > page.screenshot.width : false

  return (
    <>
      <FeatureStructuredData page={page} />
      <Navbar />

      <main id="main-content" className="px-4 pb-24 pt-32 sm:px-6 lg:pt-40" style={{ background: "#060d1a" }}>
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Ruta de navegación" className="text-[12px] text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition-colors hover:text-white">{featurePagesCopy.homeLabel}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={featurePagesCopy.basePath} className="transition-colors hover:text-white">{featurePagesCopy.indexName}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-300">{page.name}</li>
            </ol>
          </nav>

          <header className="mt-8 max-w-3xl">
            <h1 className="text-balance text-[32px] font-black leading-[1.1] tracking-tight text-white sm:text-[48px]">
              {page.heading}
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-slate-300 sm:text-[18px]">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={siteConfig.trialSignupPath} className="btn-primary inline-flex h-[50px] items-center justify-center rounded-full px-7 text-[15px]">
                {featurePagesCopy.ctaPrimary}
              </Link>
              <Link href="/#precios" className="inline-flex h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-6 text-[15px] font-semibold text-white transition hover:bg-white/10">
                {featurePagesCopy.plansLink}
              </Link>
            </div>
          </header>

          {page.screenshot && (
            <div
              className={`mt-14 overflow-hidden shadow-tier-3 ${isPortrait ? "mx-auto max-w-[280px] rounded-[32px]" : "rounded-2xl sm:rounded-3xl"}`}
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Image
                src={page.screenshot.src}
                alt={page.screenshot.alt}
                width={page.screenshot.width}
                height={page.screenshot.height}
                sizes={isPortrait ? "280px" : "(min-width: 1024px) 1024px, 100vw"}
                className="w-full"
                priority
              />
            </div>
          )}

          <section className="mt-20">
            <h2 className="text-[26px] font-black tracking-tight text-white sm:text-[32px]">
              {featurePagesCopy.capabilitiesTitle}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.capabilities.map((capability) => (
                <li key={capability.title} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
                  <h3 className="text-[16px] font-bold text-white">{capability.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{capability.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 rounded-2xl border border-brand-500/20 bg-brand-950/30 p-6 sm:p-8">
            <h2 className="text-[18px] font-bold text-white">{featurePagesCopy.planTitle}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{page.planNote}</p>
            <Link href="/#precios" className="mt-4 inline-block text-[14px] font-semibold text-brand-300 underline-offset-2 hover:underline">
              {featurePagesCopy.plansLink} →
            </Link>
          </section>

          <section className="mt-20 max-w-3xl">
            <h2 className="text-[26px] font-black tracking-tight text-white sm:text-[32px]">
              {featurePagesCopy.faqTitle}
            </h2>
            <dl className="mt-8 space-y-8">
              {page.faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-[17px] font-bold text-white">{item.question}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-slate-400">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-20 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 text-center sm:p-12">
            <h2 className="text-[26px] font-black tracking-tight text-white sm:text-[32px]">{featurePagesCopy.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-400">{featurePagesCopy.ctaText}</p>
            <Link href={siteConfig.trialSignupPath} className="btn-primary mt-8 inline-flex h-[52px] items-center justify-center rounded-full px-8 text-[15px]">
              {featurePagesCopy.ctaPrimary}
            </Link>
          </section>

          <section className="mt-20">
            <h2 className="mb-8 text-[22px] font-black tracking-tight text-white">{featurePagesCopy.relatedTitle}</h2>
            <FeatureCardList pages={related} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
