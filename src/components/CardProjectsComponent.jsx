import "../styles/card.css";
import AnimationButton from "./ButtonAnimatedComponent";
import ExternalIcon from "../assets/icons/external-icon.svg";
import GithubIcon from "../assets/icons/github.svg";

import PlayStoreIcon from "../assets/icons/gplay.svg";
import AppleStoreIcon from "../assets/icons/astore.svg";
const CardComponent = ({
  title,
  content,
  img,
  githubLink,
  isPublishedMobile,
  playStoreUrl,
  appleStoreUrl,
  demoLink,
  tech = [],
}) => {
  return (
    <>
      <div className="card-information">
        <img src={img} alt="image-project" className="card-project--image" />

        <div className="card-content">
          <p className="card-project--title">{title}</p>
          <p className="card-project--information">{content}</p>
          <div className="card-project--tech">
            <p className="card-project--tech-title">Technologies used</p>
            <div className="card-project--tech-images">
              {tech.map((item, index) => (
                <img src={item} alt={item} key={index} />
              ))}
            </div>
          </div>
          <div className="card-project--links">
            {isPublishedMobile == 1 ? (
              <>
                <AnimationButton
                  urlIcon={AppleStoreIcon}
                  altIcon={"Apple store"}
                  urlRepo={appleStoreUrl}
                  key="appleStore"
                />

                <AnimationButton
                  urlIcon={PlayStoreIcon}
                  altIcon={"Playstore Icon"}
                  urlRepo={playStoreUrl}
                  key="playStore"
                />
              </>
            ) : (
              <>
                <AnimationButton
                  urlIcon={ExternalIcon}
                  altIcon={"External Icon"}
                  urlRepo={demoLink}
                  key="externalIcon"
                />

                <AnimationButton
                  urlIcon={GithubIcon}
                  altIcon={"Github Icon"}
                  urlRepo={githubLink}
                  key="github"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
