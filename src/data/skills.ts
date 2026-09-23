import type { SkillCategory } from "@/types";

/** Framed as technologies being learned/used, not expertise claims. */
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
];

export const softSkills: string[] = [
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Teamwork",
  "Communication",
];
