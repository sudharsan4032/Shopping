import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform-origin: top;
  transform: ${({ visible }) => (visible ? `scaleY(1)` : `scaleY(0)`)};
  transition: all 0.2s ease;

  button {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #ff287620; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff2876; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 6rem auto;
`;
