import React, { useEffect } from "react";
import Brend from "../../components/brend";
import Blog from "../../components/blog";
import CategoryItemHome from "../../components/category-item-home";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CategoryItemHome count={20} />
      <Brend />
      <Blog />
    </>
  );
};

export default Catalog;
