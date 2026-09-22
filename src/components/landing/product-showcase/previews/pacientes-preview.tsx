import Image from "next/image"

export function PacientesPreview() {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/landing/screenshots/pacientes-dark.webp"
        alt="Lista de pacientes con búsqueda, estados activos, contacto y acciones rápidas"
        width={1400}
        height={780}
        className="w-full rounded-xl"
      />
    </div>
  )
}
