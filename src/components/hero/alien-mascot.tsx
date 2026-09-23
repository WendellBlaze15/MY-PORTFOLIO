"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const SRC = "/images/alien-mascot.webp";
const IMG_W = 1056;
const IMG_H = 1024;

/**
 * Iris regions in source-image pixels. Each overlay re-shows the same image
 * inside a soft elliptical mask and shifts it a few pixels, so the irises move
 * within their own eyelids without redrawing or distorting anything.
 */
const EYES = [
  { cx: 372, cy: 350, rx: 62, ry: 46, maxShift: 5 },
  { cx: 521, cy: 254, rx: 34, ry: 52, maxShift: 3.5 },
];

function eyeStyle(eye: (typeof EYES)[number]) {
  const w = eye.rx * 2;
  const h = eye.ry * 2;
  return {
    overlay: {
      left: `${((eye.cx - eye.rx) / IMG_W) * 100}%`,
      top: `${((eye.cy - eye.ry) / IMG_H) * 100}%`,
      width: `${(w / IMG_W) * 100}%`,
      height: `${(h / IMG_H) * 100}%`,
    } as CSSProperties,
    inner: {
      width: `${(IMG_W / w) * 100}%`,
      height: `${(IMG_H / h) * 100}%`,
      left: `${(-(eye.cx - eye.rx) / w) * 100}%`,
      top: `${(-(eye.cy - eye.ry) / h) * 100}%`,
      backgroundImage: `url(${SRC})`,
      // Shift is a percentage of the full-size inner image
      transform: `translate3d(calc(var(--eye-x, 0) * ${(eye.maxShift / IMG_W) * 100}%), calc(var(--eye-y, 0) * ${(eye.maxShift / IMG_H) * 100}%), 0)`,
    } as CSSProperties,
  };
}

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

export function AlienMascot() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const touch = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reduce) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;
    let running = false;

    function tick() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      root!.style.setProperty("--eye-x", x.toFixed(3));
      root!.style.setProperty("--eye-y", y.toFixed(3));
      if (Math.abs(targetX - x) < 0.001 && Math.abs(targetY - y) < 0.001) {
        running = false;
        return;
      }
      frame = requestAnimationFrame(tick);
    }

    function wake() {
      if (running || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(tick);
    }

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      // Aim from the face (upper-middle of the artwork)
      const faceX = rect.left + rect.width * 0.42;
      const faceY = rect.top + rect.height * 0.3;
      targetX = clamp((event.clientX - faceX) / (window.innerWidth * 0.45));
      targetY = clamp((event.clientY - faceY) / (window.innerHeight * 0.45));
      wake();
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      wake();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem]"
    >
      {/* Dark "portal" frame — same in both themes */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04050c] shadow-[0_30px_80px_-30px_rgb(59_130_246_/_0.55),0_0_0_1px_rgb(139_92_246_/_0.15)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgb(56_189_248_/_0.18),transparent_60%)]"
          aria-hidden
        />
        <div className="mascot-parallax relative">
          <div className="animate-float">
            <div className="mascot-breathe relative aspect-[1056/1024] [mask-image:radial-gradient(ellipse_75%_80%_at_55%_48%,#000_62%,transparent_100%)]">
              <Image
                src={SRC}
                alt="Alien mascot wearing a WR hoodie beside a “WR Web Dev” sign"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 30rem, (min-width: 640px) 26rem, 22rem"
                className="object-cover select-none"
                draggable={false}
              />
              {EYES.map((eye) => {
                const style = eyeStyle(eye);
                return (
                  <div
                    key={eye.cx}
                    className="absolute overflow-hidden [mask-image:radial-gradient(closest-side,#000_55%,transparent_100%)]"
                    style={style.overlay}
                    aria-hidden
                  >
                    <div
                      className="absolute bg-cover will-change-transform"
                      style={style.inner}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
