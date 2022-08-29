import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../CartIcon/CartIcon";

import DevLogo from "../../assets/images/devshop.svg";
import { UserContext } from "../../contexts/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/Cart.context";
import {
  Logo,
  NavigationContainer,
  NavItems,
  NavLink,
} from "./Header.Styles.jsx";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 80) setNavbar(true);
      else setNavbar(false);
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <Fragment>
      <NavigationContainer navbar={navbar}>
        <Link to='/'>
          <Logo src={DevLogo} alt='logo' />
        </Link>
        <NavItems>
          <NavLink to='/shop'>Shop</NavLink>
          {!currentUser ? (
            <NavLink to='/auth'>Sign In</NavLink>
          ) : (
            <NavLink as='span' onClick={SignOutUser}>
              Sign Out
            </NavLink>
          )}
          <CartIcon />
        </NavItems>
        <CartDropdown visible={isCartOpen ? true : false} />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Header;
