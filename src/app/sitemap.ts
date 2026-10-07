import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/config"
import { featurePages, featurePagesCopy, featurePath } from "@/data/feature-pages"

const legalPages = ["privacy", "terms", "data-deletion"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${siteConfig.trialSignupPath}`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...[featurePagesCopy.basePath, ...featurePages.map((page) => featurePath(page.slug))].map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...legalPages.map((slug) => ({
      url: `${siteConfig.url}/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ]
}
