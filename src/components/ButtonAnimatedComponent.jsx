import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right:13px;
  &:hover {
    transform: rotate(360deg) scale(1.1);
  }
`;

const AnimationButton = ({ urlIcon, altIcon,urlRepo }) => {
    const redirectToExternalPage = () => {
        window.open(urlRepo, '_blank');;
      };
    
  return (
    <StyledButton onClick={redirectToExternalPage}>
      <img src={urlIcon} alt={altIcon} />
    </StyledButton>
  );
};

export default AnimationButton;
