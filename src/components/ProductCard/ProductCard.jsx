import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.context";

import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";
import {
  BaseContent,
  Name,
  Price,
  ProductCardContainer,
  ProductImage,
} from "./ProductCard.Styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart, setIsCartOpen } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setIsCartOpen(true);
  };

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={name} />
      <BaseContent>
        <Name className='name'>{name}</Name>
        <Price className='price'>{`$${price}`}</Price>
      </BaseContent>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
