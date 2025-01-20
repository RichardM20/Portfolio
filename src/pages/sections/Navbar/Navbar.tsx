import React, { useState } from 'react';

import { Link } from 'react-scroll';

import MOON_ICON from '../../../assets/icons/moon_3.svg';
import SUN_ICON from '../../../assets/icons/sun_2.svg';
import { NAVBAR_ITEMS } from '../../../constants/navbar';
import { useTheme } from '../../../shared/context/themeContext';
import texts from '../../../utils/texts';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  const toggleClicked = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen && 'open'} flex flex-row justify-between items-center relative`}>
      <p className="name">{texts.nav_name}</p>
      <div className={`navbar-items flex flex-row ${isOpen && 'open'}`}>
        {NAVBAR_ITEMS.map((item) =>
          item.id === 'theme' ? (
            <div className={`navbar-item theme ${theme}`} key={`index-${item.id}`} onClick={toggleTheme}>
              <img src={theme === 'dark' ? SUN_ICON : MOON_ICON} alt="sun-icon-theme" />
            </div>
          ) : (
            <Link
              key={`index-${item.id}`}
              to={item.id}
              duration={500}
              onClick={toggleClicked}
              className={`navbar-item  ${item.id}`}
              smooth={true}
              offset={-70}
              spy={true}
            >
              {item.title}
            </Link>
          )
        )}
      </div>
      <div className={`navbar-toggle ${isOpen && 'open'}`} onClick={toggleClicked}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
