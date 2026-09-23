/**
 * Illustrated developer seen from behind, typing on a laptop. Every few
 * seconds he glances back over his shoulder. Pure SVG + CSS animations
 * (see the `.coder-*` rules in globals.css); static under reduced motion.
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

export function CoderCharacter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="Illustrated developer in a hoodie coding on a laptop"
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
        <clipPath id="coder-head-clip">
          <ellipse cx="120" cy="110" rx="26" ry="28" />
        </clipPath>
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
      <path d="M44 118h152l-7 6H51z" fill="#2c3149" />

      {/* Arms (elbows out at the sides, hands on the keyboard) */}
      <g className="coder-arm-left">
        <path d="M74 158c-14 2-26 14-28 30-1 10 4 18 12 20l20-10z" fill="url(#coder-hoodie)" />
        <path d="M52 196c2 5 6 8 10 9" fill="none" stroke="rgb(0 0 0 / 0.18)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="coder-arm-right">
        <path d="M166 158c14 2 26 14 28 30 1 10-4 18-12 20l-20-10z" fill="url(#coder-hoodie)" />
        <path d="M188 196c-2 5-6 8-10 9" fill="none" stroke="rgb(0 0 0 / 0.18)" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Body (breathes) */}
      <g className="coder-body">
        <path
          d="M50 240c0-40 6-66 26-80 12-8 26-11 44-11s32 3 44 11c20 14 26 40 26 80z"
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
        <path d="M110 132h20v18h-20z" fill={SKIN_SHADE} />

        {/* Hood bunched at the neck */}
        <path
          d="M86 158c2-10 16-16 34-16s32 6 34 16c-6 8-20 12-34 12s-28-4-34-12z"
          fill="url(#coder-hood)"
        />
        <path d="M94 158c6 5 15 7 26 7s20-2 26-7" fill="none" stroke="rgb(0 0 0 / 0.22)" strokeWidth="1.5" />
      </g>

      {/* Head (turns to look back) */}
      <g className="coder-head">
        <ellipse className="coder-ear-left" cx="94.5" cy="113" rx="4.5" ry="6.5" fill={SKIN_SHADE} />
        <ellipse cx="145.5" cy="113" rx="4.5" ry="6.5" fill={SKIN_SHADE} />

        {/* Skin, revealed as the hair slides away */}
        <ellipse cx="120" cy="110" rx="25" ry="27" fill={SKIN} />

        {/* Face profile, fades in during the look-back */}
        <g className="coder-face">
          <path d="M95.6 113.5c-2.6 1.6-3 4.2-.4 5.6" fill={SKIN} stroke={SKIN_SHADE} strokeWidth="0.8" />
          <ellipse cx="101" cy="121" rx="4.5" ry="2.8" fill="#f28b82" opacity="0.5" />
          <path d="M97 105c3-2 6.5-2 9 0" fill="none" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="101.5" cy="111.5" rx="2.6" ry="3.2" fill="#1b1530" />
          <circle cx="102.5" cy="110.4" r="1" fill="#fff" />
          <path d="M98 125.5c2.2 1.8 5 1.8 7.2 0" fill="none" stroke="#9a4a3c" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Hair slides right as he turns, uncovering the face (clipped to the head) */}
        <g clipPath="url(#coder-head-clip)">
          <g className="coder-hair">
            <ellipse cx="120" cy="107" rx="28" ry="29" fill={HAIR} />
            <path d="M101 96c8-6 22-8 34-2M100 110c10-5 26-5 38 0M104 124c8-3 20-3 30 1" fill="none" stroke={HAIR_LIGHT} strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Messy top tufts */}
        <path
          d="M97 99c-2-12 6-20 12-22l1 6 6-9 3 7 7-7 1 8 8-5-2 8c5 2 9 7 9 14-8-6-20-8-45 0z"
          fill={HAIR}
        />
        {/* Rim light from the screen */}
        <path d="M100 88c6-8 14-12 20-12s15 4 20 12" fill="none" stroke="#7dd3fc" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      </g>
    </svg>
  );
}
