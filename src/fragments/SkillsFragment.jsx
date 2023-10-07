 
import FlutterIcon  from '../assets/icons/flutter.svg';
import ReactIcon  from '../assets/icons/react.svg';
import JsIcon  from '../assets/icons/javascript.svg';
import GitIcon  from '../assets/icons/git.svg';
import '../styles/skills.css'
import texts from '../utils/texts';
const SkillsFragment = () => {

  return (
    <>
    <div className='skills-container'>
      <p>{texts.skills_text}</p>
    <div className="skills-container--list">
         <img src={FlutterIcon} className="skill-flutter" alt="Flutter Icon" />
         <img src={ReactIcon} className="skill-react" alt="React Icon" />
         <img src={JsIcon} className="skill-javascript" alt="Javascript Icon" />
         <img src={GitIcon} className="skill-git" alt="Git Icon" />
      </div>
    </div>
    </>
  );
};

export default SkillsFragment;
