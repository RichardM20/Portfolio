import React from 'react';

import { t } from 'i18next';

import CvIcon from '../../../../../../assets/icons/cv.svg';
import pdf from '../../../../../../assets/pdf/cv_rick.pdf';
import { TRANSLATIONS_GLOBAL } from '../../../../../../shared/constants/translations';
import './ButtonDownload.scss';

interface ButtonDownloadProps {
  className?: string;
}

const ButtonDownload: React.FC<ButtonDownloadProps> = ({ className }) => {
  const classNameContainer = ['button-download', className].join(' ');

  return (
    <a download href={pdf} className={`flex flex-row justify-start items-center ${classNameContainer}`}>
      <img src={CvIcon} className="icon" alt="" />
      <p className="download-text">{t(TRANSLATIONS_GLOBAL.download)}</p>
    </a>
  );
};

export default ButtonDownload;
