import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { DinoRunner } from "@/components/footer/dino-runner";
import { CoderAvatar } from "@/components/shared/coder-avatar";
import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { siteConfig, socialLinks } from "@/data/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const icons: Record<string, IconComponent> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

const iconButton =
  "focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-border bg-foreground/[0.03] text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="glass relative border-t border-border">
      {/* Gradient hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"
      />

      <div className="container-narrow flex flex-col gap-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          {/* Brand */}
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <span className="avatar-ring shrink-0">
                <CoderAvatar className="block size-12 rounded-full ring-2 ring-background" />
              </span>
              <div>
                <p className="font-semibold tracking-tight">{siteConfig.name}</p>
                <p className="text-xs text-muted-foreground">{siteConfig.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
            {siteConfig.availability ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {siteConfig.availability}
              </span>
            ) : null}
          </div>

          {/* CTA + contact */}
          <div className="glass-card space-y-5 p-5 sm:p-6">
            <div className="space-y-1.5">
              <p className="text-lg font-semibold tracking-tight">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
                  together
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Have a project, internship, or idea in mind? My inbox is always open.
              </p>
            </div>

            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring group inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:-translate-y-0.5"
              >
                <Mail className="size-4" />
                Say hello
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : null}

            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.email ? (
                <li className="flex items-center gap-2.5">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="focus-ring truncate rounded-sm transition hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              {siteConfig.location ? (
                <li className="flex items-center gap-2.5">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  <span>{siteConfig.mapQuery || siteConfig.location}</span>
                </li>
              ) : null}
            </ul>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = icons[link.label] ?? GitHubIcon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconButton}
                    aria-label={link.label}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="-mb-4 -mt-6">
          <DinoRunner />
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="#home"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition hover:-translate-y-0.5 hover:bg-primary/15"
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
