"use client";

import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function applyTheme(theme: Theme) {
  const classes = document.documentElement.classList;
  classes.toggle("dark", theme === "dark");
  classes.toggle("light", theme === "light");
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";
const getServerSnapshot = (): Theme | null => null;

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // React resets <html> attributes on the dev Strict Mode remount; re-apply.
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === "light" || stored === "dark") applyTheme(stored);
    } catch {}
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }

  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "focus-ring relative inline-flex size-9 items-center justify-center overflow-hidden rounded-full border border-border bg-foreground/[0.04] text-foreground/80 transition hover:border-primary/40 hover:text-foreground",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          "absolute size-4 transition-all duration-500",
          isDark ? "translate-y-0 rotate-0 opacity-100" : "translate-y-5 rotate-90 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all duration-500",
          isDark ? "-translate-y-5 -rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
        )}
      />
    </button>
  );
}
