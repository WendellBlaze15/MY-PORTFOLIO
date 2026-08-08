export const GITHUB_USERNAME = "WendellBlaze15";
export const GITHUB_REVALIDATE_SECONDS = 3600;

export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
  "resume",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
