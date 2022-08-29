import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 100;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: -43px;
`;

export const Emoji = styled.h1`
  font-size: 10em;
  margin: 0;
`;

export const ErrorMsg = styled.h3`
  font-size: 2em;
`;

export const GoBackButton = styled(Link)`
  border: 2px solid #ff2876;
  color: #ff2876;
  padding: 0.6rem 1.6rem;
  text-decoration: none;
  transition: 0.3s ease-out;

  &:hover {
    background-color: #ff2876;
    color: #fff;
  }
`;
