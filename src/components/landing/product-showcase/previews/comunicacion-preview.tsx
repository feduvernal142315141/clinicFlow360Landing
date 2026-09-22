import Image from "next/image"

export function ComunicacionPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/landing/screenshots/paciente-ficha-dark.webp"
        alt="Ficha de paciente con historia clínica, cronología de visitas, archivos e imágenes clínicas"
        width={1400}
        height={780}
        className="w-full rounded-xl"
      />
    </div>
  )
}
