import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDeleteCategoryMutation } from "../../../../context/api/categoryApi";

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
      <h3>Удалить категорию</h3>
      <h4>
        Вы хотите удалить категорию <span>{deleteCategoryById.title}</span>?
      </h4>
      <div className="btn__wrapper">
        <button onClick={() => setDeleteCategoryById(null)} type="button">
          Закрывать
        </button>
        <button
          style={{ marginLeft: "30px" }}
          disabled={isLoading}
          onClick={handleDeleteCategoryById}
        >
          {isLoading ? "Загрузка..." : "Удалить"}
        </button>
      </div>
    </section>
  );
};

export default DeleteCategoryComponent;
