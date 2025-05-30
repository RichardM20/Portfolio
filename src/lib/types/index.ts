export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  experience: number
  profileImage: string
  cvUrl: string,
  cvEnUrl:string,
}

export interface SocialLinks {
  linkedin: string
  github: string
  whatsapp: string
  portfolio?: string
}

export interface ProjectDescription {
  es: string
  en: string
}

export interface Project {
  id: string;
  title: string;
  description: ProjectDescription;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  featured?: boolean;
  to: string;
  date: string;
  details: ProjectDescription[];
}

export interface Skill {
  name: string
  category: SkillCategory
  proficiency?: number
}

export interface SkillCategory {
  id: string
  name: string
  color: string
}

export interface Stats {
  experience: number
  projects: number
  technologies: number
}

export type Language = "es" | "en"

export interface AnimationConfig {
  duration: number
  delay?: number
  ease?: string
}

export interface ThemeConfig {
  isDark: boolean
  primaryColor: string
  secondaryColor: string
}
