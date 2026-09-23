import { Download, FileText } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

/** Hidden until the resume PDF is added and `resumeAvailable` is set. */
export function ResumeSection() {
  if (!siteConfig.resumeAvailable) return null;

  return (
    <section id="resume" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading eyebrow="Resume" title="Curriculum vitae" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-card grid overflow-hidden md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                {siteConfig.name}
              </h3>
              <p className="text-muted-foreground">{siteConfig.title}</p>
              <Button
                size="lg"
                render={<a href={siteConfig.resumePath} download />}
              >
                <Download /> Download Resume
              </Button>
            </div>

            <div className="preview-surface flex min-h-[220px] items-center justify-center border-t border-border p-8 md:border-t-0 md:border-l">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-card/70 text-primary">
                <FileText className="size-8" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
