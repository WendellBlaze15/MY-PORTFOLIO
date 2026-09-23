import { MapPin } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { educationItems } from "@/data/education";
import { cn } from "@/lib/utils";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background"
            description="My academic journey — from elementary school to my degree in information technology."
          />
        </Reveal>

        <ol className="relative">
          {/* Timeline rail: centered in the 2rem (mobile) / 3rem (md+) dot column */}
          <span
            className="absolute top-2 bottom-2 left-4 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-border md:left-[11.5rem]"
            aria-hidden
          />

          {educationItems.map((item, index) => {
            const current = index === 0;
            const showDegree = item.degree !== item.level;

            return (
              <li key={item.id} className="relative pb-5 last:pb-0">
                <Reveal delay={0.05 * index}>
                  <div className="grid grid-cols-[2rem_1fr] md:grid-cols-[10rem_3rem_1fr]">
                    {/* Level + period (desktop) */}
                    <div className="hidden pt-5 pr-2 text-right md:block">
                      <p
                        className={cn(
                          "text-sm font-semibold",
                          current ? "text-primary" : "text-foreground/80"
                        )}
                      >
                        {item.level}
                      </p>
                      {item.period ? (
                        <p className="mt-0.5 text-xs text-muted-foreground">{item.period}</p>
                      ) : null}
                    </div>

                    {/* Dot */}
                    <div className="relative flex justify-center pt-6">
                      {current ? (
                        <span className="relative flex size-3.5">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />
                          <span className="relative inline-flex size-3.5 rounded-full bg-primary ring-4 ring-primary/20" />
                        </span>
                      ) : (
                        <span className="size-3 rounded-full border-2 border-primary/60 bg-background" />
                      )}
                    </div>

                    {/* Card */}
                    <article
                      className={cn(
                        "glass-card card-hover relative overflow-hidden p-5 sm:p-6",
                        current && "border-primary/35"
                      )}
                    >
                      {current ? (
                        <div
                          className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]"
                          aria-hidden
                        />
                      ) : null}

                      <div className="relative">
                        {/* Level + period (mobile) */}
                        <div className="mb-2 flex flex-wrap items-center gap-2 md:hidden">
                          <span
                            className={cn(
                              "text-xs font-semibold tracking-wider uppercase",
                              current ? "text-primary" : "text-foreground/70"
                            )}
                          >
                            {item.level}
                          </span>
                          {item.period ? (
                            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary dark:text-violet-200">
                              {item.period}
                            </span>
                          ) : null}
                        </div>

                        <h3
                          className={cn(
                            "font-semibold tracking-tight",
                            current ? "text-lg sm:text-xl" : "text-base sm:text-lg"
                          )}
                        >
                          {item.school}
                        </h3>
                        {showDegree ? (
                          <p className="mt-1 text-sm font-medium text-foreground/80">
                            {item.degree}
                          </p>
                        ) : null}
                        {item.campus ? (
                          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                            <MapPin className="size-3.5 shrink-0" />
                            {item.campus}
                          </p>
                        ) : null}
                        {item.description ? (
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                    </article>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
