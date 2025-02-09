import React from 'react';

import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

import gatito from '../../../../../assets/images/gatito.jpg';
import GenericButton from '../../../../../shared/componentes/GenericButton/GenericcButton';
import { TRANSLATIONS_GLOBAL } from '../../../../../shared/constants/translations';
import { IProjectData } from '../../../../../shared/interfaces/projects';
import { useProject } from '../../../../../shared/projectContext';
import './Card.scss';

const ProjectCard: React.FC<IProjectData> = ({ title, description, image, releaseData, id, technologies }) => {
  const navigate = useNavigate();
  const { onSelectProject } = useProject();

  const renderImage = () => {
    if (image) {
      return <img src={image} alt={`image-${title}`} className="image" />;
    }
    return <img src={gatito} alt="img-gatito" className="image" />;
  };

  const handleAction = () => {
    onSelectProject({
      title,
      description,
      image,
      releaseData,
      id: id,
      technologies: technologies
    });
    navigate('/detail-project');
  };
  const url = (): string => {
    if (releaseData.urls.github) {
      return releaseData.urls.github;
    } else if (releaseData.urls.demo) {
      return releaseData.urls.demo;
    } else if (releaseData.urls.playstore) {
      return releaseData.urls.playstore;
    } else if (releaseData.urls.appstore) {
      return releaseData.urls.appstore;
    }
    return '';
  };

  return (
    <div className={'project-card flex flex-col items-start '}>
      {renderImage()}
      <div className="card-content flex flex-col items-start justify-between">
        <div className="top flex flex-col">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className={'actions flex flex-row justify-between '}>
          <a className="demo flex flex-row items-center" href={url()} target="_blank" rel="noopener noreferrer">
            {t(TRANSLATIONS_GLOBAL.demo)} <FontAwesomeIcon icon={faExternalLink} />
          </a>
          <GenericButton
            action={handleAction}
            className="details"
            style="solid"
            text={t(TRANSLATIONS_GLOBAL.details)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
