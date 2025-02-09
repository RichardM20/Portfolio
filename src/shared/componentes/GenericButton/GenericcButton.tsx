import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './GenericButton.scss';

interface IGenericButton {
  className?: string;
  text: string;
  action: () => void;
  leadingIcon?: any;
  style?: 'gradient' | 'solid' | 'outline';
}
const GenericButton: React.FC<IGenericButton> = ({ action, text, style, leadingIcon, className }) => {
  return (
    <button
      onClick={action}
      className={`generic-button flex flex-row justify-start items-center ${className} ${style}`}
    >
      {leadingIcon && <FontAwesomeIcon icon={leadingIcon} size="1x" />}
      {text}
    </button>
  );
};

export default GenericButton;
