import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { experienceItems } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience & journey"
            description="A professional timeline of learning and development work. Unverified roles and dates are marked [PLACEHOLDER]."
          />
        </Reveal>

        <div className="relative ml-3 border-l border-dashed border-primary/30 pl-8 sm:ml-4">
          {experienceItems.map((item, index) => (
            <Reveal key={item.id} delay={0.05 * index}>
              <article className="relative mb-10 last:mb-0">
                <span
                  className="absolute top-1.5 -left-[2.45rem] size-3 rounded-full border-2 border-background bg-primary shadow-[0_0_12px_rgb(139_92_246_/_0.8)] sm:-left-[2.55rem]"
                  aria-hidden
                />
                <div className="glass-card space-y-3 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm text-primary">{item.period}</p>
                    {item.placeholder ? <PlaceholderBadge /> : null}
                  </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
