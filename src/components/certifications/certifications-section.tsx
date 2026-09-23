import { Award, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { certifications } from "@/data/certifications";

/** Hidden until at least one confirmed certification is added to the data. */
export function CertificationsSection() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Credentials & learning" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={0.05 * index}>
              <article className="glass-card card-hover flex h-full flex-col gap-2 p-5">
                <Award className="size-6 text-primary" />
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-primary">{cert.date}</p>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-auto inline-flex items-center gap-1 pt-2 text-sm text-primary hover:underline"
                  >
                    View credential <ExternalLink className="size-3.5" />
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
