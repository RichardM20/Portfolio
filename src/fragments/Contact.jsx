import RomboConIcono from "../components/RomboComponent";
import contactLinks from "../utils/utils";
import texts from "../utils/texts";


import "../styles/contact.css";
const ContactFragment = ({ id }) => {
  return (
    <>
      <div id={id} className="contact-container">
        <p>{texts.contact_me_title}</p>
        <div className="contact-card">
          {contactLinks.map((element, index) => (
            <RomboConIcono
              icon={element.icon}
              text={element.name}
              url={element.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactFragment;
