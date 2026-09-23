import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";
import type { CertificationItem } from "@/types";

/** Simple text marks in each issuer's brand colors (not official logo files). */
function IssuerMark({ issuerKey }: { issuerKey: CertificationItem["issuerKey"] }) {
  if (issuerKey === "aws") {
    return (
      <span className="inline-flex h-7 items-center rounded-md bg-[#232F3E] px-2 text-sm leading-none font-bold tracking-tight text-[#FF9900]">
        aws
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 items-center rounded-md bg-[#049FD9]/12 px-2 text-sm leading-none font-bold tracking-wide text-[#0077b3] dark:text-[#49c1f0]">
      Cisco
    </span>
  );
}

/** Hidden until at least one confirmed certification is added to the data. */
export function CertificationsSection() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Licenses & Certifications"
            description="Courses and credentials completed through AWS Training & Certification and Cisco Networking Academy."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={0.05 * (index % 3)} className="h-full">
              <article className="glass-card card-hover group flex h-full flex-col overflow-hidden">
                {cert.image ? (
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring relative block aspect-[4/3] overflow-hidden border-b border-border bg-foreground/[0.04] p-4"
                    aria-label={`View certificate: ${cert.title}`}
                  >
                    <div className="relative size-full overflow-hidden rounded-lg shadow-md ring-1 ring-black/5">
                      <Image
                        src={cert.image}
                        alt={`${cert.title} certificate from ${cert.issuer}`}
                        fill
                        unoptimized
                        loading="eager"
                        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>
                ) : null}

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <IssuerMark issuerKey={cert.issuerKey} />
                    <span className="text-xs font-medium text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="leading-snug font-semibold tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>

                  {cert.skills?.length ? (
                    <ul className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <li
                          key={skill}
                          className={cn(
                            "rounded-md border px-2 py-0.5 text-xs",
                            cert.issuerKey === "aws"
                              ? "border-[#FF9900]/30 bg-[#FF9900]/10 text-[#9a5b00] dark:text-[#ffb84d]"
                              : "border-[#049FD9]/30 bg-[#049FD9]/10 text-[#0077b3] dark:text-[#49c1f0]"
                          )}
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {cert.credentialUrl ? (
                    <div className="mt-auto pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        render={
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        View Credential
                        <ExternalLink data-icon="inline-end" />
                      </Button>
                    </div>
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
