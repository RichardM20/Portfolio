import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectDetail from './Landing/sections/Projects/ProjectDetail/ProjectDetail';
import Main from './Main/Main';
import { TRANSLATIONS_GLOBAL } from '../shared/constants/translations';
import { ProjectsProvider } from '../shared/projectContext';
import '../theme/utils.scss';
import './App.scss';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t(TRANSLATIONS_GLOBAL.portfolio);
  }, [t]);

  return (
    <ProjectsProvider>
      <Router>
        <div data-experience="new" className="app">
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="detail-project" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ProjectsProvider>
  );
}

export default App;
