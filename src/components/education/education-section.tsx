import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
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
            description="Confirmed degree and university details. Date ranges remain placeholders until verified."
          />
        </Reveal>

        <div className="grid gap-4">
          {educationItems.map((item, index) => (
            <Reveal key={item.id} delay={0.05 * index}>
              <article className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                  <GraduationCap className="size-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm text-primary">{item.period}</p>
                    {item.placeholderPeriod ? <PlaceholderBadge /> : null}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
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
