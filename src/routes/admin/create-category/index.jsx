import React, { useEffect } from "react";
import useGetInputValue from "../../../hooks/userGetInputValue";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";

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
        <h3>Create category</h3>
        <label htmlFor="category">New Category</label>
        <input
          value={user.title}
          required
          onChange={handleChange}
          type="text"
          name="title"
          id="category"
          placeholder="Category"
        />
        <label htmlFor="category-image">Category Image Url</label>
        <textarea
          required
          value={user.url}
          onChange={handleChange}
          name="url"
          id="category-image"
          placeholder="Category image url"
        ></textarea>
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </section>
  );
};

export default CreateCategory;
