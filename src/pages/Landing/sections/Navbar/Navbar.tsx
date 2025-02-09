import React from 'react';

import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';

import './Navbar.scss';

const Navbar: React.FC = () => {
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
    <div className={'navbar flex flex-row justify-between items-center relative'}>
      <p className="name">{t(TRANSLATIONS_GLOBAL.navbar_name)}</p>
      <div className={'navbar-items flex flex-row  '}>
        <div className="navbar-item" onClick={changeLanguage}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
