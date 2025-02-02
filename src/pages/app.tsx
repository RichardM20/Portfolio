import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import Landing from './Landing/Landing';
import { TRANSLATIONS_GLOBAL } from '../shared/constants/translations';
import Experience from './Landing/sections/Experience/Experience';
import General from './Landing/sections/General/General';

import '../theme/utils.scss';
import './App.scss';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t(TRANSLATIONS_GLOBAL.portfolio);
  }, [t]);

  return (
    <div data-experience="new" className="app">
      <div className="mask">
        <Landing>
          <Experience />
          <General />
        </Landing>
      </div>
    </div>
  );
}

export default App;
