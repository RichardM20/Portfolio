import { useCallback, useMemo, useState } from "react";
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

  const setIsLoading = useCallback((isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  }, []);

  const setProjectsData = useCallback((projectsData: Project[]) => {
    setState((prev) => ({ ...prev, projectsData }));
  }, []);

  const setError = useCallback((error: string) => {
    setState((prev) => ({ ...prev, error }));
  }, []);

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

  return useMemo(() => ({
    isLoading: state.isLoading,
    error: state.error,
    projectsData: state.projectsData,
    getAllProjects,
  }), [state.isLoading, state.error, state.projectsData, getAllProjects]);
};

export { useFetch };
