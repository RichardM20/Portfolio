import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { t } from 'i18next';

import BlurCardContainer from '../../../../shared/componentes/BlurCard/BlurCardContainer';
import './Experience.scss';
import { EXPERIENCE } from '../../../../shared/constants/experience';

const Experience: React.FC = () => {
  return (
    <div className="experience-container flex flex-wrap justify-around items-center gap-24 w-full">
      {EXPERIENCE.map((experience, index) => (
        <BlurCardContainer
          key={index}
          className="experience-item flex flex-col justify-center items-start w-full gap-20"
        >
          <div className="top flex flex-row justify-between items-center w-full">
            <div className="icon flex items-center justify-center">
              <FontAwesomeIcon icon={experience.icon} />
            </div>
            <div className="number">{experience.count}</div>
          </div>
          <div className="flex flex-col justify-start w-full gap-4">
            <p className="title">{t(experience.title)}</p>
            <p className="description">{t(experience.description)}</p>
          </div>
        </BlurCardContainer>
      ))}
    </div>
  );
};

export default Experience;
