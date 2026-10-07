import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/config"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const features = [
  "Recepcionista IA 24/7",
  "Odontograma por voz",
  "Agenda y expediente",
  "App móvil y tablet",
]

export default async function OpengraphImage() {
  const logoFile = await readFile(join(process.cwd(), "public/brand/logo-horizontal-dark.png"))
  const logo = `data:image/png;base64,${logoFile.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#ffffff",
          background:
            "radial-gradient(circle at 80% 0%, rgba(7,156,251,0.35), transparent 55%), linear-gradient(135deg, #071525, #050e1a)",
        }}
      >
        <img src={logo} alt="" width={397} height={88} />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>Software para clínicas</span>
            <span style={{ color: "#32b4fe" }}>dentales con IA</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {features.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 999,
                  fontSize: 26,
                  color: "#cbd5e1",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
