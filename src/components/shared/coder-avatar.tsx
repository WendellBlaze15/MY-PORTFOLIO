import { CoderFrontHead } from "@/components/hero/coder-character";

/** Round profile icon of the hero character: spiky hair, shades, hoodie. */
export function CoderAvatar({ className }: { className?: string }) {
  return (
    <svg viewBox="68 54 104 104" className={className} aria-hidden>
      <defs>
        <linearGradient id="coder-avatar-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="1" style={{ stopColor: "var(--primary)" }} />
        </linearGradient>
        <linearGradient id="coder-avatar-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--coder-hoodie-a)" }} />
          <stop offset="1" style={{ stopColor: "var(--coder-hoodie-b)" }} />
        </linearGradient>
        <clipPath id="coder-avatar-clip">
          <circle cx="120" cy="106" r="52" />
        </clipPath>
      </defs>

      <g clipPath="url(#coder-avatar-clip)">
        <circle cx="120" cy="106" r="52" fill="url(#coder-avatar-bg)" />
        {/* Shoulders + neck */}
        <path d="M72 160c2-14 12-22 26-24 7-1 14-2 22-2s15 1 22 2c14 2 24 10 26 24z" fill="url(#coder-avatar-hoodie)" />
        <path d="M108 128h24v12c-4 3-8 4-12 4s-8-1-12-4z" fill="#d49a74" />
        <path d="M100 138c6 5 13 7 20 7s14-2 20-7" fill="none" stroke="rgb(0 0 0 / 0.22)" strokeWidth="1.5" />
        {/* Ears */}
        <ellipse cx="94.5" cy="112" rx="4.5" ry="6.5" fill="#d49a74" />
        <ellipse cx="145.5" cy="112" rx="4.5" ry="6.5" fill="#d49a74" />
        <CoderFrontHead idPrefix="coder-avatar" />
      </g>
    </svg>
  );
}
