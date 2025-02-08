import React from 'react';

import { faArrowLeft, faChevronRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from 'i18next';

import BlurCardContainer from '../../../../../shared/componentes/BlurCard/BlurCardContainer';
import GenericButton from '../../../../../shared/componentes/GenericButton/GenericcButton';
import MaskTemplate from '../../../../../shared/componentes/Mask/Mask';
import { TRANSLATIONS_GLOBAL } from '../../../../../shared/constants/translations';
import { useProject } from '../../../../../shared/projectContext';
import './ProjectDetail.scss';

const ProjectDetail: React.FC = () => {
  const { projectSelected } = useProject();

  const handleBack = () => {
    window.history.back();
  };
  const handleLink = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <MaskTemplate>
      <div className="project-detail-container flex flex-col jusity-start items-start gap-24">
        <div className="top-actions flex flex-row items-center gap-12">
          <GenericButton
            text={t(TRANSLATIONS_GLOBAL.back)}
            style="solid"
            leadingIcon={faArrowLeft}
            className="back-button"
            action={handleBack}
          />
          <p className="subtle"> {t(TRANSLATIONS_GLOBAL.projects)}</p>
          <FontAwesomeIcon icon={faChevronRight} color="gray" />
          <p className="project-name"> {projectSelected?.title}</p>
        </div>
        <div className="project-detail flex flex-row gap-40">
          <div className="image-container">
            <img src={projectSelected?.image} alt={projectSelected?.title} />
          </div>
          <div className="information-column flex flex-col gap-24">
            <h2 className="info-title">{projectSelected?.title}</h2>
            <p className="info-description">{projectSelected?.description}</p>
            <BlurCardContainer blurPercentage={12} className="links-container flex flex-wrap justify-start gap-16">
              {Object.entries(projectSelected?.releaseData.urls || {}).map(([key, url]) => (
                <BlurCardContainer onClick={() => handleLink(url)} key={key} blurPercentage={24} className="link-item">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </BlurCardContainer>
              ))}
            </BlurCardContainer>
            <div className="technologies-container flex flex-col gap-24">
              <div className="flex flex-row items-center gap-28">
                <BlurCardContainer blurPercentage={8} className="tech-icon flex items-center justify-center">
                  <FontAwesomeIcon icon={faCode} color="#fff" />
                </BlurCardContainer>
                <h3 className="tech-title">{t(TRANSLATIONS_GLOBAL.tech_used)}</h3>
              </div>
              <div className="tech-list flex flex-wrap gap-24">
                {projectSelected?.technologies.map((tech) => (
                  <BlurCardContainer key={`tech-${tech}`} blurPercentage={8} className="tech-item">
                    {tech}
                  </BlurCardContainer>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaskTemplate>
  );
};

export default ProjectDetail;
