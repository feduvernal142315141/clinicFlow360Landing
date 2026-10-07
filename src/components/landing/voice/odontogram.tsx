/**
 * Simplified FDI odontogram drawn in SVG.
 * Each tooth uses the classic five-surface diagram (mesial, distal,
 * vestibular, lingual and occlusal) so a single surface can be highlighted.
 */

export type Surface = "mesial" | "occlusal"

export interface ToothState {
  /** Surfaces that currently have a registered condition. */
  conditions?: Surface[]
  /** Tooth currently open/selected by the doctor. */
  active?: boolean
  /** Plays a one-off ring when a command has just acted on this tooth. */
  pulse?: boolean
  /** Short tag shown under the tooth, e.g. "ICDAS 4". */
  tag?: string
}

const UPPER = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28]
const LOWER = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]
/** Lower-left quadrant only: enlarged view for narrow screens. */
const LOWER_LEFT = [31, 32, 33, 34, 35, 36, 37, 38]

const TOOTH = 34
const GAP = 8
const MIDLINE_GAP = 14
const ROW_HEIGHT = 92

const CONDITION = "#f87171"
const OUTLINE = "rgba(148,163,184,0.45)"
const FILL = "rgba(148,163,184,0.08)"

/** Teeth right of the midline (quadrants 2 and 3) have mesial on their left side. */
function mesialOnLeft(tooth: number) {
  const quadrant = Math.floor(tooth / 10)
  return quadrant === 2 || quadrant === 3
}

function Tooth({ number, x, y, state }: { number: number; x: number; y: number; state?: ToothState }) {
  const s = TOOTH
  const inner = s * 0.3
  const hasCondition = (surface: Surface) => state?.conditions?.includes(surface) ?? false
  const left = `0,0 ${inner},${inner} ${inner},${s - inner} 0,${s}`
  const right = `${s},0 ${s - inner},${inner} ${s - inner},${s - inner} ${s},${s}`
  const top = `0,0 ${s},0 ${s - inner},${inner} ${inner},${inner}`
  const bottom = `0,${s} ${s},${s} ${s - inner},${s - inner} ${inner},${s - inner}`
  const mesial = mesialOnLeft(number) ? left : right
  const distal = mesialOnLeft(number) ? right : left
  const surfaceStyle = { transition: "fill 400ms ease" }

  return (
    <g transform={`translate(${x} ${y})`}>
      {state?.active && (
        <rect
          x={-5}
          y={-5}
          width={s + 10}
          height={s + 10}
          rx={9}
          fill="rgba(50,180,254,0.10)"
          stroke="#32b4fe"
          strokeWidth={1.5}
        />
      )}
      {state?.pulse && (
        <rect className="tooth-pulse" x={-4} y={-4} width={s + 8} height={s + 8} rx={8} fill="none" stroke="#32b4fe" />
      )}
      <polygon points={top} fill={FILL} stroke={OUTLINE} strokeWidth={1} />
      <polygon points={bottom} fill={FILL} stroke={OUTLINE} strokeWidth={1} />
      <polygon points={distal} fill={FILL} stroke={OUTLINE} strokeWidth={1} />
      <polygon points={mesial} fill={hasCondition("mesial") ? CONDITION : FILL} stroke={OUTLINE} strokeWidth={1} style={surfaceStyle} />
      <rect
        x={inner}
        y={inner}
        width={s - inner * 2}
        height={s - inner * 2}
        fill={hasCondition("occlusal") ? CONDITION : FILL}
        stroke={OUTLINE}
        strokeWidth={1}
        style={surfaceStyle}
      />
      <text
        x={s / 2}
        y={s + 15}
        textAnchor="middle"
        fontSize={11}
        fontWeight={state?.active || state?.conditions?.length ? 700 : 500}
        fill={state?.active || state?.conditions?.length ? "#ffffff" : "#64748b"}
      >
        {number}
      </text>
      {state?.tag && (
        <text x={s / 2} y={s + 29} textAnchor="middle" fontSize={9} fontWeight={700} fill="#fca5a5">
          {state.tag}
        </text>
      )}
    </g>
  )
}

function rowWidth(count: number, split: boolean) {
  return count * TOOTH + (count - 1) * GAP + (split ? MIDLINE_GAP : 0)
}

function Row({ teeth, y, split, states }: { teeth: number[]; y: number; split: boolean; states: Record<number, ToothState> }) {
  return (
    <>
      {teeth.map((number, index) => {
        const pastMidline = split && index >= teeth.length / 2
        const x = index * (TOOTH + GAP) + (pastMidline ? MIDLINE_GAP : 0)
        return <Tooth key={number} number={number} x={x} y={y} state={states[number]} />
      })}
    </>
  )
}

export function Odontogram({
  states,
  compact = false,
  label,
  className,
}: {
  states: Record<number, ToothState>
  /** Show only the lower-left quadrant, enlarged. */
  compact?: boolean
  label: string
  className?: string
}) {
  const padding = 10
  const width = rowWidth(compact ? LOWER_LEFT.length : UPPER.length, !compact) + padding * 2
  const height = (compact ? ROW_HEIGHT : ROW_HEIGHT * 2) + padding * 2

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={label} className={className}>
      <g transform={`translate(${padding} ${padding})`}>
        {compact ? (
          <Row teeth={LOWER_LEFT} y={0} split={false} states={states} />
        ) : (
          <>
            <Row teeth={UPPER} y={0} split states={states} />
            <Row teeth={LOWER} y={ROW_HEIGHT} split states={states} />
            <line
              x1={rowWidth(UPPER.length, true) / 2}
              y1={-4}
              x2={rowWidth(UPPER.length, true) / 2}
              y2={ROW_HEIGHT * 2 - 12}
              stroke="rgba(148,163,184,0.18)"
              strokeDasharray="3 4"
            />
          </>
        )}
      </g>
    </svg>
  )
}
