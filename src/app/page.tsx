import { AboutSection } from "@/components/about/about-section";
import { CertificationsSection } from "@/components/certifications/certifications-section";
import { ContactSection } from "@/components/contact/contact-section";
import { EducationSection } from "@/components/education/education-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { HeroSection } from "@/components/hero/hero-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ResumeSection } from "@/components/resume/resume-section";
import { SkillsSection } from "@/components/skills/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
    </>
  );
}
