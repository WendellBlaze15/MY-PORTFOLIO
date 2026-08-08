import type { SkillCategory } from "@/types";

/**
 * Draft skill lists from the design mockup.
 * Items marked placeholder are unverified — replace after confirmation.
 * Framed as technologies being learned/used, not expertise claims.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", placeholder: true },
      { name: "CSS", placeholder: true },
      { name: "JavaScript", placeholder: true },
      { name: "TypeScript", placeholder: true },
      { name: "React", placeholder: true },
      { name: "Next.js", placeholder: true },
      { name: "Tailwind CSS", placeholder: true },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", placeholder: true },
      { name: "Express.js", placeholder: true },
      { name: "Python", placeholder: true },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", placeholder: true },
      { name: "GitHub", placeholder: true },
      { name: "VS Code", placeholder: true },
      { name: "Figma", placeholder: true },
      { name: "Postman", placeholder: true },
    ],
  },
];

export const softSkills: string[] = [
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Teamwork",
  "Communication",
];
