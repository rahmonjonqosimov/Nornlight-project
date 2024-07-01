import React from "react";
import { useLocation } from "react-router-dom";

const ProductsSkeleton = () => {
  const { pathname } = useLocation();
  const skeletonItem = new Array(8).fill("").map((_, inx) => (
    <div key={inx} className="product__skelton__card">
      <div className="product__skeleton-image skeleton-anime"></div>
      <div className="product__skeleton-title skeleton-anime"></div>
      <div className="product__row">
        <div className="product__price">
          <div className="product-old-price skeleton-anime"></div>
          <div className="product-now-price skeleton-anime"></div>
        </div>
        <div className="product-cart-button skeleton-anime"></div>
      </div>
    </div>
  ));
  return (
    <section id="product-skeleton">
      <div
        className={
          !pathname.includes("admin") ? "container" : "admin__container"
        }
      >
        <div className="product__skelton__wrapper">{skeletonItem}</div>
      </div>
    </section>
  );
};

export default ProductsSkeleton;
