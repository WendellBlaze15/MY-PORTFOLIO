"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  depth: number;
  phase: number;
  speed: number;
};

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

type Palette = {
  star: string;
  starAlpha: number;
  particle: string;
  particleAlpha: number;
  shooting: boolean;
};

const DARK: Palette = {
  star: "255, 255, 255",
  starAlpha: 1,
  particle: "196, 181, 253",
  particleAlpha: 0.55,
  shooting: true,
};

const LIGHT: Palette = {
  star: "92, 102, 170",
  starAlpha: 0.32,
  particle: "255, 255, 255",
  particleAlpha: 0.9,
  shooting: false,
};

const DEPTHS = [0.15, 0.35, 0.7];

/** Flight lanes: vertical position, angle, cycle length and start offset. */
const JETS: Array<{
  top: string;
  angle: string;
  duration: string;
  delay: string;
  scale: number;
  reverse?: boolean;
}> = [
  { top: "18%", angle: "-5deg", duration: "52s", delay: "4s", scale: 1 },
  { top: "62%", angle: "3deg", duration: "74s", delay: "28s", scale: 0.75, reverse: true },
  { top: "36%", angle: "-2deg", duration: "96s", delay: "58s", scale: 0.6 },
];

function Aircraft({ scale }: { scale: number }) {
  return (
    <svg
      viewBox="0 0 32 16"
      width={32 * scale}
      height={16 * scale}
      fill="currentColor"
      aria-hidden
    >
      {/* Side-view jet silhouette pointing right */}
      <path d="M31 8.2c0-.7-1.4-1.5-3.2-1.5H19.6L12.4 1.2h-2.3l3.6 5.5H6.2L3.6 3.4H1.8l1.3 4.8-1.3 4.4h1.8l2.6-3h7.5l-3.6 5.2h2.3l7.2-5.2h8.2c1.8 0 3.2-.7 3.2-1.4Z" />
    </svg>
  );
}

/** Small flying saucer with an alien pilot under the glass dome. */
function Ufo() {
  return (
    <svg viewBox="0 0 64 44" width={84} height={58} aria-hidden>
      <defs>
        <linearGradient id="ufo-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--ufo-body-top)" }} />
          <stop offset="1" style={{ stopColor: "var(--ufo-body-bottom)" }} />
        </linearGradient>
      </defs>
      {/* Beam glow */}
      <ellipse cx="32" cy="38" rx="17" ry="4" style={{ fill: "var(--ufo-glow)" }} />
      {/* Alien pilot */}
      <line x1="29" y1="12" x2="26.5" y2="7.5" stroke="#5eead4" strokeWidth="1" strokeLinecap="round" />
      <line x1="35" y1="12" x2="37.5" y2="7.5" stroke="#5eead4" strokeWidth="1" strokeLinecap="round" />
      <circle cx="26.3" cy="7.2" r="1.3" fill="#7dd3fc" />
      <circle cx="37.7" cy="7.2" r="1.3" fill="#7dd3fc" />
      <ellipse cx="32" cy="17" rx="5.6" ry="6" fill="#5eead4" />
      <ellipse cx="29.8" cy="17" rx="1.8" ry="2.3" fill="#0b1026" />
      <ellipse cx="34.2" cy="17" rx="1.8" ry="2.3" fill="#0b1026" />
      <circle cx="30.3" cy="16.2" r="0.55" fill="#fff" />
      <circle cx="34.7" cy="16.2" r="0.55" fill="#fff" />
      {/* Glass dome */}
      <path d="M20 24c0-8 5.4-14 12-14s12 6 12 14z" fill="rgb(186 230 253 / 0.28)" stroke="rgb(186 230 253 / 0.7)" strokeWidth="0.8" />
      <path d="M24 19c1.2-3.4 3.6-5.6 6.4-6.2" fill="none" stroke="rgb(255 255 255 / 0.7)" strokeWidth="1" strokeLinecap="round" />
      {/* Saucer */}
      <ellipse cx="32" cy="28" rx="27" ry="7" fill="url(#ufo-body)" />
      <ellipse cx="32" cy="25.5" rx="20" ry="2.6" fill="rgb(255 255 255 / 0.22)" />
      {[12, 22, 32, 42, 52].map((x, i) => (
        <circle key={x} className="ufo-light" style={{ animationDelay: `${i * 0.25}s` }} cx={x} cy={i % 4 === 0 ? 28.5 : 30.5} r="1.4" fill="#fde68a" />
      ))}
    </svg>
  );
}

export function SkyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const isSmall = () => window.innerWidth < 768;

    let palette = root.classList.contains("dark") ? DARK : LIGHT;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let particles: Particle[] = [];
    let shooting: ShootingStar | null = null;
    let nextShootingAt = performance.now() + 6000;
    let frame = 0;
    let lastFrame = 0;
    let running = false;

    // Parallax targets (scroll + pointer), eased toward each frame
    let scrollY = window.scrollY;
    let pointerX = 0;
    let pointerY = 0;
    let easedX = 0;
    let easedY = 0;
    let easedScroll = scrollY;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const small = isSmall();
      const starCount = Math.min(small ? 90 : 220, Math.round((width * height) / (small ? 4200 : 6500)));
      stars = Array.from({ length: starCount }, () => {
        const depth = DEPTHS[Math.floor(Math.random() * DEPTHS.length)];
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: rand(0.35, 0.9) + depth * 0.9,
          alpha: rand(0.35, 0.9),
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: rand(0.4, 1.4),
        };
      });

      particles = Array.from({ length: small ? 14 : 30 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: rand(0.8, 2.2),
        vx: rand(-0.08, 0.08),
        vy: rand(-0.14, -0.03),
        alpha: rand(0.25, 0.7),
      }));
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);

      easedScroll += (scrollY - easedScroll) * 0.08;
      easedX += (pointerX - easedX) * 0.05;
      easedY += (pointerY - easedY) * 0.05;

      const t = now / 1000;

      for (const star of stars) {
        // Deeper layers move more → parallax depth. Wrap vertically.
        const offsetY = easedScroll * star.depth * 0.12 + easedY * star.depth * 18;
        const offsetX = easedX * star.depth * 18;
        const y = (((star.y - offsetY) % height) + height) % height;
        const x = (((star.x - offsetX) % width) + width) % width;
        const twinkle = 0.65 + 0.35 * Math.sin(t * star.speed + star.phase);
        ctx!.globalAlpha = star.alpha * twinkle * palette.starAlpha;
        ctx!.fillStyle = `rgb(${palette.star})`;
        ctx!.beginPath();
        ctx!.arc(x, y, star.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        const y = p.y - easedScroll * 0.04;
        const wrappedY = ((y % height) + height) % height;
        ctx!.globalAlpha = p.alpha * palette.particleAlpha;
        ctx!.fillStyle = `rgb(${palette.particle})`;
        ctx!.beginPath();
        ctx!.arc(p.x, wrappedY, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (palette.shooting) {
        if (!shooting && now > nextShootingAt) {
          shooting = {
            x: rand(width * 0.2, width * 0.9),
            y: rand(0, height * 0.35),
            vx: -rand(7, 10),
            vy: rand(2.5, 4),
            life: 1,
          };
        }
        if (shooting) {
          const s = shooting;
          const gradient = ctx!.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
          gradient.addColorStop(0, `rgba(${palette.star}, ${0.9 * s.life})`);
          gradient.addColorStop(1, `rgba(${palette.star}, 0)`);
          ctx!.globalAlpha = 1;
          ctx!.strokeStyle = gradient;
          ctx!.lineWidth = 1.4;
          ctx!.beginPath();
          ctx!.moveTo(s.x, s.y);
          ctx!.lineTo(s.x - s.vx * 12, s.y - s.vy * 12);
          ctx!.stroke();
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.012;
          if (s.life <= 0 || s.x < -50 || s.y > height + 50) {
            shooting = null;
            nextShootingAt = now + rand(9000, 18000);
          }
        }
      }

      ctx!.globalAlpha = 1;

      if (nebulaRef.current) {
        nebulaRef.current.style.transform = `translate3d(${easedX * -12}px, ${
          easedScroll * -0.05 + easedY * -12
        }px, 0)`;
      }
    }

    // ~30fps on phones/tablets, ~60fps elsewhere
    const minFrameGap = coarse || isSmall() ? 1000 / 30 : 1000 / 60 - 2;

    function loop(now: number) {
      frame = requestAnimationFrame(loop);
      if (now - lastFrame < minFrameGap) return;
      lastFrame = now;
      draw(now);
    }

    function start() {
      if (running || reduceMotion.matches || document.hidden) return;
      running = true;
      lastFrame = 0;
      frame = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(frame);
    }

    function renderStatic() {
      draw(performance.now());
    }

    build();
    renderStatic();
    start();

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        renderStatic();
      }, 150);
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onPointer = (event: PointerEvent) => {
      pointerX = event.clientX / width - 0.5;
      pointerY = event.clientY / height - 0.5;
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = () => {
      if (reduceMotion.matches) {
        stop();
        renderStatic();
      } else {
        start();
      }
    };

    const themeObserver = new MutationObserver(() => {
      palette = root.classList.contains("dark") ? DARK : LIGHT;
      if (!running) renderStatic();
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!coarse) window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div
      className="sky-gradient pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div ref={nebulaRef} className="absolute inset-0 will-change-transform">
        <div className="nebula nebula-a" />
        <div className="nebula nebula-b" />
        <div className="nebula nebula-c" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0" />

      {JETS.map((jet) => (
        <div
          key={jet.top}
          className={jet.reverse ? "jet-lane jet-reverse" : "jet-lane"}
          style={
            {
              top: jet.top,
              "--jet-angle": jet.angle,
              "--jet-duration": jet.duration,
              "--jet-delay": jet.delay,
            } as CSSProperties
          }
        >
          <div className="jet">
            <span className="jet-trail" />
            <Aircraft scale={jet.scale} />
          </div>
        </div>
      ))}

      <div className="ufo-lane" aria-hidden>
        <div className="ufo">
          <div className="ufo-bob">
            <Ufo />
          </div>
        </div>
      </div>

      {/* Soft vignette keeps content readable over the sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,color-mix(in_oklab,var(--background)_55%,transparent)_100%)]" />
    </div>
  );
}
