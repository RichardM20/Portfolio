import React from 'react';

import { ToastContainer } from 'react-toastify';

import GoTopButtonComponent from '../components/GoToTopComponent';
import AboutFragment from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Navbar from './sections/Navbar/Navbar';
import ProfileFragment from './sections/Profile/Profile';
import { ThemeProvider } from '../shared/context/themeContext';
import Footer from './sections/Footer/Footer';
import '../theme/utils.scss';
import './App.scss';

function App() {
  return (
    <div data-experience="new" className="app ">
      <ThemeProvider>
        <Navbar />
        <ProfileFragment id={'home'} />
        <p>Project</p>
        <AboutFragment id={'about'} />
        <Contact id={'contact'} />
        <Footer />
        <GoTopButtonComponent />
        <ToastContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
