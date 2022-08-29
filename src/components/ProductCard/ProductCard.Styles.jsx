import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // height: 480px;
  align-items: center;
  position: relative;
  overflow: hidden;

  button {
    width: 60%;
    position: absolute;
    bottom: 0;
    pointer-events: none;

    transform: translateY(200%);
  }

  &:hover {
    button {
      pointer-events: all;
      transform: translateY(-200%);
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const BaseContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-block: 1rem;
  padding-inline: 0.5rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
