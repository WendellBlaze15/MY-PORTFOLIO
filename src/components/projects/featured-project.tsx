import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { GitHubIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <Reveal>
      <article className="glass-card overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[260px] border-b border-white/10 bg-gradient-to-br from-[#1a1528] via-[#12121a] to-[#0c0c0e] lg:min-h-[420px] lg:border-r lg:border-b-0">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-lg font-semibold">Featured project preview</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Add a high-resolution screenshot for {project.title}
              </p>
              {project.placeholder ? <PlaceholderBadge className="mt-3" /> : null}
            </div>
          </div>

          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium tracking-wide text-primary uppercase">
                  Featured Project
                </span>
                {project.placeholder ? <PlaceholderBadge /> : null}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div className="grid gap-3 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Problem: </span>
                {project.problem}
              </p>
              <p>
                <span className="font-medium text-foreground">Solution: </span>
                {project.solution}
              </p>
              <p>
                <span className="font-medium text-foreground">Result: </span>
                {project.result}
              </p>
            </div>

            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-violet-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.live?.placeholder ? (
                <Button disabled>
                  View Project <PlaceholderBadge className="ml-1" />
                </Button>
              ) : project.links.live ? (
                <Button
                  render={
                    <a
                      href={project.links.live.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  View Project
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              ) : null}

              {project.links.github?.placeholder ? (
                <Button variant="outline" disabled>
                  <GitHubIcon className="size-4" /> GitHub
                </Button>
              ) : project.links.github ? (
                <Button
                  variant="outline"
                  render={
                    <a
                      href={project.links.github.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <GitHubIcon className="size-4" /> GitHub
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
