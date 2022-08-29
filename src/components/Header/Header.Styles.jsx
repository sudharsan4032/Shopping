import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: ${({ navbar }) => (navbar ? "#fff" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding-inline: 2rem;
  box-shadow: ${({ navbar }) => navbar && `0 2px 30px #12121220`};
`;

export const Logo = styled.img`
  width: 58px;
  height: 58px;
`;
export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #121212;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2vh;
    bottom: 0;
    transform: translateX(-100%);
    background-color: #ff2876;
    transition: all 0.5s ease;
  }

  &:hover {
    &::before {
      transform: translateX(0);
    }
  }
`;

// .navigation {

//   .logo {
//   }

//   .nav-items {

//   }

//   .nav-link {

//   }
// }
