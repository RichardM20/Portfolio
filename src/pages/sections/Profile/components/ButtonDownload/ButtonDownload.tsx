import React from 'react';

import { t } from 'i18next';

import CvIcon from '../../../../../assets/icons/cv.svg';
import { TRANSLATIONS_GLOBAL } from '../../../../../shared/constants/translations';
import './ButtonDownload.scss';

interface ButtonDownloadProps {
  className?: string;
}

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ className }) => {
  const classNameContainer = ['button-download', className].join(' ');
  return (
    <button className={`flex flex-row justify-between  items-center ${classNameContainer}`}>
      <img src={CvIcon} className="icon" alt="" />
      <p className="download-text">{t(TRANSLATIONS_GLOBAL.download)}</p>
    </button>
  );
};

export default ButtonDownload;
