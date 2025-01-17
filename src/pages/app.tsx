import React from 'react';

import { ToastContainer } from 'react-toastify';

import GoTopButtonComponent from '../components/GoToTopComponent';
import ContactFragment from '../fragments/Contact';
import FooterFragment from '../fragments/Footer';
import Navbar from '../fragments/Navbar';
import ProjectsFragment from '../fragments/Projetcs';
import AboutFragment from './sections/About/About';
import ProfileFragment from './sections/Profile/Profile';
import '../styles/app.css';

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <ProfileFragment id={'home'} />
        <ProjectsFragment id={'projects'} />
        <AboutFragment id={'about'} />
        <ContactFragment id={'contact'} />
        <FooterFragment />
        <GoTopButtonComponent />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
