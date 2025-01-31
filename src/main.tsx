import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';

import App from './pages/app';
import LoadingScreen from './pages/Loading/Loading';
import { FirebaseServices } from './shared/services/firebase/firebase';
import './shared/translations/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

FirebaseServices.initializateServices();

root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
