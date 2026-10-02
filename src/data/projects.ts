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
    id: "baha-ready-3d",
    title: "Baha Ready 3D – Flood Preparedness Game",
    description:
      "A bilingual 3D web and mobile game that teaches flood preparedness through typhoon simulations based on a Laguna lakeshore town. Players pack a go-bag, secure their home, and evacuate through rising floodwater from Signal No. 1 to 5, then get explained feedback on every decision. I designed the full system spec (architecture, database, security, and game design) and built it with AI-assisted development.",
    category: "3D Educational Game",
    technologies: [
      "Next.js",
      "TypeScript",
      "Three.js (React Three Fiber)",
      "Supabase",
      "Colyseus",
      "Tailwind CSS",
    ],
    features: [
      "3D typhoon levels with server-verified scoring and Filipino/English feedback",
      "Five user roles with RBAC, email OTP, MFA, and rate limiting",
      "Realtime sync, offline-ready PWA, and an Android app",
      "Co-op Survival Mode for up to 5 players (in development)",
    ],
    image: "/projects/baha-ready-3d.webp",
    links: {
      live: { label: "View Live Site", href: "https://baha-ready-3d.vercel.app/" },
    },
  },
  {
    id: "veraskin",
    title: "VeraSkin – AI-Powered Dermatology Booking System",
    description:
      "An appointment and service management platform for a dermatology clinic, with AI-assisted skin photo analysis and personalized treatment recommendations. I led the technical planning and system design: architecture, database schema, security model, and UI/UX spec.",
    category: "AI Web App",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Gemini API"],
    features: [
      "AI skin photo analysis with a manual concern-selection fallback",
      "Hybrid recommendation engine (tag matching + TF-IDF cosine similarity)",
      "Real-time appointment tracking via Supabase Realtime",
      "Role-based access for clients, staff, and dermatologists using Row-Level Security",
    ],
    image: "/projects/veraskin.webp",
    links: {
      live: { label: "View Live Site", href: "https://glow-track-ivory.vercel.app/" },
    },
  },
  {
    id: "ecommerce",
    title: "Sports & Outdoors E-commerce System",
    description:
      "A multi-role e-commerce platform for sports and outdoor equipment, with a storefront for buyers and dashboards for sellers and admins.",
    category: "Web App",
    technologies: ["Python", "Flask", "MySQL"],
    features: [
      "Product catalog with search, cart and checkout",
      "Seller dashboard with sales stats, reports and order tracking",
      "Chat support, rider chat and real-time notifications",
    ],
    image: "/projects/ecommerce-storefront.webp",
    hoverImage: "/projects/ecommerce-seller-dashboard.webp",
    links: {},
  },
  {
    id: "ibarangay",
    title: "iBarangay Management System",
    description:
      "A barangay management system deployed and used by the barangay office of Pinagbayanan, Pila, Laguna for resident records, blotter cases, and reports.",
    category: "Information System",
    technologies: ["PHP", "MySQL", "JavaScript"],
    features: [
      "Resident registration, records, and resident list",
      "Dashboard with population, voter, and blotter summaries",
      "Blotter case tracking and printable reports",
    ],
    image: "/projects/ibarangay.webp",
    links: {},
  },
  {
    id: "house-rental",
    title: "Cruzat House Rental Management System",
    description:
      "A house rental management system for Cruzat in Majayjay, Laguna, built as a 2nd-year project to manage rental houses, tenants, and monthly payments.",
    category: "Management System",
    technologies: ["Python", "Django"],
    features: [
      "House and house type management with monthly rates",
      "Tenant records and payment tracking",
      "Admin dashboard, reports, and user management",
    ],
    image: "/projects/house-rental.webp",
    links: {},
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
