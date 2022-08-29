import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryPreviewTitle = styled(Link)`
  color: #121212;
  text-decoration: none;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: 1.6rem;
  row-gap: 2.8rem;
  align-items: center;
  margin-block: 1rem 2.6rem;
`;
