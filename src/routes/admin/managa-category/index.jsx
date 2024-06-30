import React, { useState } from "react";
import { useGetCategotyQuery } from "../../../context/api/categoryApi";
const ManageCategory = () => {
  const { data } = useGetCategotyQuery();
  const [limit, setLimit] = useState(1);

  const users = data?.slice(0, limit * 5)?.map((category) => (
    <tr key={category.id}>
      <td>{category.title}</td>

      <td>
        <button>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ));
  return (
    <section id="manage-product">
      <table>
        <h3>Category Manage</h3>
        <tr>
          <th>Category Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {users}
      </table>
      <button onClick={() => setLimit((p) => p + 1)} className="see-more">
        see-more
      </button>
    </section>
  );
};

export default ManageCategory;
