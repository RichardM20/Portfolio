import Navbar from "../fragments/Navbar";
import ProfileFragment from "../fragments/Profile";
import ProjectsFragment from "../fragments/Projetcs";
 
import "../styles/app.css";
function App() {
  return (
    <>
      <Navbar />
      <ProfileFragment />
      <ProjectsFragment />
    </>
  );
}

export default App;
