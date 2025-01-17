import React from 'react';

import { GenericProps } from '../../../constants/genericInterfaces';
import texts from '../../../utils/texts';

import './About.scss';

const AboutFragment: React.FC<GenericProps> = ({ id }) => {
  return (
    <div id={id} className="about-me--container">
      <p>{texts.about_me_title}</p>
      <div className="about-me--card">
        <p>{texts.about_me}</p>
      </div>
    </div>
  );
};

export default AboutFragment;
