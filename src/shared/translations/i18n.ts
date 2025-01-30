import i18n, { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import enFile from '../../assets/translations/en.json';
import esFile from '../../assets/translations/es.json';

use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      es: {
        translation: esFile
      },
      en: {
        translation: enFile
      }
    }
  });

export default i18n;
