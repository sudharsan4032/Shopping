import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductsContext } from "../../../contexts/products.context";
import ProductCard from "../../../components/ProductCard/ProductCard";
import {
  CategoryContainer,
  CategoryTitle,
  ProductCategory,
} from "./CategoryPage.Styles.";

const CategoryPage = () => {
  const { category } = useParams();

  const { products } = useContext(ProductsContext);
  const [shopProducts, setshopProducts] = useState(products[category]);

  useEffect(() => {
    setshopProducts(products[category]);
  }, [category, products]);

  return (
    <CategoryContainer>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <ProductCategory className='individual-category'>
        {shopProducts &&
          shopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductCategory>
    </CategoryContainer>
  );
};

export default CategoryPage;
