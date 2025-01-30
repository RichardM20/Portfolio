import React from 'react';

import { t } from 'i18next';

import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';
import { USER_NAME } from '../../../../shared/constants/user';
import { useTheme } from '../../../../shared/context/themeContext';
import './Footer.scss';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`footer flex justify-center items-center ${theme}`}>
      <p>{t(TRANSLATIONS_GLOBAL.footer, { user: USER_NAME })}</p>
    </div>
  );
};

export default Footer;
