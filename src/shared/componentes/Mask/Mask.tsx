import React from 'react';

import './Mask.scss';

interface IMaskTemplate {
  children?: React.ReactNode;
}

const MaskTemplate: React.FC<IMaskTemplate> = ({ children }) => {
  return <div className="mask-tempalte flex">{children}</div>;
};

export default MaskTemplate;
