import AboutFragment from "../fragments/About";
import ContactFragment from "../fragments/Contact";
import FooterFragment from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import ProfileFragment from "../fragments/Profile";
import ProjectsFragment from "../fragments/Projetcs";

import "../styles/app.css";
import GoTopButtonComponent from "../components/GoToTopComponent";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <ProfileFragment id={"home"} />
        <ProjectsFragment id={"projects"} />
        <AboutFragment id={"about"} />
        <ContactFragment id={"contact"} />
        <FooterFragment />
        <GoTopButtonComponent />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
