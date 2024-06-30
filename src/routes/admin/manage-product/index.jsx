import React, { useState } from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products";
import Model from "../../../components/model";
import DeleteProduct from "./delete-product";
import EditProduct from "./edit-product";

const ManageProduct = () => {
  const { isLoading, data } = useGetProductsQuery();
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  return (
    <section id="manage-product">
      <h3>Manage product</h3>
      <Products
        setDeleteProduct={setDeleteProduct}
        setEditProduct={setEditProduct}
        admin={true}
        data={data}
        isLoading={isLoading}
      />
      {deleteProduct ? (
        <Model close={() => setDeleteProduct(null)}>
          <DeleteProduct
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          />
        </Model>
      ) : (
        <></>
      )}
      {editProduct ? (
        <Model close={() => setEditProduct(null)}>
          <EditProduct
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        </Model>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ManageProduct;
