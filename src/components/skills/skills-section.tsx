import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SkillCard, type SkillIcon } from "@/components/skills/skill-card";
import { skillCategories, softSkills } from "@/data/skills";

const categoryIcons: Record<string, SkillIcon> = {
  Frontend: "frontend",
  Backend: "backend",
  "Tools & Others": "tools",
};

const allSkills = skillCategories.flatMap((category) => category.skills);
const half = Math.ceil(allSkills.length / 2);
const marqueeRows = [allSkills.slice(0, half), allSkills.slice(half)];

/** Infinite scrolling row; content is duplicated so the loop is seamless. */
function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee group/marquee flex overflow-hidden">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          className={reverse ? "marquee-track marquee-reverse" : "marquee-track"}
          aria-hidden={copy === 1 || undefined}
        >
          {items.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-foreground/[0.03] px-4 py-2 text-sm whitespace-nowrap text-foreground/75"
            >
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

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
      </div>

      <Reveal className="mb-10 space-y-3">
        <MarqueeRow items={marqueeRows[0]} />
        <MarqueeRow items={marqueeRows[1]} reverse />
      </Reveal>

      <div className="container-narrow">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={categoryIcons[category.title] ?? "frontend"}
              className={category.title === "Backend" ? "md:row-span-2 xl:row-span-1" : undefined}
            />
          ))}

          <SkillCard
            title="Soft Skills"
            skills={softSkills}
            icon="soft"
            variant="soft"
            className="md:col-span-2 xl:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}
