import { ArrowUp, Mail } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { navItems, siteConfig, socialLinks } from "@/data/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const icons: Record<string, IconComponent> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="glass border-t border-border">
      <div className="container-narrow flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-sm font-bold text-white">
                {siteConfig.shortName}
              </span>
              <span className="font-semibold tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">{siteConfig.title}</p>
          </div>

          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"
            aria-label="Footer"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-sm transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.label] ?? GitHubIcon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  aria-label={link.label}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            ) : null}
            <Link
              href="#home"
              className="focus-ring inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
