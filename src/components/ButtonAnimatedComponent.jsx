import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import texts from "../utils/texts";
const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 8px;
  &:hover {
    transform: rotate(360deg) scale(1.1);
  }
`;

const AnimationButton = ({ urlIcon, altIcon, urlRepo = "" }) => {
  const notify = () =>
    toast.info(texts.info_project, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const redirectToExternalPage = () => {
    if (urlRepo.length > 1) {
      window.open(urlRepo, "_blank");
    } else {
      notify();
    }
  };

  return (
    <StyledButton onClick={redirectToExternalPage}>
      <img src={urlIcon} alt={altIcon} />
    </StyledButton>
  );
};

export default AnimationButton;
