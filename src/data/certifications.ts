import type { CertificationItem } from "@/types";

export const certifications: CertificationItem[] = [
  {
    id: "aws-generative-ai-practitioner",
    title: "Generative AI Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issuerKey: "aws",
    date: "March 2026",
    image: "/certificates/aws-generative-ai-practitioner.webp",
  },
  {
    id: "aws-ml-ai-fundamentals",
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "Amazon Web Services (AWS)",
    issuerKey: "aws",
    date: "April 2026",
    skills: ["Artificial Intelligence (AI)", "Machine Learning"],
    image: "/certificates/aws-ml-ai-fundamentals.webp",
  },
  {
    id: "aws-cloud-quest-cloud-practitioner",
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issuerKey: "aws",
    date: "March 2026",
    skills: ["Cloud Computing"],
    image: "/certificates/aws-cloud-quest-cloud-practitioner.webp",
  },
  {
    id: "aws-cloud-practitioner-essentials",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    issuerKey: "aws",
    date: "April 2026",
    skills: ["Cloud Computing"],
    image: "/certificates/aws-cloud-practitioner-essentials.webp",
  },
  {
    id: "cisco-intro-to-iot",
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    issuerKey: "cisco",
    date: "December 2025",
    skills: ["Internet of Things (IoT)"],
    credentialUrl:
      "https://www.credly.com/badges/0b418adf-886a-4d98-83bf-af2170524f9d",
    image: "/certificates/cisco-intro-to-iot.webp",
  },
];
