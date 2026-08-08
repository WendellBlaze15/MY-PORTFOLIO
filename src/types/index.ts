export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  placeholder?: boolean;
};

export type StatItem = {
  value: string;
  label: string;
  placeholder?: boolean;
};

export type SkillItem = {
  name: string;
  placeholder?: boolean;
};

export type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

export type ProjectLink = {
  label: string;
  href: string;
  placeholder?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  features: string[];
  links: {
    live?: ProjectLink;
    github?: ProjectLink;
  };
  featured?: boolean;
  placeholder?: boolean;
  problem?: string;
  solution?: string;
  result?: string;
};

export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string[];
  placeholder?: boolean;
};

export type EducationItem = {
  id: string;
  degree: string;
  school: string;
  campus?: string;
  period: string;
  description?: string;
  placeholderPeriod?: boolean;
};

export type CertificationItem = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  placeholder?: boolean;
};
