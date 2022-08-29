import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 90rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 1rem;
  display: flex;
  border-bottom: 1px solid darkgrey;
  font-size: clamp(1em, 2vw, 2em);
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
