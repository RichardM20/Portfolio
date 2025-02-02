import React from 'react';

import { t } from 'i18next';
import { Trans } from 'react-i18next';

import Skills from './components/Skills/Skills';
import BlurCardContainer from '../../../../shared/componentes/BlurCard/BlurCardContainer';
import GenericButton from '../../../../shared/componentes/GenericButton/GenericcButton';
import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';
import { USER_NAME } from '../../../../shared/constants/user';
import { useTheme } from '../../../../shared/context/themeContext';

import './Profile.scss';
import Experience from './components/Experience/Experience';

const Profile: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="profile flex flex-col">
      <div className="info flex justify-between items-center">
        <div className="me">
          <p>
            {
              <Trans
                i18nKey={TRANSLATIONS_GLOBAL.greeting}
                components={{
                  span: <span className="name"></span>,
                  br: <br />
                }}
                values={{ user: USER_NAME }}
              />
            }
          </p>
          <p>{t(TRANSLATIONS_GLOBAL.profession_text)}</p>
          <div className="actions flex flex-row">
            <GenericButton text={t(TRANSLATIONS_GLOBAL.download)} action={() => {}} style="gradient" />
          </div>
        </div>
        <div className="profile-photo">
          <img src="https://avatars.githubusercontent.com/u/64317751?v=4" />
        </div>
      </div>
      <Experience />
      <Skills />
    </div>
  );
};

export default Profile;
