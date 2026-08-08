"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "glass border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="focus-ring rounded-md text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-primary">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === id && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={siteConfig.resumePath} />}
            variant="outline"
            size="sm"
            className="hidden border-primary/40 text-primary hover:bg-primary/10 sm:inline-flex"
            aria-disabled={!siteConfig.resumeAvailable}
            onClick={(event) => {
              if (!siteConfig.resumeAvailable) {
                event.preventDefault();
              }
            }}
          >
            Download Resume
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-background/95 lg:hidden"
        >
          <nav
            className="container-narrow flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-base text-foreground hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              render={<a href={siteConfig.resumePath} />}
              variant="outline"
              className="mt-2 border-primary/40 text-primary"
              onClick={(event) => {
                if (!siteConfig.resumeAvailable) event.preventDefault();
                setOpen(false);
              }}
            >
              Download Resume {[!siteConfig.resumeAvailable && "[PLACEHOLDER]"]
                .filter(Boolean)
                .join(" ")}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
