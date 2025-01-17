import React, { useState } from 'react';

import { Link } from 'react-scroll';

import '../styles/navbar.css';
import texts from '../utils/texts';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleClicked = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar ${isOpen && 'open'}`}>
        <p className="nav-logo">{texts.nav_name}</p>
        <div className={`navbar-items ${isOpen && 'open'}`}>
          <Link id="navbar-item" to="home" onClick={() => setOpen(false)}>
            {texts.nav_home}
          </Link>
          <Link id="navbar-item" to="projects" onClick={() => setOpen(false)}>
            {texts.nav_projects}
          </Link>
          <Link id="navbar-item" to="about" onClick={() => setOpen(false)}>
            {texts.nav_about}
          </Link>
          <Link id="navbar-item" to="contact" onClick={() => setOpen(false)}>
            {texts.nav_contact}
          </Link>
        </div>
        <div className={`navbar-toggle ${isOpen && 'open'}`} onClick={toggleClicked}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
