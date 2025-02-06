import React from 'react';

import { faArrowLeft, faChevronRight, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from 'i18next';

import BlurCardContainer from '../../../../../shared/componentes/BlurCard/BlurCardContainer';
import GenericButton from '../../../../../shared/componentes/GenericButton/GenericcButton';
import { TRANSLATIONS_GLOBAL } from '../../../../../shared/constants/translations';
import { useProject } from '../../../../../shared/projectContext';
import './ProjectDetail.scss';

const ProjectDetail: React.FC = () => {
  const { projectSelected } = useProject();

  const handleBack = () => {
    window.history.back();
  };
  return (
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
      <div className="project-detail flex flex-row-reverse gap-40">
        <div className="image-container">
          <img src={projectSelected?.image} alt={projectSelected?.title} />
        </div>
        <div className="information-column flex flex-col gap-24">
          <h2 className="info-title">{projectSelected?.title}</h2>
          <p className="info-description">{projectSelected?.description}</p>
          <BlurCardContainer blurPercentage={12} className="links-container flex flex-wrap justify-start gap-16">
            <>
              {projectSelected?.releaseData.urls.appstore && (
                <BlurCardContainer blurPercentage={24} className="link-item">
                  Appstore
                </BlurCardContainer>
              )}
              {projectSelected?.releaseData.urls.playstore && (
                <BlurCardContainer blurPercentage={24} className="link-item">
                  Playstore
                </BlurCardContainer>
              )}
              {projectSelected?.releaseData.urls.github && (
                <BlurCardContainer blurPercentage={24} className="link-item">
                  Github
                </BlurCardContainer>
              )}
              {projectSelected?.releaseData.urls.demo && (
                <BlurCardContainer blurPercentage={24} className="link-item">
                  Demo
                </BlurCardContainer>
              )}
            </>
          </BlurCardContainer>
          <div className="technologies-container flex flex-col gap-24">
            <div className="flex flex-row items-center gap-28">
              <BlurCardContainer blurPercentage={8} className="tech-icon flex items-center justify-center">
                <FontAwesomeIcon icon={faCode} color="#fff" />
              </BlurCardContainer>
              <h3 className="tech-title">{t(TRANSLATIONS_GLOBAL.tech_used)}</h3>
            </div>
            {projectSelected?.technologies.map((tech) => (
              <BlurCardContainer key={`tech-${tech}`} blurPercentage={8} className="tech-item">
                {tech}
              </BlurCardContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
