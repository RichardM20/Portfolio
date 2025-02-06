import React, { useCallback, useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';

import ProjectCard from './Card/Card';
import { IProjectData } from '../../../../shared/interfaces/projects';
import { FirebaseServices } from '../../../../shared/services/firebase/firebase';
import './Projects.scss';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjects = useCallback(async () => {
    try {
      const resp = await FirebaseServices.getAllProjects();
      setProjects(resp);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects]);
  if (loading) {
    return (
      <div className="projects-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} variant="rectangular" className="skeleton" />
        ))}
      </div>
    );
  }

  return (
    <div className="projects-container">
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
