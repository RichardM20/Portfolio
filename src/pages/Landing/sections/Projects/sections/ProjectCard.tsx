import React from 'react';

import { t } from 'i18next';

import gatito from '../../../../../assets/images/gatito.jpg';
import { TRANSLATIONS_GLOBAL } from '../../../../../shared/constants/translations';
import { useTheme } from '../../../../../shared/context/themeContext';
import { IProjectData } from '../../../../../shared/interfaces/projects';
import './ProjectCard.scss';

const ProjectCard: React.FC<IProjectData> = ({ title, description, image, releaseData }) => {
  const { theme } = useTheme();

  const renderImage = () => {
    if (image) {
      return <img src={image} alt={`image-${title}`} className="image" />;
    }
    return <img src={gatito} alt="img-gatito" className="image" />;
  };

  return (
    <div className={`project-card flex flex-col items-start ${theme}`}>
      {renderImage()}
      <div className="card-content flex flex-col items-start justify-between">
        <div className="top flex flex-col">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className={`actions flex flex-row justify-between ${theme}`}>
          <button className="details">{t(TRANSLATIONS_GLOBAL.details)}</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
