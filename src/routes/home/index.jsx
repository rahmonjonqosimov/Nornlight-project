import React from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Why from "../../components/why";
import Blog from "../../components/blog";
import Brend from "../../components/brend";
import CategoryItemHome from "../../components/category-item-home";
import { useGetProductsQuery } from "../../context/api/productApi";

const Home = () => {
  const { isLoading, data } = useGetProductsQuery();
  return (
    <>
      <Hero />
      <CategoryItemHome />
      <Why />
      <Products data={data} isLoading={isLoading} />
      <Brend />
      <Blog count={6} />
    </>
  );
};

export default Home;
