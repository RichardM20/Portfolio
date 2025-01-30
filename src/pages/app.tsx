import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { TRANSLATIONS_GLOBAL } from '../shared/constants/translations';
import AboutFragment from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Navbar from './sections/Navbar/Navbar';
import ProfileFragment from './sections/Profile/Profile';
import { ThemeProvider } from '../shared/context/themeContext';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects';
import '../theme/utils.scss';
import './App.scss';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t(TRANSLATIONS_GLOBAL.portfolio);
  }, [t]);

  return (
    <div data-experience="new" className="app ">
      <ThemeProvider>
        <Navbar />
        <ProfileFragment />
        <Projects />
        <AboutFragment />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
