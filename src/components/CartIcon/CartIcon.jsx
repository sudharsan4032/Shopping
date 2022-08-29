import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./CardIcon.Styles";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
