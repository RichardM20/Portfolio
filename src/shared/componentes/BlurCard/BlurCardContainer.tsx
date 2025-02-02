import React from 'react';

import './BlurCardContainer.scss';

interface IBlurCardContainer {
  className?: string;
  blurPercentage?: number;
  children: React.ReactNode;
}

const BlurCardContainer: React.FC<IBlurCardContainer> = ({ className, blurPercentage = 14, children }) => {
  const containerClassName = `blur-card-container ${className}`;
  return (
    <div style={{ backdropFilter: `blur(${blurPercentage}px)` }} className={containerClassName}>
      {children}
    </div>
  );
};

export default BlurCardContainer;
