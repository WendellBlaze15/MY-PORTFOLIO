/**
 * Illustrated developer seen from behind, typing on a laptop. Every few
 * seconds he turns to face the viewer — spiky hair, shades, smirk — then gets
 * back to work. Pure SVG + CSS animations (see the `.coder-*` rules in
 * globals.css); static under reduced motion.
 */

const CODE_LINES = [
  { x: 68, y: 43, w: 28, color: "#c4b5fd" },
  { x: 100, y: 43, w: 20, color: "#7dd3fc" },
  { x: 74, y: 51, w: 46, color: "#86efac" },
  { x: 74, y: 59, w: 24, color: "#fda4af" },
  { x: 102, y: 59, w: 38, color: "#7dd3fc" },
  { x: 80, y: 67, w: 56, color: "#fcd34d" },
  { x: 80, y: 75, w: 30, color: "#86efac" },
  { x: 74, y: 83, w: 18, color: "#c4b5fd" },
  { x: 68, y: 91, w: 12, color: "#7dd3fc" },
];

const SKIN = "#e8b08a";
const SKIN_SHADE = "#d49a74";
const HAIR = "#1d1829";
const HAIR_LIGHT = "#2e2640";
const LENS_LEFT = "M98.5 104h18.5l-1.2 8.6q-.6 3.6-4.2 3.6h-8q-3.8 0-4.4-3.8z";
const LENS_RIGHT = "M141.5 104H123l1.2 8.6q.6 3.6 4.2 3.6h8q3.8 0 4.4-3.8z";

/**
 * The character's face-forward head: spiky hair, shades, smirk. Shared by the
 * hero turn-around and the footer avatar; `idPrefix` keeps SVG ids unique.
 */
export function CoderFrontHead({ idPrefix, animated = false }: { idPrefix: string; animated?: boolean }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${idPrefix}-lens`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e1b4b" />
          <stop offset="0.55" stopColor="#0b0b14" />
          <stop offset="1" stopColor="#312e81" />
        </linearGradient>
        <clipPath id={`${idPrefix}-lens-clip`}>
          <path d={LENS_LEFT} />
          <path d={LENS_RIGHT} />
        </clipPath>
      </defs>
      <path
        d="M95 98v18q2 14 13 20 6 4 12 4t12-4q11-6 13-20V98c0-14-11-20-25-20s-25 6-25 20z"
        fill={SKIN}
      />
      {/* Stubble */}
      <path
        d="M98 118q2 13 12 18 5 3 10 3t10-3q10-5 12-18-10 8-22 8t-22-8z"
        fill="#6b4a3a"
        opacity="0.22"
      />
      {/* Nose */}
      <path d="M120.5 113q-2 5-3.5 8 2 1.4 4.5.4" fill="none" stroke={SKIN_SHADE} strokeWidth="1.4" strokeLinecap="round" />
      {/* Smirk */}
      <path d="M111 129q8 2.5 16-2.2l2-1.8" fill="none" stroke="#7a3b2e" strokeWidth="1.8" strokeLinecap="round" />
      {/* Brows */}
      <path d="M100 98.5l16 2.6M124 101.1l16-2.6" stroke={HAIR} strokeWidth="3.2" strokeLinecap="round" />

      {/* Shades */}
      <path d="M96 104.5h48" stroke="#0b0b14" strokeWidth="3" strokeLinecap="round" />
      <path d={LENS_LEFT} fill={`url(#${idPrefix}-lens)`} stroke="#0b0b14" strokeWidth="1.4" />
      <path d={LENS_RIGHT} fill={`url(#${idPrefix}-lens)`} stroke="#0b0b14" strokeWidth="1.4" />
      <path d="M117 106.5q3-2.2 6 0" fill="none" stroke="#0b0b14" strokeWidth="1.8" />
      <g clipPath={`url(#${idPrefix}-lens-clip)`}>
        <path
          className={animated ? "coder-glint" : undefined}
          transform={animated ? undefined : "translate(12 0)"}
          d="M96 118l6-16h4l-6 16z"
          fill="#fff"
          opacity="0.75"
        />
      </g>

      {/* Spiky hair from the front, with a swept spike over the forehead */}
      <path
        d="M93 106c-1-12 3-20 9-24l-6-12 12 6 2-16 10 13 8-14 4 15 11-8-3 13 10 1-8 8c4 5 6 12 5 18l-4-8c-4-4-10-5-16-4l-2 6-4-6c-6 0-12 2-17 5l6-9c-8 2-13 8-15 16z"
        fill={HAIR}
      />
      <path d="M104 80l6 1M117 72l3 6M129 73l1 6M139 80l-4 3" fill="none" stroke={HAIR_LIGHT} strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );
}

/** Hoodie sleeve with the hand resting on the keyboard (left side; mirrored for the right). */
function Arm({ side }: { side: "left" | "right" }) {
  return (
    <g transform={side === "right" ? "translate(240 0) scale(-1 1)" : undefined}>
      <g className={`coder-arm-${side}`}>
        <path d="M38 240v-46c0-26 10-48 28-66l18 5c-13 16-20 36-20 61v46z" fill="url(#coder-hoodie)" />
        <path d="M46 180c3-18 10-33 20-45" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="2.5" strokeLinecap="round" />
        {/* Cuff */}
        <path d="M64 125.5l20 5-3 7-20-5z" style={{ fill: "var(--coder-hoodie-b)" }} />
        {/* Hand on the keys */}
        <path d="M63 124c1-4.5 5-7 10.5-7 6 0 10.5 2.5 11.5 6l-1 4.5c-7 1.8-15 1.8-21 0z" fill={SKIN} />
        <path d="M68.5 118.5v4.5M73 117.5v5.5M77.5 118v5M81.5 119.5v3.5" stroke={SKIN_SHADE} strokeWidth="1" strokeLinecap="round" />
      </g>
    </g>
  );
}

const KEYS = Array.from({ length: 14 }, (_, i) => 60 + i * 9);

export function CoderCharacter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="Illustrated developer with spiky hair and shades coding on a laptop"
    >
      <defs>
        <linearGradient id="coder-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--coder-hoodie-a)" }} />
          <stop offset="1" style={{ stopColor: "var(--coder-hoodie-b)" }} />
        </linearGradient>
        <linearGradient id="coder-hood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--coder-hoodie-b)" }} />
          <stop offset="1" style={{ stopColor: "var(--coder-hoodie-a)" }} />
        </linearGradient>
        <radialGradient id="coder-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="coder-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#111833" />
          <stop offset="1" stopColor="#0a0f22" />
        </linearGradient>
        <linearGradient id="coder-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#434866" />
          <stop offset="1" stopColor="#262a40" />
        </linearGradient>
      </defs>

      {/* Screen glow */}
      <ellipse className="coder-glow" cx="120" cy="70" rx="100" ry="72" fill="url(#coder-screen-glow)" />

      {/* Desk */}
      <rect x="10" y="121" width="220" height="15" rx="7.5" fill="url(#coder-desk)" />

      {/* Mug */}
      <g>
        <path className="coder-steam" d="M195 96c-3-4 3-6 0-10M201 96c-3-4 3-6 0-10" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="189" y="102" width="17" height="20" rx="3" fill="#e2e8f0" />
        <path d="M206 107c6 0 6 10 0 10" fill="none" stroke="#e2e8f0" strokeWidth="3" />
        <rect x="189" y="102" width="17" height="4" rx="2" fill="#a78bfa" />
      </g>

      {/* Laptop */}
      <rect x="54" y="28" width="132" height="90" rx="8" fill="#1c2033" />
      <rect x="59" y="33" width="122" height="80" rx="4" fill="url(#coder-screen)" />
      {CODE_LINES.map((line, i) => (
        <rect
          key={i}
          className="coder-code-line"
          style={{ animationDelay: `${i * 0.4}s` }}
          x={line.x}
          y={line.y}
          width={line.w}
          height="3.4"
          rx="1.7"
          fill={line.color}
        />
      ))}
      <rect className="coder-cursor" x="83" y="90" width="2" height="5" fill="#e2e8f0" />
      {/* Keyboard deck */}
      <path d="M44 117h152l-8 9H52z" fill="#2c3149" />
      {KEYS.map((x, i) => (
        <rect
          key={x}
          className="coder-key"
          style={{ animationDelay: `${(i * 0.23) % 1.2}s` }}
          x={x}
          y="119.5"
          width="7"
          height="2.6"
          rx="0.8"
          fill="#4b5275"
        />
      ))}

      {/* Arms — sleeves reach up to the keyboard, hands typing */}
      <Arm side="left" />
      <Arm side="right" />

      {/* Body (breathes) */}
      <g className="coder-body">
        <path
          d="M44 240c0-40 6-66 28-80 12-8 28-11 48-11s36 3 48 11c22 14 28 40 28 80z"
          fill="url(#coder-hoodie)"
        />
        {/* Seams / shading */}
        <path d="M120 162v78" stroke="rgb(0 0 0 / 0.14)" strokeWidth="1.5" />
        <path d="M66 176c6 18 8 40 6 64" stroke="rgb(255 255 255 / 0.1)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M174 176c-6 18-8 40-6 64" stroke="rgb(0 0 0 / 0.14)" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* WR print */}
        <text
          x="120"
          y="208"
          textAnchor="middle"
          fontSize="24"
          fontWeight="800"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fill="rgb(255 255 255 / 0.9)"
          letterSpacing="-1"
        >
          WR
        </text>
        <text
          x="120"
          y="220"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="600"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fill="rgb(255 255 255 / 0.6)"
          letterSpacing="2.2"
        >
          WEB DEV
        </text>

        {/* Neck */}
        <path d="M107 132h26v18h-26z" fill={SKIN_SHADE} />

        {/* Hood bunched at the neck */}
        <path
          d="M86 158c2-10 16-16 34-16s32 6 34 16c-6 8-20 12-34 12s-28-4-34-12z"
          fill="url(#coder-hood)"
        />
        <path d="M94 158c6 5 15 7 26 7s20-2 26-7" fill="none" stroke="rgb(0 0 0 / 0.22)" strokeWidth="1.5" />
      </g>

      {/* Head — back of the head while typing; turns to face the viewer every ~9s */}
      <g className="coder-head">
        <ellipse cx="94.5" cy="112" rx="4.5" ry="6.5" fill={SKIN_SHADE} />
        <ellipse cx="145.5" cy="112" rx="4.5" ry="6.5" fill={SKIN_SHADE} />

        {/* Back view */}
        <g className="coder-back">
          <ellipse cx="120" cy="110" rx="25" ry="27" fill={SKIN} />
          {/* Faded undercut behind the ears */}
          <path d="M96 108c0 6 2 11 6 14l4-4c-3-2-5-6-6-10zM144 108c0 6-2 11-6 14l-4-4c3-2 5-6 6-10z" fill={HAIR} opacity="0.35" />
          {/* Spiky crop */}
          <path
            d="M95 112c-1-9 0-16 3-22l-8-10 12 4-2-16 10 12 4-18 8 16 8-14 4 17 10-10-3 16 11-2-8 10c3 6 2 12 1 17-3 6-9 9-17 9l-8 5-8-5c-8 0-14-3-17-9z"
            fill={HAIR}
          />
          <path
            d="M103 96l-2-10M112 94l1-14M122 93l6-12M131 95l6-9M140 99l5-5"
            fill="none"
            stroke={HAIR_LIGHT}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Rim light from the screen */}
          <path
            d="M90 80l12 4-2-16 10 12 4-18 8 16 8-14 4 17 10-10-3 16 11-2"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="1"
            strokeLinejoin="round"
            opacity="0.4"
          />
        </g>

        {/* Front view */}
        <g className="coder-front">
          <CoderFrontHead idPrefix="coder" animated />
        </g>
      </g>
    </svg>
  );
}
