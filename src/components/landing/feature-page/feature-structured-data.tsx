import { siteConfig } from "@/lib/config"
import { featurePagesCopy, featurePath, type FeaturePage } from "@/data/feature-pages"

/** JSON-LD for a feature page: breadcrumb trail plus its FAQ. */
export function FeatureStructuredData({ page }: { page: FeaturePage }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: featurePagesCopy.homeLabel, path: "" },
          { name: featurePagesCopy.indexName, path: featurePagesCopy.basePath },
          { name: page.name, path: featurePath(page.slug) },
        ].map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.path}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
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
