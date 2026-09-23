import type { SkillCategory } from "@/types";

/** Framed as technologies being learned/used, not expertise claims. */
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "PHP",
      "Flask",
      "Flask REST API",
      "Flask-SocketIO",
      "Supabase",
      "PostgreSQL",
      "JWT Authentication",
      "REST API Development",
    ],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Render", "Vercel", "Railway"],
  },
];

export const softSkills: string[] = [
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Teamwork",
  "Communication",
];
