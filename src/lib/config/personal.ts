import { Github, Linkedin, MessageCircleIcon } from "lucide-react";
import CVES from "../../assets/Canvas es_CV.pdf";
import CVEN from "../../assets/Canvas en_CV.pdf";
import type { PersonalInfo, SocialLinks, Skill, Stats } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Richard Morales",
  title: "Flutter & Full Stack Developer",
  email: "richardoficial2020@gmail.com",
  phone: "+573022470728",
  location: "Cartagena, Colombia",
  experience: 4,
  profileImage:
    "https://lh3.googleusercontent.com/a/ACg8ocJAnQf85Jz2ZKz9mLXhBQSm6JaJmzkezkHYElKly9FSdtuacN2NqA=s288-c-no",
  cvUrl: CVES,
  cvEnUrl: CVEN,
};

export const socialLinks: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/rickdeveloper/",
  github: "https://github.com/RichardM20",
  whatsapp: "https://wa.me/+573022470728",
  portfolio: "https://rick-personal-portfolio.netlify.app/",
};

export const stats: Stats = {
  experience: 4,
  projects: 5,
  technologies: 5,
};

export const skills: Skill[] = [
  {
    name: "Flutter",
    category: { id: "mobile", name: "Mobile", color: "blue" },
  },
  {
    name: "Dart",
    category: { id: "language", name: "Language", color: "green" },
  },
  {
    name: "React",
    category: { id: "frontend", name: "Frontend", color: "cyan" },
  },
  {
    name: "Tailwind CSS",
    category: { id: "frontend", name: "Frontend", color: "cyan" },
  },
  {
    name: "Sass",
    category: { id: "frontend", name: "Frontend", color: "cyan" },
  },
  {
    name: "TypeScript",
    category: { id: "language", name: "Language", color: "green" },
  },
  {
    name: "JavaScript",
    category: { id: "language", name: "Language", color: "green" },
  },
  {
    name: "Node.js",
    category: { id: "backend", name: "Backend", color: "emerald" },
  },
  {
    name: "Express",
    category: { id: "backend", name: "Backend", color: "emerald" },
  },
  {
    name: "MongoDB",
    category: { id: "database", name: "Database", color: "orange" },
  },
  {
    name: "PostgreSQL",
    category: { id: "database", name: "Database", color: "orange" },
  },
  {
    name: "Firebase",
    category: { id: "backend", name: "Cloud", color: "emerald" },
  },
  { name: "AWS", category: { id: "tools", name: "Cloud", color: "orange" } },
  {
    name: "GooglePlay",
    category: { id: "tools", name: "Cloud", color: "orange" },
  },
  {
    name: "AppStore",
    category: { id: "tools", name: "Cloud", color: "emerald" },
  },
  { name: "Git", category: { id: "tools", name: "Tools", color: "red" } },
  {
    name: "Github",
    category: { id: "tools", name: "Tools", color: "emerald" },
  },
  { name: "Figma", category: { id: "tools", name: "Design", color: "purple" } },
];

export const socialButtons = [
  {
    href: socialLinks.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
    className: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: socialLinks.github,
    icon: Github,
    label: "GitHub",
    variant: "outline" as const,
  },
  {
    href: socialLinks.whatsapp,
    icon: MessageCircleIcon,
    label: "WhatsApp",
    className: "bg-green-600 hover:bg-green-700",
  },
];
