export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
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
  date: string;
  credentialUrl?: string;
  image?: string;
};
