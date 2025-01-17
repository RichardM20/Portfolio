import React from 'react';

import RomboConIcono from '../components/RomboComponent';
import { GenericProps } from '../constants/genericInterfaces';
import texts from '../utils/texts';
import contactLinks from '../utils/utils';

import '../styles/contact.css';

const ContactFragment: React.FC<GenericProps> = ({ id }) => {
  return (
    <div id={id} className="contact-container">
      <p>{texts.contact_me_title}</p>
      <div className="contact-card">
        {contactLinks.map((element, index) => (
          <RomboConIcono icon={element.icon} text={element.name} url={element.link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactFragment;
