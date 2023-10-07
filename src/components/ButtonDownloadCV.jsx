import React from "react";
import styled from "styled-components";
import IconDownload from "../assets/icons/icon-download.svg";
import pdf from "../assets/pdf/cv.pdf";
const DownloadButton = styled.button`
  width: 100%;
  max-width: 130px;
  min-width: 100px;
  height: 45px;
  background: linear-gradient(to top, rgb(18, 123, 179), rgb(1, 166, 255));
  border: none;
  border-radius: 6px;
  box-shadow: var(--box-shadow-card);
  color: #fff;
  display: flex;
  position: absolute;
  top: 180px;
  right: 150px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 1s, transform 0.2s, color 0.3s;
  p {
    font-size: 0.9em;
    font-weight: 600;
    font-family: Inter;
  }
  .icon-download {
    height: 25px;
    width: 25px;
  }
  &:hover {
    transform: scale(0.9);
    color: #fff;
  }
  @media (max-width: 752px) {
    top: 130px;
    left: 70px;
  }
`;

const ButtonDownloadCVComponent = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "CV-Rick.pdf";
    link.click();
  };

  return (
    <DownloadButton onClick={downloadPDF}>
      <p>Download CV</p>
      <img
        className="icon-download"
        src={IconDownload}
        alt="downloading-icon"
      />
    </DownloadButton>
  );
};

export default ButtonDownloadCVComponent;
