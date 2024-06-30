import React, { useEffect } from "react";
import { useGetCategotyQuery } from "../../../../context/api/categoryApi";
import { useUpdateProductMutation } from "../../../../context/api/productApi";
import { toast } from "react-toastify";

const EditProduct = ({ editProduct, setEditProduct }) => {
  const [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();
  const { data } = useGetCategotyQuery();

  const categoryItem = data?.map((category) => (
    <option
      key={category.id}
      value={category.title.toLowerCase().split(" ").join("-")}
    >
      {category.title}
    </option>
  ));

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const data = { ...editProduct };
    data.images = editProduct.images[0].split("\n");
    updateProduct({ body: data, id: data.id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Edit Product Success !");
      setEditProduct(null);
    }
  }, [isSuccess]);

  return (
    <section style={{ width: "600px" }} id="create-product">
      <form onSubmit={handleCreateProduct} action="">
        <h3>Update product</h3>
        <label htmlFor="title">Title</label>
        <input
          required
          value={editProduct.title}
          onChange={(e) =>
            setEditProduct((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="Title"
          name="title"
          id="title"
        />
        <label htmlFor="price">Price</label>
        <input
          required
          value={editProduct.price}
          onChange={(e) =>
            setEditProduct((prev) => ({ ...prev, price: e.target.value }))
          }
          type="number"
          placeholder="Price"
          name="price"
          id="price"
        />
        <label htmlFor="image-url">Image-url</label>
        <textarea
          value={editProduct.images.join("\n")}
          onChange={(e) =>
            setEditProduct((prev) => ({ ...prev, images: [e.target.value] }))
          }
          required
          name="images"
          id="image-url"
          placeholder="Image-url"
        ></textarea>
        <label htmlFor="category">Category</label>
        <select
          value={editProduct.category}
          onChange={(e) =>
            setEditProduct((prev) => ({ ...prev, category: e.target.value }))
          }
          required
          name="category"
          id="category"
        >
          <option value="">Tanlang</option>
          {categoryItem}
        </select>
        <label htmlFor="desc">Desc</label>
        <textarea
          value={editProduct.desc}
          onChange={(e) =>
            setEditProduct((prev) => ({ ...prev, desc: e.target.value }))
          }
          required
          name="desc"
          id="desc"
          placeholder="Desc"
        ></textarea>
        <div className="btn__wrapper">
          <button type="button" onClick={() => setEditProduct(null)}>
            Close
          </button>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
