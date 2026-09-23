import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Reveal } from "@/components/animations/reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { heroStats, siteConfig, socialLinks } from "@/data/site";
import { skillCategories } from "@/data/skills";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <LinkedInIcon className="size-4" />;
  return <GitHubIcon className="size-4" />;
}

const orbitSkills = skillCategories.flatMap((category) => category.skills).slice(0, 8);

function OrbitVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem]">
      <div className="relative mx-auto aspect-square w-[72%] sm:w-full">
        <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_70%)]" />

        {/* Orbit rings */}
        <div className="absolute inset-[4%] rounded-full border border-dashed border-foreground/12" />
        <div className="absolute inset-[22%] rounded-full border border-foreground/10" />

        {/* Rotating tech badges; each counter-rotates to stay upright */}
        <div className="animate-orbit absolute inset-[4%]">
          {orbitSkills.map((skill, index) => {
            const angle = (index / orbitSkills.length) * Math.PI * 2;
            const style = {
              left: `${50 + 50 * Math.cos(angle)}%`,
              top: `${50 + 50 * Math.sin(angle)}%`,
            } as CSSProperties;
            return (
              <div
                key={skill}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={style}
              >
                <span className="animate-orbit-reverse glass-card inline-block rounded-full px-3 py-1 text-[11px] font-medium whitespace-nowrap text-foreground/85 sm:text-xs">
                  {skill}
                </span>
              </div>
            );
          })}
        </div>

        {/* Core */}
        <div className="absolute inset-[30%] flex items-center justify-center">
          <div className="animate-float glass-card relative flex size-full flex-col items-center justify-center gap-1 rounded-[2rem] text-center">
            <span className="bg-gradient-to-br from-primary to-sky-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              {siteConfig.shortName}
            </span>
            <span className="px-2 text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:text-[11px]">
              Web Dev
            </span>
          </div>
        </div>
      </div>

      {/* Code snippet — stacked below on phones/tablets, floating on desktop */}
      <div className="glass-card relative mx-auto mt-10 w-fit p-3 font-mono text-[11px] leading-relaxed sm:text-xs lg:absolute lg:right-0 lg:bottom-0 lg:mt-0">
        <div className="mb-1 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-rose-400/80" />
          <span className="size-2 rounded-full bg-amber-400/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-muted-foreground">developer.ts</span>
        </div>
        <div>
          <span className="text-violet-600 dark:text-violet-300">const</span> developer = {"{"}
        </div>
        <div className="pl-3">
          name: <span className="text-emerald-700 dark:text-emerald-300">&apos;Wendell Ramos&apos;</span>,
        </div>
        <div className="pl-3">
          focus: <span className="text-emerald-700 dark:text-emerald-300">&apos;Modern web apps&apos;</span>,
        </div>
        <div>{"}"}</div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="container-narrow grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <Reveal>
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {siteConfig.availability}
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-primary">Hello, I&apos;m</p>
              <h1 className="text-gradient-animated text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="text-gradient text-lg font-semibold sm:text-xl">
                {siteConfig.title}
              </p>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                render={<Link href="#projects" />}
                size="lg"
                className="h-11 rounded-xl px-5 shadow-[0_10px_30px_-10px_var(--primary)] hover:bg-primary/90"
              >
                View My Projects
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="#contact" />}
                size="lg"
                variant="outline"
                className="h-11 rounded-xl px-5 backdrop-blur"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring chip gap-2"
                >
                  <SocialIcon label={link.label} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <OrbitVisual />
        </Reveal>
      </div>

      <div className="container-narrow mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {heroStats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.05 * index}>
            <div className="glass-card card-hover flex h-full flex-col gap-1 p-4 sm:p-5">
              <p className="text-gradient text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
