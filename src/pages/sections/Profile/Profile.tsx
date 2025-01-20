import React from 'react';

import ButtonDownload from './components/ButtonDownload/ButtonDownload';
import Skills from './components/Skills/Skills';
import { GenericProps } from '../../../constants/genericInterfaces';
import { useTheme } from '../../../shared/context/themeContext';
import texts from '../../../utils/texts';

import './Profile.scss';

const ProfileFragment: React.FC<GenericProps> = ({ id }) => {
  const { theme } = useTheme();

  return (
    <div id={id} className="profile">
      <div className="info flex justify-center items-center">
        <div className="me">
          <p className={theme}>{texts.profession}</p>
          <p>
            Hi, i&apos;m <span>Richard morales</span>
          </p>
          <p>{texts.profession_text}</p>
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
