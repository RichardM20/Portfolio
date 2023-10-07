import styled from "styled-components";
import { useState, useEffect } from "react";
import ArrowUp from "../assets/icons/arrow-up.svg";
const GoTopButtonComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll >= 250) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Wrapper>
        {showScrollButton && (
          <div className="scroll-button" onClick={scrollToTop}>
            <img src={ArrowUp} alt="long-arrow-up" />
          </div>
        )}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .scroll-button {
    box-shadow: var(--box-shadow-card);
    width: 10px;
    height: 20px;
    z-index: 999;
    position: fixed;
    border-radius: 50%;
    background: linear-gradient(
      to top,
      rgba(18, 123, 179, 0.5),
      rgba(1, 166, 255, 0.5)
    );
    rightl: 5rem;
    bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: scrollUpDown 2s infinite alternate ease-in-out;
    &:hover {
      background-color: #092643;
    }
  }

  .scroll-button > img {
    height: 100%;

    color: #ffffff;
  }
  @keyframes scrollUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

export default GoTopButtonComponent;
