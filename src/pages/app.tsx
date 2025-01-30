import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { TRANSLATIONS_GLOBAL } from '../shared/constants/translations';
import { ThemeProvider } from '../shared/context/themeContext';
import About from './Landing/sections/About/About';
import Contact from './Landing/sections/Contact/Contact';
import Footer from './Landing/sections/Footer/Footer';
import Navbar from './Landing/sections/Navbar/Navbar';
import Profile from './Landing/sections/Profile/Profile';
import Projects from './Landing/sections/Projects/Projects';
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
        <Profile />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
