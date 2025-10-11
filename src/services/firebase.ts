// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { env } from "../config/env";
import { PersonalInfo, Project, SocialLinks, Stats } from "../lib/types";

// Your web app's Firebase configuration
const firebaseConfig = env.firebase;

const app = initializeApp(firebaseConfig);

export class FirebaseServices {
  static initializateServices = () => {
    return app;
  };

  static getAllProjects = async (): Promise<Project[]> => {
    const response = await fetch(
      "https://react-portfolioweb-default-rtdb.firebaseio.com/projects.json"
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const data = await response.json();

    const projectsArray: Project[] = Object.keys(data).map((key) => ({
      id: key,
      title: data[key].title,
      description: data[key].description,
      tech: data[key].tech,
      image: data[key].image || "",
      github: data[key].github || "",
      demo: data[key].demo || "",
      featured: data[key].featured || false,
      to: data[key].to,
      date: data[key].date,
      details: data[key].details,
    }));

    return projectsArray;
  };

  static getProfile = async (): Promise<PersonalInfo> => {
    const response = await fetch(
      "https://react-portfolioweb-default-rtdb.firebaseio.com/profile.json"
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos del perfil");
    }

    const data = await response.json();

    return {
      name: data.name,
      title: data.stats.title,
      email: data.email,
      phone: data.phone.toString(),
      location: data.location,
      experience: data.experience,
      profileImage: data.photo,
      cvUrl: data.cv_es,
      cvEnUrl: data.cv,
    };
  };

  static getSocialLinks = async (): Promise<SocialLinks> => {
    const response = await fetch(
      "https://react-portfolioweb-default-rtdb.firebaseio.com/profile/social_links.json"
    );

    if (!response.ok) {
      throw new Error("Error al obtener los enlaces sociales");
    }

    const data = await response.json();

    return {
      linkedin: data.linkedin,
      github: data.github,
      whatsapp: data.whatsapp,
      portfolio: data.portfolio,
    };
  };

  static getStats = async (): Promise<Stats> => {
    const response = await fetch(
      "https://react-portfolioweb-default-rtdb.firebaseio.com/profile/stats.json"
    );

    if (!response.ok) {
      throw new Error("Error al obtener las estadísticas");
    }

    const data = await response.json();

    return {
      experience: data.experience,
      projects: data.projects,
      technologies: data.technologies,
    };
  };
}
