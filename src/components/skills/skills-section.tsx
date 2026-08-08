import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories, softSkills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I'm learning & using"
            description="Draft skill groups from the design mockup. Items marked [PLACEHOLDER] are unverified until confirmed — not expertise ratings."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={0.05 * index}>
              <article className="glass-card h-full p-5">
                <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm"
                    >
                      {skill.name}
                      {skill.placeholder ? (
                        <PlaceholderBadge className="px-1.5 text-[9px]" />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <article className="glass-card h-full p-5 md:col-span-2 xl:col-span-3">
              <h3 className="mb-4 text-lg font-semibold">Soft Skills</h3>
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
