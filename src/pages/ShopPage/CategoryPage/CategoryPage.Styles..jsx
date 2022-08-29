import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: calc(80px + 2rem);
`;

export const ProductCategory = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  column-gap: 1.6rem;
  row-gap: 2.8rem;
  align-items: center;
  margin-bottom: 2.6rem;
`;

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 4rem;
`;
