import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ClearButton,
  DetailsItem,
  ImageContainer,
  Quantity,
  Value,
} from "./CheckoutItem.Styles";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <DetailsItem>{name}</DetailsItem>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <DetailsItem>${price}</DetailsItem>
      <ClearButton onClick={clearItemHandler}>&#10005;</ClearButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
