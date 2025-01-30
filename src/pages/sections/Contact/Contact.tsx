import React from 'react';

import { t } from 'i18next';

import { TRANSLATIONS_GLOBAL } from '../../../shared/constants/translations';
import { useTheme } from '../../../shared/context/themeContext';
import './Contact.scss';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`contact flex flex-col justify-center items-center ${theme}`}>
      <p>{t(TRANSLATIONS_GLOBAL.contact)}</p>
      <div className="card-c flex  justify-evenly items-center">{}</div>
    </div>
  );
};

export default Contact;
