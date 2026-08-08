import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const focusPoints = [
  "Focused on frontend development and polished interfaces",
  "Passionate about UI/UX and usable digital products",
  "Exploring AI-assisted workflows for modern web apps",
  "Building clean, maintainable, production-minded code",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Get to know me"
            description="I'm an Information Technology student and aspiring web developer who cares about clarity, craft, and building experiences people actually want to use."
          />
          <div className="space-y-4 text-muted-foreground">
            <p>
              My interests span {siteConfig.interests.slice(0, -1).join(", ")},
              and {siteConfig.interests.at(-1)}.
            </p>
            <p>
              I&apos;m currently growing as a developer by shipping thoughtful
              interfaces, learning modern frameworks, and turning ideas into
              reliable web applications.
            </p>
          </div>

          <ul className="mt-6 space-y-3">
            {focusPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Button
            render={<Link href="#contact" />}
            className="mt-8"
            size="lg"
          >
            More About Me
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="glass-card overflow-hidden">
              <div className="flex aspect-[4/3] flex-col items-center justify-center border-b border-white/10 bg-gradient-to-br from-[#1a1528] to-[#0c0c0e] p-6 text-center">
                <p className="text-sm font-medium">Workspace photo</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Add a desk / coding setup image
                </p>
                <PlaceholderBadge className="mt-3" />
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-primary">Current Focus</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Building responsive web applications and exploring new
                  technologies across UI/UX, frontend engineering, and AI-assisted
                  development.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
