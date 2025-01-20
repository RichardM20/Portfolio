import React from 'react';

import RomboConIcono from '../../../components/RomboComponent';
import { GenericProps } from '../../../constants/genericInterfaces';
import { useTheme } from '../../../shared/context/themeContext';
import texts from '../../../utils/texts';
import contactLinks from '../../../utils/utils';
import './Contact.scss';

const Contact: React.FC<GenericProps> = ({ id }) => {
  const { theme } = useTheme();

  return (
    <div id={id} className={`contact flex flex-col justify-center items-center ${theme}`}>
      <p>{texts.contact_me_title}</p>
      <div className="card-c flex  justify-evenly items-center">
        {contactLinks.map((element, index) => (
          <RomboConIcono icon={element.icon} text={element.name} url={element.link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
