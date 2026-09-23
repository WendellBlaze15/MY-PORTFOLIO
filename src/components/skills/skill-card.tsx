"use client";

import { Code2, Server, Users, Wrench } from "lucide-react";
import { MotionConfig, motion } from "motion/react";
import type { PointerEvent } from "react";

import { cn } from "@/lib/utils";

const ICONS = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
  soft: Users,
} as const;

export type SkillIcon = keyof typeof ICONS;

type SkillCardProps = {
  title: string;
  skills: string[];
  icon: SkillIcon;
  variant?: "default" | "soft";
  className?: string;
};

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const chip = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 380, damping: 26 },
  },
};

/** Moves the card's spotlight to the cursor (CSS vars, no re-render). */
function trackSpotlight(event: PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function SkillCard({ title, skills, icon, variant = "default", className }: SkillCardProps) {
  const Icon = ICONS[icon];
  const soft = variant === "soft";

  return (
    <MotionConfig reducedMotion="user">
      <motion.article
        onPointerMove={trackSpotlight}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn("skill-card glass-card group relative h-full overflow-hidden p-5 sm:p-6", className)}
      >
        {/* Animated accent line + cursor spotlight */}
        <span className="skill-card-line" aria-hidden />
        <span className="skill-card-spotlight" aria-hidden />

        <div className="relative mb-5 flex items-center gap-3">
          <div
            className={cn(
              "flex size-11 items-center justify-center rounded-xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6",
              soft ? "bg-sky/12 text-sky" : "bg-primary/12 text-primary"
            )}
          >
            <Icon className="size-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {!soft ? (
              <p className="text-xs text-muted-foreground">{skills.length} technologies</p>
            ) : null}
          </div>
        </div>

        <motion.ul
          className="relative flex flex-wrap gap-2"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={chip}
              whileHover={{ y: -3 }}
              className={cn(
                "inline-flex cursor-default items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm transition-colors",
                soft
                  ? "border-primary/20 bg-primary/10 text-violet-foreground hover:border-primary/40"
                  : "border-border bg-foreground/[0.035] text-foreground/85 hover:border-primary/40 hover:bg-primary/[0.07] hover:text-foreground"
              )}
            >
              {!soft ? (
                <span className="size-1.5 rounded-full bg-gradient-to-br from-primary to-sky-500" aria-hidden />
              ) : null}
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.article>
    </MotionConfig>
  );
}
