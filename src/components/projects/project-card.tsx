"use client";

import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { GitHubIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="glass-card group flex h-full flex-col overflow-hidden"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1a1528] to-[#0c0c0e]">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <p className="text-sm font-medium">{project.title.replace("[PLACEHOLDER] ", "")}</p>
          <p className="mt-1 text-xs text-muted-foreground">Project screenshot</p>
          {project.placeholder ? <PlaceholderBadge className="mt-2" /> : null}
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-primary/0 transition duration-300 group-hover:bg-primary/5",
            !reduceMotion && "group-hover:scale-[1.02]"
          )}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-medium tracking-wide text-primary uppercase">
              {project.category}
            </p>
            {project.placeholder ? <PlaceholderBadge /> : null}
          </div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.links.live ? (
            project.links.live.placeholder ? (
              <Button size="sm" variant="outline" disabled>
                View Project <PlaceholderBadge className="ml-1" />
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                render={
                  <a
                    href={project.links.live.href}
                    target={project.links.live.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      project.links.live.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  />
                }
              >
                View Project
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            )
          ) : null}
          {project.links.github ? (
            project.links.github.placeholder ? (
              <Button size="sm" variant="ghost" disabled>
                <GitHubIcon className="size-4" /> GitHub
              </Button>
            ) : (
              <Button
                size="sm"
                variant="ghost"
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
            )
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
