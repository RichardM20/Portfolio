import SkillsFragment from "../fragments/SkillsFragment";
import "../styles/profile.css";
const ProfileFragment = ({id}) => {
  return (
    <>
      <div id={id} className="profile-container">
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
            <img src="https://avatars.githubusercontent.com/u/64317751?v=4" />
          </div>
        </div>

        <SkillsFragment />
      </div>
    </>
  );
};

export default ProfileFragment;
