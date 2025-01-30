import React from 'react';

import { t } from 'i18next';

import Rombo from './sections/Rombo/Rombo';
import { CONTACT_ITEMS } from '../../../../shared/constants/conatct';
import { TRANSLATIONS_GLOBAL } from '../../../../shared/constants/translations';
import { useTheme } from '../../../../shared/context/themeContext';
import './Contact.scss';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`contact flex flex-col justify-center items-center ${theme}`}>
      <p>{t(TRANSLATIONS_GLOBAL.contact)}</p>
      <div className="card-c flex  justify-evenly items-center">
        {CONTACT_ITEMS.map((item, index) => (
          <Rombo key={`conatct-item-${index}`} name={item.name} icon={item.icon} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
