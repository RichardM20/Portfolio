// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Project } from "../lib/types"; // Asegúrate de que la ruta sea correcta

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMbC2s8Od_rixh0POAZOTIv5VvIj5k1JU",
  authDomain: "react-portfolioweb.firebaseapp.com",
  databaseURL: "https://react-portfolioweb-default-rtdb.firebaseio.com",
  projectId: "react-portfolioweb",
  storageBucket: "react-portfolioweb.firebasestorage.app",
  messagingSenderId: "466783937622",
  appId: "1:466783937622:web:78a03f1c3bd03bc9ffc7f7",
};

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
}
