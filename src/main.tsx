import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';

import Main from './pages/App';
import { FirebaseServices } from './shared/services/firebase/firebase';
import './shared/translations/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

FirebaseServices.initializateServices();

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
  </React.StrictMode>
);
