import React from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Why from "../../components/why";
import Blog from "../../components/blog";
import Brend from "../../components/brend";
import CategoryItemHome from "../../components/category-item-home";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryItemHome />
      <Why />
      <Products />
      <Brend />
      <Blog count={6} />
    </>
  );
};

export default Home;
