import Image from "next/image"

export function AgendaPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/landing/screenshots/agenda-dark.webp"
        alt="Vista mensual de la agenda con citas por especialista, etiquetas de estado y filtros"
        width={1400}
        height={780}
        className="w-full rounded-xl"
      />
    </div>
  )
}
