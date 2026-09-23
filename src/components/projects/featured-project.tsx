import { ArrowUpRight, CheckCircle2, Star } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { ProjectPreview } from "@/components/projects/project-preview";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const live = project.links.live;
  const external = live?.href.startsWith("http");

  return (
    <Reveal>
      <article className="glass-card card-hover group overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <ProjectPreview
            project={project}
            large
            className="min-h-[260px] border-b border-border sm:min-h-[320px] lg:min-h-[420px] lg:border-r lg:border-b-0"
          />

          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary dark:text-violet-200">
                  <Star className="size-3.5" /> Featured Project
                </span>
                <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <ul className="space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-violet-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {live ? (
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  render={
                    <a
                      href={live.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    />
                  }
                >
                  {live.label}
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
