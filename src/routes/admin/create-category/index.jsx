import React from "react";
import useGetInputValue from "../../../hooks/userGetInputValue";

const initialState = {
  title: "",
  url: "",
};

const CreateCategory = () => {
  const { handleChange, setUser, user } = useGetInputValue(initialState);
  const handleCreateCategory = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <section id="create-product">
      <form onSubmit={handleCreateCategory} action="">
        <h3>Create category</h3>
        <label htmlFor="category">New Category</label>
        <input
          value={user.title}
          onChange={handleChange}
          type="text"
          name="title"
          id="category"
          placeholder="Category"
        />
        <label htmlFor="category-image">Category Image Url</label>
        <textarea
          value={user.url}
          onChange={handleChange}
          name="url"
          id="category-image"
          placeholder="Category image url"
        ></textarea>
        <button>Create</button>
      </form>
    </section>
  );
};

export default CreateCategory;
