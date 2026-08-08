import { Suspense } from "react";
import { ExternalLink, GitFork, Star } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Skeleton } from "@/components/ui/skeleton";
import { featuredProject, otherProjects } from "@/data/projects";
import { getGitHubRepos } from "@/lib/github";

function GitHubReposSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="glass-card space-y-3 p-5">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

async function GitHubRepos() {
  const { data, error } = await getGitHubRepos(6);

  if (error || !data?.length) {
    return (
      <div className="glass-card p-6 text-sm text-muted-foreground">
        GitHub repositories are temporarily unavailable.
        {error ? ` (${error})` : " No public repositories found."} Featured
        project cards above remain available from local portfolio data.
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card focus-ring group block space-y-3 p-5 transition hover:border-primary/30"
        >
          <div className="flex items-start justify-between gap-3">
            <h4 className="font-semibold tracking-tight group-hover:text-primary">
              {repo.name}
            </h4>
            <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {repo.description ?? "No description provided."}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {repo.language ? (
              <span className="rounded-md border border-white/10 px-2 py-1">
                {repo.language}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1">
              <Star className="size-3.5" /> {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-1">
              <GitFork className="size-3.5" /> {repo.forks_count}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work & drafts"
            description="Featured and supporting projects. Draft entries from the mockup are clearly marked [PLACEHOLDER] until confirmed."
          />
        </Reveal>

        {featuredProject ? <FeaturedProject project={featuredProject} /> : null}

        <div className="space-y-6">
          <Reveal>
            <h3 className="text-xl font-semibold tracking-tight">
              Other notable projects
            </h3>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Reveal key={project.id} delay={0.05 * index}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Reveal>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold tracking-tight">
                From GitHub
              </h3>
              <p className="text-sm text-muted-foreground">
                Public repositories fetched server-side and cached for one hour.
              </p>
            </div>
          </Reveal>
          <Suspense fallback={<GitHubReposSkeleton />}>
            <GitHubRepos />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
