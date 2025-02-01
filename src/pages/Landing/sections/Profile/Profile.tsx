import React from 'react';

import { t } from 'i18next';
import { Trans } from 'react-i18next';

import Skills from './components/Skills/Skills';
import CvIcon from '../../../../assets/icons/cv.svg';
import GenericButton from '../../../../shared/componentes/GenericButton/GenericcButton';
import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';
import { USER_NAME } from '../../../../shared/constants/user';
import { useTheme } from '../../../../shared/context/themeContext';

import './Profile.scss';

const Profile: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="profile">
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
      <div className="experience-container flex flex-row justify-between items-center w-full">
        <div className="experience-item flex flex-col items-start w-full">
          <div className="top flex flex-row justify-between items-center">
            <div className="icon flex items-center justify-center">e</div>
            <div className="number">99</div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <p className="title">Example title</p>
            <p className="description">description</p>
          </div>
        </div>
        <div className="experience-item">a</div>
        <div className="experience-item">a</div>
      </div>
      <Skills />
    </div>
  );
};

export default Profile;
