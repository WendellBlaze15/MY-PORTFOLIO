import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { AlienMascot } from "@/components/hero/alien-mascot";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { heroStats, siteConfig, socialLinks } from "@/data/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <LinkedInIcon className="size-4" />;
  return <GitHubIcon className="size-4" />;
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
          <AlienMascot />
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
