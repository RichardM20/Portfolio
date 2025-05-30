import { useCallback, useState } from "react";
import { Project } from "../lib/types";
import { FirebaseServices } from "../services/firebase";

const useFetch = () => {
  const [isLoadiong, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [projectsData, setProjectsData] = useState<Project[]>([]);

  const getAllProjects = useCallback(async () => {
    setError("");
    setIsLoading(true);

    try {
      const data = await FirebaseServices.getAllProjects();
      if (data) {
        setProjectsData(data);
      } else {
        setProjectsData([]);
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoadiong,
    error,
    projectsData,
    getAllProjects
  };
};

export {useFetch};