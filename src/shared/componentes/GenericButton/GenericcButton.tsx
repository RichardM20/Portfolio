import React from 'react';

import './GenericButton.scss';

interface IGenericButton {
  text: string;
  action: () => void;
  leadingIcon?: string;
  style?: 'gradient' | 'solid' | 'outline';
}
const GenericButton: React.FC<IGenericButton> = ({ action, text, style, leadingIcon }) => {
  return (
    <button onClick={action} className={`generic-button flex flex-row justify-start items-center ${style}`}>
      {leadingIcon && <img className="icon" src={leadingIcon} alt="button-icon" />}
      {text}
    </button>
  );
};

export default GenericButton;
