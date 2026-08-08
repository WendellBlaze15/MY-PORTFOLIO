import { ArrowRight, Code2, Mail } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { heroStats, siteConfig, socialLinks } from "@/data/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "GitHub") return <GitHubIcon className="size-4" />;
  if (label === "LinkedIn") return <LinkedInIcon className="size-4" />;
  return <Mail className="size-4" />;
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-primary">Hello, I&apos;m</p>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="text-lg font-medium text-gradient sm:text-xl">
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
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View My Projects
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="#contact" />}
                size="lg"
                variant="outline"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map((link) => {
                const isPlaceholder = link.placeholder;
                if (isPlaceholder) {
                  return (
                    <span
                      key={link.label}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-muted-foreground"
                      title={`${link.label} not confirmed yet`}
                    >
                      <SocialIcon label={link.label} />
                      {link.label}
                      <PlaceholderBadge />
                    </span>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  >
                    <SocialIcon label={link.label} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden />
            <div className="glass-card relative aspect-[4/5] overflow-hidden p-3 sm:aspect-square">
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-gradient-to-br from-[#1a1528] via-[#0d0d10] to-[#121214] p-6 text-center">
                <div className="mb-4 flex size-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-2xl font-semibold text-primary">
                  {siteConfig.shortName}
                </div>
                <p className="text-sm font-medium">Portrait photo</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Replace with professional headshot
                </p>
                <PlaceholderBadge className="mt-3" />
              </div>

              <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/10 bg-black/70 p-3 font-mono text-[11px] leading-relaxed text-zinc-300 backdrop-blur-md sm:text-xs">
                <div className="mb-1 text-zinc-500">{"// developer.ts"}</div>
                <div>
                  <span className="text-violet-300">const</span> developer = {"{"}
                </div>
                <div className="pl-3">
                  name: <span className="text-emerald-300">&apos;Wendell Ramos&apos;</span>,
                </div>
                <div className="pl-3">
                  role: <span className="text-emerald-300">&apos;Aspiring Web Developer&apos;</span>,
                </div>
                <div className="pl-3">
                  focus: <span className="text-emerald-300">&apos;Modern web apps&apos;</span>,
                </div>
                <div>{"}"}</div>
              </div>

              <div
                className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-card/90 text-primary shadow-lg"
                aria-hidden
              >
                <Code2 className="size-5" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-narrow mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {heroStats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.05 * index}>
            <div className="glass-card flex flex-col gap-1 p-4">
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                {stat.placeholder ? <PlaceholderBadge /> : null}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
