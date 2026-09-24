import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectPreviewProps = {
  project: Project;
  className?: string;
  large?: boolean;
};

function initials(title: string) {
  return title
    .split(/[\s–-]+/)
    .filter((word) => /^[A-Za-z]/.test(word) && word !== "&")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

/** Project cover: the real screenshot when `image` is set, otherwise a generated preview. */
export function ProjectPreview({ project, className, large }: ProjectPreviewProps) {
  if (project.image) {
    const host = project.links.live?.href.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return (
      <div className={cn("preview-surface relative overflow-hidden", className)}>
        <div className="grid-lines absolute inset-0" aria-hidden />
        <div className="absolute inset-x-[6%] top-[10%] bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-border bg-card shadow-2xl transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="size-2 rounded-full bg-rose-400/70" />
            <span className="size-2 rounded-full bg-amber-400/70" />
            <span className="size-2 rounded-full bg-emerald-400/70" />
            {host ? (
              <span className="ml-2 truncate rounded-md bg-foreground/[0.06] px-2 py-0.5 text-[10px] text-muted-foreground">
                {host}
              </span>
            ) : null}
          </div>
          <div className="relative h-full">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              unoptimized
              loading="eager"
              sizes="(min-width: 1024px) 34rem, 92vw"
              className={cn(
                "object-cover object-top",
                project.hoverImage && "transition-opacity duration-500 group-hover:opacity-0"
              )}
            />
            {project.hoverImage ? (
              <Image
                src={project.hoverImage}
                alt={`${project.title} second screenshot`}
                fill
                unoptimized
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("preview-surface relative overflow-hidden", className)}
      aria-hidden
    >
      <div className="grid-lines absolute inset-0" />

      {/* Mock browser window */}
      <div
        className={cn(
          "absolute inset-x-[10%] top-[16%] bottom-0 rounded-t-xl border border-b-0 border-border bg-card/75 shadow-2xl backdrop-blur-sm transition-transform duration-500 ease-out group-hover:-translate-y-1.5",
          large && "inset-x-[8%] top-[14%]"
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="size-2 rounded-full bg-rose-400/70" />
          <span className="size-2 rounded-full bg-amber-400/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
          <span className="ml-2 h-2 w-1/3 rounded-full bg-foreground/10" />
        </div>
        <div className="flex gap-3 p-3 sm:p-4">
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 font-bold text-white shadow-lg",
              large ? "size-14 text-xl sm:size-16" : "size-11 text-base"
            )}
          >
            {initials(project.title)}
          </div>
          <div className="min-w-0 flex-1 space-y-2 pt-1">
            <div className="h-2.5 w-3/4 rounded-full bg-foreground/15" />
            <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, large ? 4 : 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-primary/12 px-1.5 py-0.5 text-[10px] font-medium text-primary dark:text-violet-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-3 sm:px-4">
          <div className="h-10 rounded-lg bg-foreground/[0.06]" />
          <div className="h-10 rounded-lg bg-foreground/[0.06]" />
          <div className="h-10 rounded-lg bg-primary/10" />
          {large ? (
            <>
              <div className="col-span-2 h-16 rounded-lg bg-foreground/[0.05]" />
              <div className="h-16 rounded-lg bg-sky/10" />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
