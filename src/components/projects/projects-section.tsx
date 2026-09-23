import { Reveal } from "@/components/animations/reveal";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredProject, otherProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Web applications and information systems I've built, from employment platforms to community management tools."
          />
        </Reveal>

        {featuredProject ? <FeaturedProject project={featuredProject} /> : null}

        {otherProjects.length ? (
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-xl font-semibold tracking-tight">
                Other notable projects
              </h3>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((project, index) => (
                <Reveal key={project.id} delay={0.05 * index} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
