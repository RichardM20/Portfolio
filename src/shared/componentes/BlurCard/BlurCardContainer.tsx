import React from 'react';

import './BlurCardContainer.scss';

interface IBlurCardContainer {
  className?: string;
  blurPercentage?: number;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const BlurCardContainer: React.FC<IBlurCardContainer> = ({
  className,
  blurPercentage = 14,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const containerClassName = `blur-card-container ${className}`;
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ backdropFilter: `blur(${blurPercentage}px)` }}
      className={containerClassName}
    >
      {children}
    </button>
  );
};

export default BlurCardContainer;
