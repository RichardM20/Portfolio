import React from 'react';

import { t } from 'i18next';

 
import { TRANSLATIONS_GLOBAL } from '../../../../../../shared/constants/translations';

import './Skills.scss';

const TAB_ITEMS = [
  {
    title: TRANSLATIONS_GLOBAL.my_skills,
    icon: 'skills'
  },
  {
    title: TRANSLATIONS_GLOBAL.projects,
    icon: 'skills'
  },
  {
    title: TRANSLATIONS_GLOBAL.tech_stack,
    icon: 'skills'
  }
];
const SkillsFragment = () => {
  return (
    <div className="general flex flex-col justify-center items-center">
      <p>Some title</p>
      <div className="tab flex flex-row justify-center items-center">
        {TAB_ITEMS.map((tabItem, index) => (
          <div key={index} className="tab-item">
            <p>{t(tabItem.title)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsFragment;
