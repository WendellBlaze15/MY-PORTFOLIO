import { Download, FileText } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Curriculum vitae"
            description="Download a PDF resume once the file is added to public/resume. The button stays disabled while the asset is a placeholder."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-card grid overflow-hidden md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {siteConfig.name}
                </h3>
                {!siteConfig.resumeAvailable ? <PlaceholderBadge /> : null}
              </div>
              <p className="text-muted-foreground">{siteConfig.title}</p>
              <p className="text-sm text-muted-foreground">
                Place your resume PDF at{" "}
                <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs">
                  public/resume/wendell-ramos-resume.pdf
                </code>{" "}
                and set <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs">resumeAvailable</code>{" "}
                to true in site data.
              </p>
              {siteConfig.resumeAvailable ? (
                <Button
                  size="lg"
                  render={
                    <a href={siteConfig.resumePath} download />
                  }
                >
                  <Download /> Download Resume
                </Button>
              ) : (
                <Button size="lg" disabled>
                  <Download /> Download Resume
                  <PlaceholderBadge className="ml-1" />
                </Button>
              )}
            </div>

            <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 border-t border-white/10 bg-gradient-to-br from-[#1a1528] to-[#0c0c0e] p-8 md:border-t-0 md:border-l">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-primary">
                <FileText className="size-8" />
              </div>
              <p className="text-sm font-medium">Resume preview</p>
              <p className="text-xs text-muted-foreground">
                [PLACEHOLDER] PDF preview image
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
