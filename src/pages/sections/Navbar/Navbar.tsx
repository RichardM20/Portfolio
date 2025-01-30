import React from 'react';

import { useTranslation } from 'react-i18next';

import MOON_ICON from '../../../assets/icons/moon_3.svg';
import SUN_ICON from '../../../assets/icons/sun_2.svg';
import { useTheme } from '../../../shared/context/themeContext';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const currentLng = i18n.language;
    if (currentLng === 'es') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  };

  return (
    <div className={'navbar   flex flex-row justify-between items-center relative'}>
      <p className="name">R1CK</p>
      <div className={'navbar-items flex flex-row  '}>
        <div className={`navbar-item theme ${theme}`} onClick={toggleTheme}>
          <img src={theme === 'dark' ? SUN_ICON : MOON_ICON} alt="sun-icon-theme" />
        </div>
        <div className={`navbar-item lng ${theme}`} onClick={changeLanguage}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
