import ButtonDownloadCVComponent from "../components/ButtonDownloadCV";
import SkillsFragment from "../fragments/SkillsFragment";
import "../styles/profile.css";
import texts from "../utils/texts";
const ProfileFragment = ({id}) => {
  return (
    <>
      <div id={id} className="profile-container">
        <div className="profile-container--info">
          <div className="profile-container--info-me">
            <p>{texts.profession}</p>
            <p>
              Hi, i'm <span>Richard morales</span>
            </p>
            <p>
            {texts.profession_text}
            </p>
          </div>
          <div className="profile-container--info-photo">
            <img src="https://avatars.githubusercontent.com/u/64317751?v=4" />
            <ButtonDownloadCVComponent/>
          </div>
        </div>

        <SkillsFragment />
      </div>
    </>
  );
};

export default ProfileFragment;
