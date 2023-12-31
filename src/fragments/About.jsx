import "../styles/about.css";
import texts from "../utils/texts";
const AboutFragment = ({ id }) => {
  return (
    <>
      <div id={id} className="about-me--container">
        <p>{texts.about_me_title}</p>
        <div className="about-me--card">
          <p>{texts.about_me}</p>
        </div>
      </div>
    </>
  );
};

export default AboutFragment;
