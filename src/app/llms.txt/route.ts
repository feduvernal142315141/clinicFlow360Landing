import { siteConfig } from "@/lib/config"
import { faqItems } from "@/data/faq"
import { featurePages, featurePagesCopy, featurePath } from "@/data/feature-pages"
import { plans } from "@/data/pricing"

export const dynamic = "force-static"

/**
 * llms.txt — a plain-Markdown summary of the site for AI assistants.
 * Built from the same data files as the pages, so it never drifts from them.
 */
export function GET() {
  const url = (path: string) => `${siteConfig.url}${path}`

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${featurePagesCopy.indexIntro} ${siteConfig.description}`,
    "",
    "## Funciones",
    "",
    ...featurePages.map((page) => `- [${page.name}](${url(featurePath(page.slug))}): ${page.intro}`),
    "",
    "## Planes y precios",
    "",
    ...plans.map((plan) => {
      const features = plan.features.map((feature) => feature.name)
      return `- **${plan.name}** — USD ${plan.price} al mes. ${plan.description} ${plan.includesLabel ?? "Incluye:"} ${features.join("; ")}.`
    }),
    "",
    `Prueba gratis de 14 días, sin tarjeta de crédito: ${url(siteConfig.trialSignupPath)}`,
    "",
    "## Preguntas frecuentes",
    "",
    ...[...faqItems, ...featurePages.flatMap((page) => page.faq)].flatMap((item) => [
      `### ${item.question}`,
      "",
      item.answer,
      "",
    ]),
    "## Legal",
    "",
    `- [Política de Privacidad](${url("/privacy")})`,
    `- [Condiciones del Servicio](${url("/terms")})`,
    `- [Eliminación de Datos](${url("/data-deletion")})`,
    "",
  ].join("\n")

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
