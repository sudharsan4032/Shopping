import React from "react";
import { categories } from "../../data/categoryData";
import Directory from "../../components/Directory/Directory";
import { HomeContainer } from "./HomePage.Styles.jsx";

const HomePage = () => {
  return (
    <HomeContainer>
      <Directory categories={categories} />
    </HomeContainer>
  );
};

export default HomePage;
