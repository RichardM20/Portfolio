import RomboConIcono from "../components/RomboComponent";

import linkedin from "../assets/icons/linkedin.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import github from "../assets/icons/github.svg";

import "../styles/contact.css";
const ContactFragment = ({id}) => {
  const contactLinks = [
    {
      icon: whatsapp,
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send/?phone=+573022470728&text=Hola Rick, tengo un proyecto en el cual quiero que trabajemos",
    },
    {
      icon: linkedin,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/rickdeveloper/",
    },
    {
      icon: github,
      name: "Github",
      link: "https://github.com/RichardM20",
    },
  ];
  return (
    <>
      <div id={id}  className="contact-container">
        <p>Contact</p>
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
