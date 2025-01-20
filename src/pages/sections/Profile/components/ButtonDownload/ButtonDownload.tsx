import React from 'react';

import DownloadIcon from '../../../../../assets/icons/icon-download.svg';
import './ButtonDownload.scss';

interface ButtonDownloadProps {
  className?: string;
}

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ className }) => {
  const classNameContainer = ['button-download', className].join(' ');
  return (
    <button className={`flex flex-row justify-between  items-center ${classNameContainer}`}>
      <p>Download</p>
      <img src={DownloadIcon} className="icon" alt="" />
    </button>
  );
};

export default ButtonDownload;
