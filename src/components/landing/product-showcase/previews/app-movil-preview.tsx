import Image from "next/image"

export function AppMovilPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/landing/screenshots/diente-modal-light.webp"
        alt="Modal de diente con selección de superficies vestibular, oclusal y palatino, plantillas ICDAS y estados clínicos"
        width={1400}
        height={780}
        className="w-full rounded-xl"
      />
    </div>
  )
}
