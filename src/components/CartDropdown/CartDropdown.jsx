import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/Cart.context";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropdown.Styles.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.Styles.jsx";

const CartDropdown = ({ visible }) => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    setIsCartOpen((prev) => !prev);
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer visible={visible}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutPage}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
