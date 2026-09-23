import { ArrowRight, CheckCircle2, Compass, GraduationCap } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { educationItems } from "@/data/education";
import { siteConfig } from "@/data/site";

const focusPoints = [
  "Focused on frontend development and polished interfaces",
  "Passionate about UI/UX and usable digital products",
  "Exploring AI-assisted workflows for modern web apps",
  "Building clean, maintainable, production-minded code",
];

export function AboutSection() {
  const education = educationItems[0];

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

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {focusPoints.map((point) => (
              <li
                key={point}
                className="glass-card flex items-start gap-3 p-3.5 text-sm"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Button
            render={<Link href="#contact" />}
            className="mt-8 h-11 rounded-xl px-5"
            size="lg"
          >
            Let&apos;s Connect
            <ArrowRight data-icon="inline-end" />
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card relative overflow-hidden">
            <div className="preview-surface relative border-b border-border p-6">
              <div className="grid-lines absolute inset-0" aria-hidden />
              <div className="relative flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Compass className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    Current Focus
                  </p>
                  <p className="font-semibold">Modern web applications</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                Building responsive web applications and exploring new
                technologies across UI/UX, frontend engineering, and
                AI-assisted development.
              </p>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <p className="mb-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Interests
                </p>
                <ul className="flex flex-wrap gap-2">
                  {siteConfig.interests.map((interest) => (
                    <li key={interest} className="chip text-xs sm:text-sm">
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              {education ? (
                <div className="flex items-start gap-3 rounded-xl border border-border bg-foreground/[0.03] p-4">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div className="text-sm">
                    <p className="font-medium">{education.degree}</p>
                    <p className="text-muted-foreground">
                      {education.school}
                      {education.campus ? ` — ${education.campus}` : ""}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
