import React, { useEffect } from "react";
import { useDeleteProductMutation } from "../../../../context/api/productApi";
import { toast } from "react-toastify";

const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
  const [deleteProductById, { isLoading, isSuccess }] =
    useDeleteProductMutation();

  const handleDeleteProduct = () => {
    deleteProductById(deleteProduct.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product deleted successfully !");
      setDeleteProduct(null);
    }
  }, [isSuccess]);

  return (
    <section style={{ width: "400px" }} id="delete__model">
      <h3>Delete Product</h3>
      <h4>
        <span>{deleteProduct.title} </span> ni o'chirishni istaysizmi ?
      </h4>
      <div className="btn__wrapper">
        <button onClick={() => setDeleteProduct(null)}>Close</button>
        <button onClick={handleDeleteProduct}>
          {isLoading ? "Loading..." : "Delete"}
        </button>
      </div>
    </section>
  );
};

export default DeleteProduct;
