import React, { useState } from "react";
import Model from "../../../components/model";
import { useGetCategotyQuery } from "../../../context/api/categoryApi";
import DeleteCategoryComponent from "./delete-model";
import EditCategoryComponent from "./edit-model";
import PaginationComponent from "./pagination";
const ManageCategory = () => {
  const { data, isLoading } = useGetCategotyQuery();
  const [editCategory, setEditCategory] = useState(null);
  const [deleteCategoryById, setDeleteCategoryById] = useState(null);

  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);

  const paginationCount = Math.ceil(data?.length / 5);

  const handleEditCategory = (category) => {
    setEditCategory(category);
  };

  const users = data?.slice((page - 1) * 5, page * 5)?.map((category) => (
    <tr key={category.id}>
      <td>{category.title}</td>
      <td>
        <button onClick={() => handleEditCategory(category)}>
          Редактировать
        </button>
      </td>
      <td>
        <button onClick={() => setDeleteCategoryById(category)}>
          {" "}
          Удалить
        </button>
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
        <h3>Управление категориями</h3>
        <table>
          <thead>
            <tr>
              <th>Список категорий</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </table>
        {isLoading ? (
          <></>
        ) : (
          <PaginationComponent
            page={page}
            paginationCount={paginationCount}
            setPage={setPage}
          />
        )}
      </section>
    </>
  );
};

export default ManageCategory;
