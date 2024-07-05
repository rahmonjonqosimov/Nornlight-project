import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import useGetInputValue from "../../../hooks/userGetInputValue";

const initialState = {
  title: "",
  url: "",
};

const CreateCategory = () => {
  const [createCategory, { isLoading, isSuccess }] =
    useCreateCategoryMutation();
  const { handleChange, setUser, user } = useGetInputValue(initialState);
  const handleCreateCategory = (e) => {
    e.preventDefault();
    const category = { ...user };
    category.url = user.url.split("\n").map((image) => image.trim());
    createCategory(category);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Category created successfully !");
      setUser(initialState);
    }
  }, [isSuccess]);

  return (
    <section id="create-product">
      <form onSubmit={handleCreateCategory} action="">
        <h3>Создать категорию</h3>
        <label htmlFor="category">Новая категория</label>
        <input
          value={user.title}
          required
          onChange={handleChange}
          type="text"
          name="title"
          id="category"
          placeholder="Category"
        />
        <label htmlFor="category-image">Адрес изображения в категории</label>
        <textarea
          required
          value={user.url}
          onChange={handleChange}
          name="url"
          id="category-image"
          placeholder="Адрес изображения в категории
"
        ></textarea>
        <button disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Создавать"}
        </button>
      </form>
    </section>
  );
};

export default CreateCategory;
