import Image from "next/image"

export function ClinicaPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/landing/screenshots/odontograma-light.webp"
        alt="Odontograma interactivo FDI con arcada superior e inferior, dientes individuales y estados clínicos"
        width={1400}
        height={780}
        className="w-full rounded-xl"
      />
    </div>
  )
}
