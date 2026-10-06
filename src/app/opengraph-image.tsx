import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/config"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const features = [
  "Agenda inteligente",
  "Odontograma digital",
  "Recepcionista IA en WhatsApp",
  "App móvil para doctores",
]

export default function OpengraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(45deg, #025f9a, #037ecc, #38bdf8)",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
              <path d="M9 9c1.5 1 4.5 1 6 0" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            <span>ClinicFlow</span>
            <span style={{ color: "#32b4fe" }}>360</span>
          </div>
        </div>

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
