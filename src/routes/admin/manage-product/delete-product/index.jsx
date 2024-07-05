import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDeleteProductMutation } from "../../../../context/api/productApi";

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
      <h3>Удаление продукта</h3>
      <h4>
        Xочешь удалить <span>{deleteProduct.title} </span>?
      </h4>
      <div className="btn__wrapper">
        <button onClick={() => setDeleteProduct(null)}>Закрывать</button>
        <button onClick={handleDeleteProduct}>
          {isLoading ? "Загрузка..." : "Удалить"}
        </button>
      </div>
    </section>
  );
};

export default DeleteProduct;
