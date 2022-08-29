import React, { useContext } from "react";
import CategoryPreview from "../../../components/CategoryPreview/CategoryPreview";

import { ProductsContext } from "../../../contexts/products.context";
import { CategoriesPreviewContainer } from "./CategoriesPreviewPage.Styles";

const CategoriesPreviewPage = () => {
  const { products } = useContext(ProductsContext);

  return (
    <CategoriesPreviewContainer>
      {Object.keys(products).map((title) => {
        const shopProducts = products[title];
        return (
          <CategoryPreview key={title} title={title} products={shopProducts} />
        );
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreviewPage;
