import { Mail, MapPin } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { CopyEmailButton } from "@/components/shared/copy-email-button";
import { PlaceholderBadge } from "@/components/shared/placeholder-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/site";

export function ContactSection() {
  const emailIsPlaceholder = siteConfig.email.includes("[PLACEHOLDER]");
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Prefer a direct email conversation. No contact form or backend is used on this site."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Open to opportunities, collaborations, and conversations about
                web development, UI/UX, and building modern applications.
              </p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{siteConfig.email}</p>
                    {emailIsPlaceholder ? (
                      <PlaceholderBadge className="mt-1" />
                    ) : null}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{siteConfig.location}</p>
                    {siteConfig.location.includes("[PLACEHOLDER]") ? (
                      <PlaceholderBadge className="mt-1" />
                    ) : null}
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-sm text-muted-foreground">
                Reach out via email or connect on professional platforms.
              </p>

              <div className="flex flex-wrap gap-3">
                {emailIsPlaceholder ? (
                  <Button size="lg" disabled>
                    <Mail /> Email [PLACEHOLDER]
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    render={<a href={`mailto:${siteConfig.email}`} />}
                  >
                    <Mail /> Email me
                  </Button>
                )}

                <CopyEmailButton email={siteConfig.email} />

                {github && !github.placeholder ? (
                  <Button
                    size="lg"
                    variant="outline"
                    render={
                      <a
                        href={github.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <GitHubIcon className="size-4" /> GitHub
                  </Button>
                ) : null}

                {linkedIn?.placeholder ? (
                  <Button size="lg" variant="outline" disabled>
                    <LinkedInIcon className="size-4" /> LinkedIn
                    <PlaceholderBadge className="ml-1" />
                  </Button>
                ) : linkedIn ? (
                  <Button
                    size="lg"
                    variant="outline"
                    render={
                      <a
                        href={linkedIn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <LinkedInIcon className="size-4" /> LinkedIn
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
