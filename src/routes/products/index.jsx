import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products";

const AllProducts = () => {
  const { isLoading, data } = useGetProductsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Products admin={false} data={data} isLoading={isLoading} />
    </>
  );
};

export default AllProducts;
