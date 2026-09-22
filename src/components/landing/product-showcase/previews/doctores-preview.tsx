import Image from "next/image"

export function DoctoresPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/landing/screenshots/dashboard-light.webp"
        alt="Dashboard con ocupación de doctores, tasa de asistencia y señales operativas"
        width={1400}
        height={780}
        className="w-full rounded-xl"
      />
    </div>
  )
}
