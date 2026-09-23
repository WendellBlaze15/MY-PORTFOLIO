import type { Project } from "@/types";

/**
 * Only confirmed details are listed. Add `links.live` once a project has a
 * public URL — cards hide the button when no link is set.
 */
export const projects: Project[] = [
  {
    id: "jobbridge",
    title: "JobBridge – PESO Pila System",
    description:
      "A job-matching and employment services platform designed to connect job seekers with local opportunities.",
    category: "Employment Platform",
    technologies: ["React", "Flask", "Supabase", "Tailwind CSS"],
    features: [
      "Job listing and matching workflows",
      "Admin dashboard for employment services",
      "Responsive interface for applicants and staff",
    ],
    image: "/projects/jobbridge.webp",
    links: {
      live: { label: "View Live Site", href: "https://jobbridge-lac.vercel.app/" },
    },
    featured: true,
  },
  {
    id: "ecommerce",
    title: "Sports & Outdoors E-commerce System",
    description:
      "An e-commerce experience focused on sports and outdoor products.",
    category: "Web App",
    technologies: ["Python", "Flask", "MySQL"],
    features: ["Product catalog", "Cart and checkout flow"],
    links: {},
  },
  {
    id: "ibarangay",
    title: "iBarangay Management System",
    description:
      "A barangay management system for community records and services.",
    category: "Information System",
    technologies: ["PHP", "MySQL", "JavaScript"],
    features: ["Resident records", "Service request tracking"],
    links: {},
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "This portfolio site — a modern, responsive showcase of projects, skills, and professional presence.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Light & dark themes with an animated sky backdrop",
      "Section-based single-page experience",
      "SEO and performance-focused architecture",
    ],
    links: {
      live: { label: "View Project", href: "/" },
    },
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
