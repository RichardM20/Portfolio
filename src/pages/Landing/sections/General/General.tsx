import React from 'react';

import { t } from 'i18next';

import BlurCardContainer from '../../../../shared/componentes/BlurCard/BlurCardContainer';
import { TABBAR_ITEMS } from '../../../../shared/constants/tabbar';
import './General.scss';
import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';

interface ITabbar {
  tabSelected: number;
  setTabSelected: (index: number) => void;
}

const Tabbar: React.FC<ITabbar> = ({ setTabSelected, tabSelected }) => {
  const handleTabbarItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (tabSelected === index) return;
    const target = event.currentTarget;

    const ripple = document.createElement('span');
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    const existingRipple = target.getElementsByClassName('ripple')[0];
    if (existingRipple) {
      existingRipple.remove();
    }

    target.appendChild(ripple);
    setTabSelected(index);
  };

  return (
    <div className="general-container flex flex-col justify-center items-center w-full">
      <div className="top flex flex-col justify-center items-center w-full">
        <h1>{t(TRANSLATIONS_GLOBAL.portfolio_showcase)}</h1>
        <div className="subtle">{t(TRANSLATIONS_GLOBAL.portfolio_showcase_text)}</div>
      </div>
      <BlurCardContainer className="tabbar-container flex flex-row justify-center items-center">
        {TABBAR_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`tabbar-item flex flex-col justify-center items-center ${tabSelected === index ? 'active' : ''}`}
            onClick={(e) => handleTabbarItemClick(e, index)}
          >
            {t(item.label)}
          </div>
        ))}
      </BlurCardContainer>
    </div>
  );
};

export default Tabbar;
