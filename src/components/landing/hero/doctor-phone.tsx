import Image from "next/image"

export function DoctorPhone() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[32px] border-[5px] border-[#1a1a1a] bg-black sm:w-[240px] sm:rounded-[36px] sm:border-[6px] lg:w-[270px] lg:rounded-[40px] lg:border-[7px]"
      style={{
        boxShadow: [
          "0 0 0 1px rgba(255,255,255,0.08)",
          "0 4px 8px rgba(0,0,0,0.15)",
          "0 16px 32px rgba(0,0,0,0.15)",
          "0 32px 64px rgba(0,0,0,0.2)",
        ].join(","),
      }}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-[6px] z-10 h-[20px] w-[72px] -translate-x-1/2 rounded-full bg-black sm:top-[8px] sm:h-[24px] sm:w-[88px] lg:top-[9px] lg:h-[26px] lg:w-[100px]" />

      {/* Real screenshot */}
      <div className="relative overflow-hidden rounded-[27px] sm:rounded-[30px] lg:rounded-[33px]">
        <Image
          src="/landing/screenshots/mobile/agenda.webp"
          alt="App móvil ClinicFlow360 — agenda del doctor con citas del día"
          width={1280}
          height={2856}
          className="w-full"
        />
      </div>

      {/* Glass reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] rounded-[27px] sm:rounded-[30px] lg:rounded-[33px]"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 40%)",
        }}
      />
    </div>
  )
}
