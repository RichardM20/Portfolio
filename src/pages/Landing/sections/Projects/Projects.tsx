import React, { useCallback, useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';

import ProjectCard from './Card/Card';
import { IProjectData } from '../../../../shared/interfaces/projects';
import { FirebaseServices } from '../../../../shared/services/firebase/firebase';
import './Projects.scss';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getProjects = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const resp = await FirebaseServices.getAllProjects();
      setProjects(resp);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);
  if (loading) {
    return (
      <div className="projects-container flex flex-wrap justify-start items-stretch">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} variant="rectangular" className="skeleton" />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <div className="projects-container flex flex-col justify-center items-center">
        <h1>There was an error loading the projects</h1>
      </div>
    );
  }

  return (
    <div className="projects-container flex flex-wrap justify-start items-stretch">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          releaseData={project.releaseData}
        />
      ))}
    </div>
  );
};

export default Projects;
