import React from "react";
import styled from "styled-components";

const RomboConIcono = ({ icon, text, url }) => {
  const redirectToExternalPage = () => {
    window.open(url, "_blank");
  };

  return (
    <RomboContainer onClick={redirectToExternalPage}>
      <div className="rombo">
        <img src={icon} alt="" />
      </div>
      <p className="rombo-text">{text}</p>
    </RomboContainer>
  );
};

export default RomboConIcono;

const RomboContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-align: center;

  .rombo {
    width: 100%;
    min-width: 80px;
    max-width: 120px;
    height: 100%;
    min-height: 80px;
    max-height: 120px;
    background-color: transparent;
    border: 1px solid #bfbfbf51;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    transform: rotate(46deg);

    &:hover {
      box-shadow: 6px 6px 50px #1390d438;
      border: 1px solid #1390d41a;
      transform: rotate(406deg) scale(1.05);
    }

    &:hover + .rombo-text {
      color: #1390d4;
    }
  }

  .rombo > img {
    height: 45px;
    transform: rotate(315deg);
  }

  .rombo-text {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    &:hover {
      color: #1390d4;
    }
  }
  @media (max-width: 720px) {
    .rombo {
      width: 100%;
      min-width: 50px;
      max-width: 50px;
      height: 100%;
      min-height: 50px;
      max-height: 50px;
    }
    .rombo > img {
      height: 50%;
      transform: rotate(315deg);
    }
    .rombo-text {
      font-size: 0.8em;
    }
  }
`;