import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #ff2876;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  border: 2px solid #ff2876;

  &:hover {
    background: transparent;
    color: #ff2876;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  border: 0;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
`;
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #ff2876;
  border: none;

  &:hover {
    background-color: #ff2876;
    color: white;
  }
`;
