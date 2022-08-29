import React from "react";
import {
  BackgroundImage,
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
  Overlay,
} from "./DirectoryItem.Styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer to={`shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <Overlay />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
