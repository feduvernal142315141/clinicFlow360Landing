import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/config"

const legalPages = ["privacy", "terms", "data-deletion"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...legalPages.map((slug) => ({
      url: `${siteConfig.url}/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ]
}
