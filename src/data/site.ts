import type { NavItem, SocialLink, StatItem } from "@/types";

/** Confirmed personal information only. Unverified values use [PLACEHOLDER]. */
export const siteConfig = {
  name: "Wendell Derama Ramos",
  shortName: "WR",
  title: "Information Technology Student & Aspiring Web Developer",
  tagline:
    "I build modern, useful, and polished digital experiences with a focus on clean UI and thoughtful UX.",
  description:
    "Portfolio of Wendell Derama Ramos — Information Technology student and aspiring web developer specializing in modern web applications, UI/UX, and thoughtful digital experiences.",
  email: "[PLACEHOLDER]",
  location: "[PLACEHOLDER]",
  availability: "Available for opportunities",
  githubUsername: "WendellBlaze15",
  resumePath: "/resume/wendell-ramos-resume.pdf",
  resumeAvailable: false,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://wendellramos.vercel.app",
  interests: [
    "Web development",
    "UI/UX design",
    "Programming",
    "Technology",
    "Artificial Intelligence (AI)",
    "Building modern web applications",
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/WendellBlaze15",
  },
  {
    label: "LinkedIn",
    href: "[PLACEHOLDER]",
    placeholder: true,
  },
  {
    label: "Email",
    href: "[PLACEHOLDER]",
    placeholder: true,
  },
];

export const heroStats: StatItem[] = [
  { value: "[PLACEHOLDER]", label: "Projects Completed", placeholder: true },
  { value: "[PLACEHOLDER]", label: "Technologies", placeholder: true },
  { value: "[PLACEHOLDER]", label: "Years of Learning", placeholder: true },
  { value: "[PLACEHOLDER]", label: "Dedication", placeholder: true },
];
