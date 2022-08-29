import React from "react";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { CategoriesContainer } from "./Directory.Styles.jsx";

const Directory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Directory;
