import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  // height: 18rem;
  padding-right: 3rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailsItem = styled.span`
  padding-left: 1rem;
  width: 23%;
`;

export const Quantity = styled(DetailsItem)`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  padding-inline: 0.6rem;
`;

export const ClearButton = styled.div`
  padding-left: 4rem;
  cursor: pointer;
`;
