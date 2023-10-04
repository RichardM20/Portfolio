import { useState } from "react";
import "../styles/navbar.css";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleClicked = () => {
    setOpen(!isOpen);
 
  };

  return (
    <>
      <div className={`navbar ${isOpen && "open"}`}>
        <p className="nav-logo">Rick</p>
        <div className={`navbar-items ${isOpen && "open"}`}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={`navbar-toggle ${isOpen && "open"}`} onClick={toggleClicked}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
