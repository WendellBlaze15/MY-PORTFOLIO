import { BookOpen, Laptop } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { experienceItems } from "@/data/experience";

const icons = [Laptop, BookOpen];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience & journey"
            description="How I've been building skills — through university projects and continuous self-directed learning."
          />
        </Reveal>

        <div className="relative ml-4 space-y-8 border-l border-primary/25 pl-8 sm:ml-5 sm:pl-10">
          {experienceItems.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.id} delay={0.05 * index}>
                <article className="relative">
                  <span
                    className="absolute top-5 -left-[3.15rem] flex size-9 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_18px_-4px_var(--primary)] sm:-left-[3.65rem]"
                    aria-hidden
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="glass-card card-hover space-y-3 p-5 sm:p-6">
                    {item.period ? (
                      <p className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-violet-200">
                        {item.period}
                      </p>
                    ) : null}
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.organization}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.description.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
