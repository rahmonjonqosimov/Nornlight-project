import React, { useEffect } from "react";
import { useUpdateCategoryMutation } from "../../../../context/api/categoryApi";
import { toast } from "react-toastify";

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
        <h3>Edit category</h3>
        <label htmlFor="category">Category</label>
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
        <label htmlFor="category-image">Category Image Url</label>
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
            Close
          </button>
          <button>{isLoading ? "Loading..." : "Save"}</button>
        </div>
      </form>
    </section>
  );
};

export default EditCategoryComponent;
