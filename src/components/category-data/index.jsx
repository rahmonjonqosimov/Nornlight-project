import React from "react";

const CategoryData = ({ data, category, setCategory }) => {
  const item = data?.map((item) => (
    <li onClick={() => setCategory(item.title)} key={item?.id}>
      <data
        className={category == item.title ? "data-active" : ""}
        value={item?.title.toLowerCase().split(" ").join("-")}
      >
        {item?.title}
      </data>
    </li>
  ));
  return (
    <div className="container">
      <ul className="data__wrapper">
        <li onClick={() => setCategory("all")}>
          <data
            className={category == "all" ? "data-active" : ""}
            value={"all"}
          >
            All
          </data>
        </li>
        {item}
      </ul>
    </div>
  );
};

export default CategoryData;
