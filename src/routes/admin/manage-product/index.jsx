import React from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products";

const ManageProduct = () => {
  const { isLoading, data } = useGetProductsQuery();
  return (
    <section id="manage-product">
      <h3>Manage product</h3>
      <Products data={data} isLoading={isLoading} />
    </section>
  );
};

export default ManageProduct;
