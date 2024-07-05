import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useUpdateCategoryMutation } from "../../../../context/api/categoryApi";

const EditCategoryComponent = ({ editCategory, setEditCategory }) => {
  const [updateCategory, { isLoading, isSuccess }] =
    useUpdateCategoryMutation();
  const handleEditCategory = (e) => {
    e.preventDefault();
    const category = { ...editCategory };
    if (!Array.isArray(editCategory.url)) {
      category.url = editCategory.url.split("\n").map((image) => image.trim());
    }
    console.log(category);
    updateCategory({ body: category, id: category.id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated category successfully !");
      setEditCategory(null);
    }
  }, [isSuccess]);

  return (
    <section style={{ width: "600px" }} id="create-product">
      <form onSubmit={handleEditCategory} action="">
        <h3>Изменить категорию</h3>
        <label htmlFor="category">Категория</label>
        <input
          value={editCategory.title}
          required
          onChange={(e) =>
            setEditCategory((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          name="title"
          id="category"
          placeholder="Category"
        />
        <label htmlFor="category-image">Адрес изображения в категории</label>
        <textarea
          required
          value={editCategory.url}
          onChange={(e) =>
            setEditCategory((prev) => ({ ...prev, url: e.target.value }))
          }
          name="url"
          id="category-image"
          placeholder="Category image url"
        ></textarea>
        <div className="btns">
          <button onClick={() => setEditCategory(null)} type="button">
            Закрывать
          </button>
          <button>{isLoading ? "Загрузка..." : "Сохранять"}</button>
        </div>
      </form>
    </section>
  );
};

export default EditCategoryComponent;
