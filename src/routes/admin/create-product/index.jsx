import React, { useEffect, useState } from "react";
import useGetInputValue from "../../../hooks/userGetInputValue";
import { useCreateProductMutation } from "../../../context/api/productApi";
const initialState = {
  title: "",
  desc: "",
  price: "",
};

import { useGetCategotyQuery } from "../../../context/api/categoryApi";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [createProduct, { data, isLoading, isSuccess }] =
    useCreateProductMutation();
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const { data: categories } = useGetCategotyQuery();
  const categoryItem = categories?.map((category) => (
    <option
      key={category.id}
      value={category.title.toLowerCase().split(" ").join("-")}
    >
      {category.title}
    </option>
  ));
  const { handleChange, setUser, user } = useGetInputValue(initialState);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const product = { ...user };
    product.category = category;
    const imagesArray = images.split("\n").map((image) => image.trim());
    product.images = imagesArray;
    product.price = +product.price;
    createProduct(product);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Create Product Success !");
      setUser(initialState);
      setImages("");
      setCategory("");
    }
  }, [isSuccess]);

  return (
    <section id="create-product">
      <form onSubmit={handleCreateProduct} action="">
        <h3>Create product</h3>
        <label htmlFor="title">Title</label>
        <input
          required
          value={user.title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          id="title"
        />
        <label htmlFor="price">Price</label>
        <input
          required
          value={user.price}
          onChange={handleChange}
          type="number"
          placeholder="Price"
          name="price"
          id="price"
        />
        <label htmlFor="image-url">Image-url</label>
        <textarea
          value={images}
          onChange={(e) => setImages(e.target.value)}
          required
          name="images"
          id="image-url"
          placeholder="Image-url"
        ></textarea>
        <label htmlFor="category">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          name="category"
          id="category"
        >
          <option value="">Tanlang</option>
          {categoryItem}
        </select>
        <label htmlFor="desc">Desc</label>
        <textarea
          value={user.desc}
          onChange={handleChange}
          required
          name="desc"
          id="desc"
          placeholder="Desc"
        ></textarea>
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </section>
  );
};

export default CreateProduct;
