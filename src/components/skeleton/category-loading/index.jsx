import React from "react";

const CategoryLoading = () => {
  return (
    <section id="category-loading">
      <div className="container">
        <div className="categpry__skeleton-wrapper">
          {new Array(6).fill("").map((_, inx) => (
            <div
              className="category__skeleton-card skeleton-anime"
              key={inx}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLoading;
