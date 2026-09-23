import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { educationItems } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            description="Where I'm building the foundations of my work in information technology."
          />
        </Reveal>

        <div className="grid gap-4">
          {educationItems.map((item, index) => (
            <Reveal key={item.id} delay={0.05 * index}>
              <article className="glass-card card-hover relative flex flex-col gap-5 overflow-hidden p-6 sm:flex-row sm:items-center sm:p-8">
                <div
                  className="absolute -top-16 -right-16 size-48 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)]"
                  aria-hidden
                />
                <div className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-500 text-white shadow-[0_10px_30px_-10px_var(--primary)]">
                  <GraduationCap className="size-8" />
                </div>
                <div className="relative space-y-2">
                  {item.period ? (
                    <p className="inline-flex rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-violet-200">
                      {item.period}
                    </p>
                  ) : null}
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.school}
                    {item.campus ? ` — ${item.campus}` : ""}
                  </p>
                  {item.description ? (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
