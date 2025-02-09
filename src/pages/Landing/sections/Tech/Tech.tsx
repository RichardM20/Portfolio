import React, { useState } from 'react';

import gatito01 from '../../../../assets/images/gato_01.png';
import gatito02 from '../../../../assets/images/gato_02.jpeg';
import gatito03 from '../../../../assets/images/gato_03.jpeg';
import BlurCardContainer from '../../../../shared/componentes/BlurCard/BlurCardContainer';
import { TECH_ITEMS } from '../../../../shared/constants/techs';
import './Tech.scss';

const Tech: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('');

  const handleImgSrc = (level?: string) => {
    switch (level) {
      case 'sss':
        setImgSrc(gatito02);
        break;
      case 'ss':
        setImgSrc(gatito03);
        break;
      case 's':
        setImgSrc(gatito01);
        break;
      default:
        setImgSrc('');
    }
  };

  return (
    <div className="tech-container">
      <div className="tech-list flex flex-wrap justify-center items-center gap-24">
        {TECH_ITEMS.map((tech, index) => (
          <BlurCardContainer
            onMouseEnter={() => handleImgSrc(tech.level)}
            onMouseLeave={() => handleImgSrc()}
            key={index}
            className={`tech-item flex items-center justify-center ${tech.level}`}
            blurPercentage={14}
          >
            <img src={tech.icon} alt={`icon-${tech.name}`} />
          </BlurCardContainer>
        ))}
      </div>

      <div className="img-container flex flex-col items-center justify-center">
        <div>{imgSrc && <img src={imgSrc} alt="gatito" />}</div>
      </div>
    </div>
  );
};

export default Tech;
