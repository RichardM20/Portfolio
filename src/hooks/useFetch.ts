import { useCallback, useState } from "react";
import { Project } from "../lib/types";
import { FirebaseServices } from "../services/firebase";

const useFetch = () => {
  const [state, setState] = useState<{
    isLoading: boolean;
    error: string;
    projectsData: Project[];
  }>({
    isLoading: false,
    error: "",
    projectsData: [],
  });

  const setIsLoading = (isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  };

  const setProjectsData = (projectsData: Project[]) => {
    setState((prev) => ({ ...prev, projectsData }));
  };

  const setError = (error: string) => {
    setState((prev) => ({ ...prev, error }));
  };

  const getAllProjects = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const data = await FirebaseServices.getAllProjects();
      if (data) {
        setProjectsData(data);
      } else {
        setProjectsData([]);
      }
    } catch (e: any) {
      setError(e?.message || "Error fetching projects");
      setProjectsData([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading: state.isLoading,
    error: state.error,
    projectsData: state.projectsData,
    getAllProjects,
  };
};

export {useFetch};