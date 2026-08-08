import type { Project } from "@/types";

/**
 * Project drafts from the mockup. All entries are [PLACEHOLDER] until confirmed.
 * Do not present as verified work until you replace these values.
 */
export const projects: Project[] = [
  {
    id: "jobbridge",
    title: "[PLACEHOLDER] JobBridge – PESO Pila System",
    description:
      "[PLACEHOLDER] A job-matching and employment services platform designed to connect job seekers with local opportunities.",
    category: "[PLACEHOLDER] Featured",
    image: "/projects/jobbridge-placeholder.svg",
    technologies: [
      "[PLACEHOLDER] React",
      "[PLACEHOLDER] Flask",
      "[PLACEHOLDER] Supabase",
      "[PLACEHOLDER] Tailwind CSS",
    ],
    features: [
      "[PLACEHOLDER] Job listing and matching workflows",
      "[PLACEHOLDER] Admin dashboard for employment services",
      "[PLACEHOLDER] Responsive interface for applicants and staff",
    ],
    links: {
      live: { label: "View Project", href: "[PLACEHOLDER]", placeholder: true },
      github: { label: "GitHub", href: "[PLACEHOLDER]", placeholder: true },
    },
    featured: true,
    placeholder: true,
    problem:
      "[PLACEHOLDER] Describe the problem this project solves.",
    solution:
      "[PLACEHOLDER] Describe the solution and approach.",
    result: "[PLACEHOLDER] Describe outcomes without fabricating metrics.",
  },
  {
    id: "ecommerce",
    title: "[PLACEHOLDER] Sports & Outdoors E-commerce System",
    description:
      "[PLACEHOLDER] An e-commerce experience focused on sports and outdoor products.",
    category: "[PLACEHOLDER] Web App",
    image: "/projects/ecommerce-placeholder.svg",
    technologies: [
      "[PLACEHOLDER] Python",
      "[PLACEHOLDER] Flask",
      "[PLACEHOLDER] MySQL",
    ],
    features: [
      "[PLACEHOLDER] Product catalog",
      "[PLACEHOLDER] Cart and checkout flow",
    ],
    links: {
      live: { label: "View Project", href: "[PLACEHOLDER]", placeholder: true },
      github: { label: "GitHub", href: "[PLACEHOLDER]", placeholder: true },
    },
    placeholder: true,
  },
  {
    id: "ibarangay",
    title: "[PLACEHOLDER] iBarangay Management System",
    description:
      "[PLACEHOLDER] A barangay management system for community records and services.",
    category: "[PLACEHOLDER] Information System",
    image: "/projects/ibarangay-placeholder.svg",
    technologies: [
      "[PLACEHOLDER] PHP",
      "[PLACEHOLDER] MySQL",
      "[PLACEHOLDER] JavaScript",
    ],
    features: [
      "[PLACEHOLDER] Resident records",
      "[PLACEHOLDER] Service request tracking",
    ],
    links: {
      live: { label: "View Project", href: "[PLACEHOLDER]", placeholder: true },
      github: { label: "GitHub", href: "[PLACEHOLDER]", placeholder: true },
    },
    placeholder: true,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "This portfolio site — a modern, responsive showcase of projects, skills, and professional presence.",
    category: "Web",
    image: "/projects/portfolio-placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Responsive dark premium design",
      "Section-based single-page experience",
      "SEO and performance-focused architecture",
    ],
    links: {
      live: {
        label: "View Project",
        href: "/",
        placeholder: false,
      },
      github: {
        label: "GitHub",
        href: "https://github.com/WendellBlaze15/MY-PORTFOLIO",
        placeholder: false,
      },
    },
    placeholder: false,
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
