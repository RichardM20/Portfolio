import React from 'react';

import { useTheme } from '../../../shared/context/themeContext';
import texts from '../../../utils/texts';
import './Footer.scss';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`footer flex justify-center items-center ${theme}`}>
      <p>{texts.footer_text}</p>
    </div>
  );
};

export default Footer;
