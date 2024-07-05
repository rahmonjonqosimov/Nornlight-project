import React from "react";
import Blog from "../../components/blog";
import Brend from "../../components/brend";
import CategoryItemHome from "../../components/category-item-home";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Why from "../../components/why";
import { useGetProductsQuery } from "../../context/api/productApi";

const Home = () => {
  const { isLoading, data } = useGetProductsQuery();
  return (
    <>
      <Hero />
      <CategoryItemHome count={6} />
      <Why />
      <Products admin={false} data={data} isLoading={isLoading} />
      <Brend />
      <Blog count={6} btn={true} />
    </>
  );
};

export default Home;
