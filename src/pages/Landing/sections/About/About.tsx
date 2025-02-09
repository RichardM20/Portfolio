import React from 'react';

import { Trans } from 'react-i18next';

import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="about-container flex flex-col justify-start">
      <p>
        {
          <Trans
            i18nKey={TRANSLATIONS_GLOBAL.about_me}
            components={{
              span: <span className="name"></span>,
              br: <br />
            }}
            values={{ years: 4 }}
          />
        }
      </p>
    </div>
  );
};

export default About;
