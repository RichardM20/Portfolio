import React from 'react';

import { t } from 'i18next';

import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';
import { useTheme } from '../../../../shared/context/themeContext';
import './About.scss';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-me ${theme}`}>
      <p className="me">{t(TRANSLATIONS_GLOBAL.about_me_title)}</p>
      <div className="card">{t(TRANSLATIONS_GLOBAL.about_me, { years: 3 })}</div>
    </div>
  );
};

export default About;
