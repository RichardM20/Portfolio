import React from 'react';


import { GenericProps } from '../../../constants/genericInterfaces';
import { useTheme } from '../../../shared/context/themeContext';
import texts from '../../../utils/texts';

import './About.scss';

const AboutFragment: React.FC<GenericProps> = ({ id }) => {
  const { theme } = useTheme();

  return (
    <div id={id} className={`about-me ${theme}`}>
      <p className="me">{texts.about_me_title}</p>
      <div className="card">{texts.about_me}</div>
    </div>
  );
};

export default AboutFragment;
