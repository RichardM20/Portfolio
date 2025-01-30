import React from 'react';

import { t } from 'i18next';
import { Trans } from 'react-i18next';

import ButtonDownload from './components/ButtonDownload/ButtonDownload';
import Skills from './components/Skills/Skills';
import { TRANSLATIONS_GLOBAL } from '../../../shared/constants/translations';
import { useTheme } from '../../../shared/context/themeContext';

import './Profile.scss';

const ProfileFragment: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="profile">
      <div className="info flex justify-center items-center">
        <div className="me">
          <p className={theme}>{t(TRANSLATIONS_GLOBAL.profession)}</p>
          <p>
            {
              <Trans
                i18nKey={TRANSLATIONS_GLOBAL.greeting}
                components={{
                  span: <span></span>
                }}
              />
            }
          </p>
          <p>{t(TRANSLATIONS_GLOBAL.profession_text)}</p>
        </div>
        <div className="photo">
          <img src="https://avatars.githubusercontent.com/u/64317751?v=4" />
          <ButtonDownload className="icon-download" />
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default ProfileFragment;
