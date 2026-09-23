import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { CopyEmailButton } from "@/components/shared/copy-email-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/site";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <LinkedInIcon className="size-5" />;
  return <GitHubIcon className="size-5" />;
}

export function ContactSection() {
  const { email, location } = siteConfig;

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            description="Open to opportunities, collaborations, and conversations about web development, UI/UX, and building modern applications."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass-card relative grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div
              className="absolute -top-24 -left-24 size-72 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)]"
              aria-hidden
            />

            <div className="relative space-y-6">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-500 text-white shadow-[0_10px_30px_-10px_var(--primary)]">
                <Send className="size-5" />
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The best way to reach me right now is through the channels
                listed here — I&apos;m happy to talk about projects,
                opportunities, and ideas.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-500" />
                {siteConfig.availability}
              </div>

              {email || location ? (
                <ul className="space-y-4 text-sm">
                  {email ? (
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 size-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">{email}</p>
                      </div>
                    </li>
                  ) : null}
                  {location ? (
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-5 text-primary" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{location}</p>
                      </div>
                    </li>
                  ) : null}
                </ul>
              ) : null}
            </div>

            <div className="relative flex flex-col justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group flex items-center gap-4 rounded-2xl border border-border bg-foreground/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 sm:p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground transition group-hover:bg-primary group-hover:text-white">
                    <SocialIcon label={link.label} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{link.label}</span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {link.href.replace(/^https?:\/\//, "")}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </a>
              ))}

              {email ? (
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button size="lg" render={<a href={`mailto:${email}`} />}>
                    <Mail /> Email me
                  </Button>
                  <CopyEmailButton email={email} />
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
