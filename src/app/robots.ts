import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/config"

// AI search and assistant crawlers, allowed explicitly so the site can be
// read and cited by ChatGPT, Claude, Perplexity, Gemini and Copilot.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "bingbot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
