import React, { createContext, useContext, useState } from 'react';

import { IProjectData } from './interfaces/projects';

interface ProjectContextProps {
  projectSelected: IProjectData | null;
  onSelectProject: (val: IProjectData) => void;
}

const ProjectContext = createContext<ProjectContextProps | undefined>(undefined);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projectSelected, setProjectSelected] = useState<IProjectData | null>(() => {
    const storedProject = localStorage.getItem('projectSelected');
    return storedProject ? JSON.parse(storedProject) : null;
  });

  const onSelectProject = (val: IProjectData) => {
    setProjectSelected(val);
    localStorage.setItem('projectSelected', JSON.stringify(val));
  };

  return <ProjectContext.Provider value={{ projectSelected, onSelectProject }}>{children}</ProjectContext.Provider>;
};

export const useProject = (): ProjectContextProps => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectsProvider');
  }
  return context;
};
