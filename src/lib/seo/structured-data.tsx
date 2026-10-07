import { siteConfig } from "@/lib/config"
import { plans } from "@/data/pricing"

const organizationId = `${siteConfig.url}/#organization`
const websiteId = `${siteConfig.url}/#website`

/**
 * Organization + WebSite + SoftwareApplication as a single linked @graph.
 * Offers are derived from data/pricing so schema never drifts from the UI.
 */
export function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/brand/app-icon-512.png`,
        description: siteConfig.description,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "es",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Software de gestión para clínicas dentales",
        operatingSystem: "Web, iOS, Android",
        description: siteConfig.description,
        url: siteConfig.url,
        inLanguage: "es",
        image: `${siteConfig.url}/opengraph-image`,
        publisher: { "@id": organizationId },
        offers: plans
          .filter((plan) => plan.price !== null)
          .map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            description: plan.description,
            price: plan.price,
            priceCurrency: "USD",
            url: `${siteConfig.url}/#precios`,
          })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
