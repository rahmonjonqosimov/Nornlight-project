import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Path from "../path";
import CategoryData from "../category-data";
import { useGetCategotyQuery } from "../../context/api/categoryApi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Products = ({ data: products, isLoading }) => {
  const { pathname } = useLocation();
  const [category, setCategory] = useState("all");
  const { data } = useGetCategotyQuery();

  const productItems = products?.slice(0, 8)?.map((product) => (
    <div key={product.id} className="product__card">
      <div className="product__image">
        <img src={product.images[0]} alt={product.title} />
        <IoHeartOutline />
      </div>
      <div className="product__desc">{product.title}</div>
      <div className="product__row">
        <div className="product__price">
          <span>{product.price * 1.2}$</span>
          <h4>{product.price}₽</h4>
        </div>
        <button>
          <IoCartOutline />
        </button>
      </div>
    </div>
  ));
  return (
    <>
      {!pathname.includes("admin") ? (
        <>
          <Path
            title={"Популярные товары"}
            url={"products"}
            btnTitle={"Все товары"}
          />
          <CategoryData
            category={category}
            setCategory={setCategory}
            data={data}
          />
        </>
      ) : (
        <></>
      )}

      <section id="products">
        <div
          className={
            !pathname.includes("admin") ? "container" : "admin__container"
          }
        >
          <div className="product__wrapper">{productItems}</div>
        </div>
      </section>

      {!pathname.includes("admin") ? (
        <Link to={"/products"} className="phone__link">
          <button>
            Все товары <GoArrowRight />
          </button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
