"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
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
        scrolled || open
          ? "glass border-b border-border shadow-[0_8px_30px_-18px_rgb(0_0_0_/_0.35)]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link
          href="#home"
          className="focus-ring group flex items-center gap-2.5 rounded-md"
          onClick={() => setOpen(false)}
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-500 text-sm font-bold text-white shadow-[0_6px_20px_-6px_var(--primary)] transition-transform duration-300 group-hover:rotate-6">
            {siteConfig.shortName}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            {siteConfig.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-border bg-foreground/[0.03] p-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active === id ? "true" : undefined}
                className={cn(
                  "focus-ring rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === id &&
                    "bg-primary/12 font-medium text-primary dark:bg-primary/20 dark:text-violet-200"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {siteConfig.resumeAvailable ? (
            <Button
              render={<a href={siteConfig.resumePath} download />}
              variant="outline"
              size="sm"
              className="hidden border-primary/40 text-primary hover:bg-primary/10 sm:inline-flex"
            >
              Download Resume
            </Button>
          ) : null}

          <ThemeToggle />

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
          className="border-t border-border lg:hidden"
        >
          <nav
            className="container-narrow flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-lg px-3 py-3 text-base text-foreground/85 transition-colors hover:bg-foreground/5",
                  active === item.href.slice(1) && "bg-primary/10 text-primary"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {siteConfig.resumeAvailable ? (
              <Button
                render={<a href={siteConfig.resumePath} download />}
                variant="outline"
                className="mt-2 border-primary/40 text-primary"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </Button>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
