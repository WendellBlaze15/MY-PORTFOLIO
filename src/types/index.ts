export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /** Text shown on the page instead of the URL */
  display?: string;
};

export type StatItem = {
  value: string;
  label: string;
  /** When set, the value is a number that animates (count-up). */
  count?: number;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  /** Screenshot shown as the project cover (falls back to a generated preview). */
  image?: string;
  links: {
    live?: ProjectLink;
  };
  featured?: boolean;
};

export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period?: string;
  description: string[];
};

export type EducationItem = {
  id: string;
  /** Short stage label, e.g. "College", "Elementary" */
  level: string;
  degree: string;
  school: string;
  campus?: string;
  period?: string;
  description?: string;
};

export type CertificationItem = {
  id: string;
  title: string;
  issuer: string;
  issuerKey: "aws" | "cisco";
  date: string;
  skills?: string[];
  credentialUrl?: string;
  image?: string;
};
