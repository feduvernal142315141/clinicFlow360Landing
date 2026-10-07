import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(45deg, #025f9a, #037ecc, #38bdf8)",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9 1 2 1.5 5 3 5s2-3 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z" />
          <path d="M9 9c1.5 1 4.5 1 6 0" />
        </svg>
      </div>
    ),
    size,
  )
}
