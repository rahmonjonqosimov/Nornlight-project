import React, { useState } from "react";
import { useGetCategotyQuery } from "../../../context/api/categoryApi";
import Model from "../../../components/model";
import EditCategoryComponent from "./edit-model";
import DeleteCategoryComponent from "./delete-model";
const ManageCategory = () => {
  const { data } = useGetCategotyQuery();
  const [limit, setLimit] = useState(1);
  const [editCategory, setEditCategory] = useState(null);
  const [deleteCategoryById, setDeleteCategoryById] = useState(null);

  const handleEditCategory = (category) => {
    setEditCategory(category);
  };

  const users = data?.slice(0, limit * 5)?.map((category) => (
    <tr key={category.id}>
      <td>{category.title}</td>
      <td>
        <button onClick={() => handleEditCategory(category)}>Edit</button>
      </td>
      <td>
        <button onClick={() => setDeleteCategoryById(category)}> Delete</button>
      </td>
    </tr>
  ));
  return (
    <>
      {editCategory ? (
        <Model close={() => setEditCategory(null)}>
          <EditCategoryComponent
            editCategory={editCategory}
            setEditCategory={setEditCategory}
          />
        </Model>
      ) : (
        <></>
      )}
      {deleteCategoryById ? (
        <Model close={() => setDeleteCategoryById(null)}>
          <DeleteCategoryComponent
            deleteCategoryById={deleteCategoryById}
            setDeleteCategoryById={setDeleteCategoryById}
          />
        </Model>
      ) : (
        <></>
      )}

      <section id="manage-product">
        <h3>Category Manage</h3>
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
        <button onClick={() => setLimit((p) => p + 1)} className="see-more">
          see-more
        </button>
      </section>
    </>
  );
};

export default ManageCategory;
