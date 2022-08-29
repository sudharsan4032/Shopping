import { Routes, Route } from "react-router-dom";
import Category from "./CategoryPage/CategoryPage";
import CategoriesPreviewPage from "./CategoriesPreviewPage/CategoriesPreviewPage";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
