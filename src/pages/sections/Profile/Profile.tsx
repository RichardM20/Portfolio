import React from 'react';

import ButtonDownloadCVComponent from '../../../components/ButtonDownloadCV';
import { GenericProps } from '../../../constants/genericInterfaces';
import SkillsFragment from '../../../fragments/SkillsFragment';
import texts from '../../../utils/texts';

import './Profile.scss';

const ProfileFragment: React.FC<GenericProps> = ({ id }) => {
  return (
    <div id={id} className="profile">
      <div className="info">
        <div className="me">
          <p>{texts.profession}</p>
          <p>
            Hi, i&apos;m <span>Richard morales</span>
          </p>
          <p>{texts.profession_text}</p>
        </div>
        <div className="photo">
          <img src="https://avatars.githubusercontent.com/u/64317751?v=4" />
          <ButtonDownloadCVComponent />
        </div>
      </div>

      <SkillsFragment />
    </div>
  );
};

export default ProfileFragment;
