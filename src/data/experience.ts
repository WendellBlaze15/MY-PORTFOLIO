import type { ExperienceItem } from "@/types";

/** Journey entries — mockup drafts marked as placeholders until confirmed. */
export const experienceItems: ExperienceItem[] = [
  {
    id: "intern",
    title: "[PLACEHOLDER] Web Developer Intern",
    organization: "[PLACEHOLDER] Organization / Company",
    location: "[PLACEHOLDER]",
    period: "[PLACEHOLDER] 2024 – Present",
    description: [
      "[PLACEHOLDER] Describe responsibilities and impact.",
      "[PLACEHOLDER] List technologies used on the role.",
    ],
    placeholder: true,
  },
  {
    id: "academic",
    title: "Academic Projects",
    organization: "Laguna State Polytechnic University",
    location: "Santa Cruz Campus",
    period: "[PLACEHOLDER] Date range",
    description: [
      "Built academic and coursework projects focused on web development and information systems.",
      "[PLACEHOLDER] Add specific project highlights once confirmed.",
    ],
    placeholder: true,
  },
  {
    id: "self-learning",
    title: "Self-Learning Journey",
    organization: "Online courses & deliberate practice",
    period: "[PLACEHOLDER] Ongoing",
    description: [
      "Continuously learning modern web development, UI/UX, and emerging technologies including AI.",
      "[PLACEHOLDER] Add course platforms or milestones once confirmed.",
    ],
    placeholder: true,
  },
];
