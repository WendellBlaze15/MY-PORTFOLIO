import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import type { NavItem, SocialLink, StatItem } from "@/types";

/**
 * Confirmed personal information only. Optional fields (e.g. resume) stay
 * empty until real values are available — the UI hides anything that is not set.
 */
export const siteConfig = {
  name: "Wendell De Rama Ramos",
  shortName: "WR",
  title: "Information Technology Student & Aspiring Web Developer",
  tagline:
    "I build modern, useful, and polished digital experiences with a focus on clean UI and thoughtful UX.",
  description:
    "Portfolio of Wendell De Rama Ramos — Information Technology student and aspiring web developer specializing in modern web applications, UI/UX, and thoughtful digital experiences.",
  /** Public contact email. Leave empty to hide email actions. */
  email: "wendellramos400@gmail.com",
  /** City / region. Leave empty to hide. */
  location: "571 Purok 4, Pinagbayanan, Pila, Laguna",
  /** Google Maps lookup for the contact map (house number omitted so the pin centers correctly). */
  mapQuery: "Purok 4, Brgy. Pinagbayanan, Pila, Laguna",
  availability: "Available for opportunities",
  resumePath: "/resume/wendell-ramos-resume.pdf",
  /** Set to true after adding the PDF at `resumePath`. */
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
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

/** `display` is the text shown on the page (never the raw URL). */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/WendellBlaze15",
    display: "@WendellBlaze15",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wendell-de-rama-ramos-b60920427/",
    display: "Wendell De Rama Ramos",
  },
];

const technologyCount = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0
);

/** Derived from the data above so the numbers never drift from the content. */
export const heroStats: StatItem[] = [
  { value: String(projects.length), count: projects.length, label: "Projects showcased" },
  { value: String(technologyCount), count: technologyCount, label: "Technologies & tools" },
  { value: "BSIT", label: "4th Year IT Student" },
  { value: "LSPU", label: "Santa Cruz Campus" },
];
