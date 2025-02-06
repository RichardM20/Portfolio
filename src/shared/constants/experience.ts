import { faCertificate, faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { TRANSLATIONS_GLOBAL } from './translations';

export const EXPERIENCE = [
  {
    icon: faCode,
    title: TRANSLATIONS_GLOBAL.total_projects,
    description: TRANSLATIONS_GLOBAL.total_projects_text,
    count: '+5'
  },
  {
    icon: faCertificate,
    title: TRANSLATIONS_GLOBAL.certifications,
    description: TRANSLATIONS_GLOBAL.certifications_text,
    count: 3
  },
  {
    icon: faGlobe,
    title: TRANSLATIONS_GLOBAL.yaers_experience,
    description: TRANSLATIONS_GLOBAL.years_experience_text,
    count: 4
  }
];
