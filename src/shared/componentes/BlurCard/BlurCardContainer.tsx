import React from 'react';

import './BlurCardContainer.scss';

interface IBlurCardContainer {
  className?: string;
  blurPercentage?: number;
  children: React.ReactNode;
  onClick?: () => void;
}

const BlurCardContainer: React.FC<IBlurCardContainer> = ({ className, blurPercentage = 14, children, onClick }) => {
  const containerClassName = `blur-card-container ${className}`;
  return (
    <button onClick={onClick} style={{ backdropFilter: `blur(${blurPercentage}px)` }} className={containerClassName}>
      {children}
    </button>
  );
};

export default BlurCardContainer;
