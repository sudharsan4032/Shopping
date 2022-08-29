import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #12121280;
`;

export const DirectoryItemBodyContainer = styled.div`
  width: 18vw;
  height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 4px solid #ff2876;
  position: absolute;
  text-align: center;
  transition: all 0.3s ease-in;

  h2 {
    font-weight: bold;
    margin: 0;
    font-size: 22px;
    color: #fff;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    color: #fff;
  }
`;

export const DirectoryItemContainer = styled(Link)`
  position: relative;
  min-width: 30%;
  height: 380px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${DirectoryItemBodyContainer} {
      background-color: #ff2876;
      border: 0;
    }

    ${Overlay} {
      background-color: #12121200;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
