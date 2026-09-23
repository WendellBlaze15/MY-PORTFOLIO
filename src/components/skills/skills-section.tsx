import { Code2, Server, Users, Wrench } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories, softSkills } from "@/data/skills";

const categoryIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Frontend: Code2,
  Backend: Server,
  "Tools & Others": Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I'm learning & using"
            description="The languages, frameworks, and tools I work with while building web applications."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.title] ?? Code2;
            return (
              <Reveal key={category.title} delay={0.05 * index}>
                <article className="glass-card card-hover h-full p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.15} className="md:col-span-2 xl:col-span-3">
            <article className="glass-card h-full p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-sky/12 text-sky">
                  <Users className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">Soft Skills</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-violet-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
