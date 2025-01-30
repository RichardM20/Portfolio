import React from 'react';

import './Rombo.scss';
import { useTheme } from '../../../../../shared/context/themeContext';

interface IRombo {
  link: string;
  icon: string;
  name: string;
}
const Rombo: React.FC<IRombo> = ({ link, icon, name }) => {
  const { theme } = useTheme();

  return (
    <a
      href={link}
      target="_blank"
      className={`rombo flex flex-col justify-center items-center ${name} ${theme}`}
      rel="noreferrer"
    >
      <img src={icon} className="icon" />
    </a>
  );
};

export default Rombo;
