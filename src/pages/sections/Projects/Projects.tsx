import type React from 'react';
import { useEffect, useState } from 'react';

import { Skeleton } from '@mui/material';
import { t } from 'i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProjectCard from './sections/ProjectCard';
import { TRANSLATIONS_GLOBAL } from '../../../shared/constants/translations';
import { useTheme } from '../../../shared/context/themeContext';
import type { IProjectData } from '../../../shared/interfaces/projects';
import { FirebaseServices } from '../../../shared/services/firebase/firebase';

import './Projects.scss';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProjectData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { theme } = useTheme();

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const projects = await FirebaseServices.getAllProjects();
        setProjects(projects);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px'
        }
      }
    ]
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={`projects flex flex-col items-center ${theme}`}>
      <p>{t(TRANSLATIONS_GLOBAL.projects)}</p>
      {loading ? (
        <div className="skeletons">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="skeleton">
              <Skeleton className="skeleton" variant="rectangular" />
            </div>
          ))}
        </div>
      ) : (
        <div className="project-carousel">
          <Slider {...settings}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="project-slide">
                <ProjectCard
                  id={''}
                  title={''}
                  description={''}
                  image={''}
                  technologies={[]}
                  releaseData={{
                    isPublished: false,
                    releaseDate: '',
                    urls: {
                      github: undefined,
                      demo: undefined,
                      appstore: undefined,
                      playstore: undefined
                    }
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Projects;
