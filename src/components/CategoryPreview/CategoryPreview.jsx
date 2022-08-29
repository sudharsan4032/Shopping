import ProductCard from "../ProductCard/ProductCard";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./CategoryPreview.Styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle to={title}>
        {title.toUpperCase()}
      </CategoryPreviewTitle>
      <Preview>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
