import { Award } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { certifications } from "@/data/certifications";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials & learning"
            description="Confirmed certifications will appear here. Nothing fabricated is shown as complete."
          />
        </Reveal>

        {certifications.length === 0 ? (
          <Reveal>
            <div className="glass-card flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-primary">
                <Award className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">No certifications added yet</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                When you confirm certificate titles, issuers, dates, and links,
                they will be listed here with optional preview images.
              </p>
              <p className="text-xs tracking-wide text-amber-200/90 uppercase">
                [PLACEHOLDER] awaiting confirmed credentials
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.id} className="glass-card p-5">
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 text-xs text-primary">{cert.date}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
