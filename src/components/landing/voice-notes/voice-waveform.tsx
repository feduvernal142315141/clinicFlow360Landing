"use client"

/**
 * Animated voice waveform using CSS scaleY transforms.
 * 24 bars with randomized heights for visual variety.
 * High performance: only transform + opacity animated.
 */
export function VoiceWaveform() {
  // Deterministic "random" heights for SSR consistency
  const bars = [
    0.3, 0.6, 0.4, 0.8, 0.5, 0.9, 0.4, 0.7, 0.6, 1.0, 0.5, 0.8, 0.3, 0.7,
    0.5, 0.9, 0.6, 0.4, 0.8, 0.3, 0.7, 0.5, 0.6, 0.4,
  ]

  return (
    <div
      className="flex items-center justify-center gap-[3px]"
      aria-hidden="true"
    >
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-red-400/70"
          style={{
            height: 24,
            transform: `scaleY(${height})`,
            animation: `waveform 1.2s ease-in-out ${i * 0.05}s infinite alternate`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes waveform {
          0% {
            transform: scaleY(var(--from, 0.3));
          }
          100% {
            transform: scaleY(var(--to, 0.8));
          }
        }
      `}</style>
    </div>
  )
}
