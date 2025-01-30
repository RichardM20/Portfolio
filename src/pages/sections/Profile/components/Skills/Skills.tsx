import React from 'react';

import { t } from 'i18next';

import FlutterIcon from '../../../../../assets/icons/flutter.svg';
import GitIcon from '../../../../../assets/icons/git.svg';
import JsIcon from '../../../../../assets/icons/javascript.svg';
import ReactIcon from '../../../../../assets/icons/react.svg';
import { TRANSLATIONS_GLOBAL } from '../../../../../shared/constants/translations';

import './Skills.scss';

const SkillsFragment = () => {
  return (
    <div className="skills flex flex-col justify-center items-center">
      <p>{t(TRANSLATIONS_GLOBAL.my_skills)}</p>
      <div className="list flex flex-row justify-between items-center">
        <img src={FlutterIcon} className="skill-flutter" alt="Flutter Icon" />
        <img src={ReactIcon} className="skill-react" alt="React Icon" />
        <img src={JsIcon} className="skill-javascript" alt="Javascript Icon" />
        <img src={GitIcon} className="skill-git" alt="Git Icon" />
      </div>
    </div>
  );
};

export default SkillsFragment;
