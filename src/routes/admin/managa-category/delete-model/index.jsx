import React, { useEffect } from "react";
import { useDeleteCategoryMutation } from "../../../../context/api/categoryApi";
import { toast } from "react-toastify";

const DeleteCategoryComponent = ({
  deleteCategoryById,
  setDeleteCategoryById,
}) => {
  const [deleteCategory, { isLoading, isSuccess }] =
    useDeleteCategoryMutation();

  const handleDeleteCategoryById = () => {
    deleteCategory(deleteCategoryById.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Delete category successfully !");
      setDeleteCategoryById(null);
    }
  }, [isSuccess]);

  return (
    <section id="delete__model">
      <h3>Delete category</h3>
      <h4>
        <span>{deleteCategoryById.title}</span> kategoriyasini o'chirishni
        istaysizmi ?
      </h4>
      <div className="btn__wrapper">
        <button onClick={() => setDeleteCategoryById(null)} type="button">
          Close
        </button>
        <button disabled={isLoading} onClick={handleDeleteCategoryById}>
          {isLoading ? "Loading..." : "Delete"}
        </button>
      </div>
    </section>
  );
};

export default DeleteCategoryComponent;
