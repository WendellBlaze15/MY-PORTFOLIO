import { Mail } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { navItems, siteConfig, socialLinks } from "@/data/site";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export function SiteFooter() {
  const year = new Date().getFullYear();

  const icons: Record<string, IconComponent> = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Email: Mail,
  };

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container-narrow flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-2">
            <p className="text-lg font-semibold tracking-tight">
              <span className="text-primary">{siteConfig.shortName}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.name} — {siteConfig.title}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground"
            aria-label="Footer"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-sm transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.label] ?? Mail;

              if (link.placeholder) {
                return (
                  <span
                    key={link.label}
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground/50"
                    title={`${link.label} [PLACEHOLDER]`}
                    aria-hidden
                  >
                    <Icon className="size-4" />
                  </span>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex size-9 items-center justify-center rounded-lg border border-white/10 text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  aria-label={link.label}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
