import SkillsFragment from "../fragments/SkillsFragment";
import "../styles/profile.css";
const ProfileFragment = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-container--info">
          <div className="profile-container--info-me">
            <p>Flutter Developer</p>
            <p>
              Hi, i'm <span>Richard morales</span>
            </p>
            <p>
              I'm a passionate software developer from Colombia, constantly
              searching for innovative solutions. I enjoy creating and
              perfecting applications that make a difference.
            </p>
          </div>
          <div className="profile-container--info-photo">
            <img src="https://i.pinimg.com/originals/4c/fb/06/4cfb06d09f6fafdfa58b759946d21b02.jpg" />
            <div className="profile-container--experience-container">
              <p>+2 Years<br/>Experience</p>
            </div>
          </div>
        </div>

        <SkillsFragment />
      </div>
    </>
  );
};

export default ProfileFragment;
