import { ArrowUpRight } from "lucide-react";

import { ProjectPreview } from "@/components/projects/project-preview";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const live = project.links.live;
  const external = live?.href.startsWith("http");

  return (
    <article className="glass-card card-hover group flex h-full flex-col overflow-hidden">
      <ProjectPreview
        project={project}
        className="aspect-[16/10] border-b border-border"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-wider text-primary uppercase">
            {project.category}
          </p>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-foreground/[0.03] px-2 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {live ? (
          <div className="pt-2">
            <Button
              size="sm"
              variant="outline"
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
    </article>
  );
}
