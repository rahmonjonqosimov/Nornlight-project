import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import img from "../../assets/images/imgs/card.png";
import Path from "../path";
import CategoryData from "../category-data";
import { useGetCategotyQuery } from "../../context/api/categoryApi";
const Products = () => {
  const [category, setCategory] = useState("all");
  const { data } = useGetCategotyQuery();
  return (
    <>
      <Path
        title={"Популярные товары"}
        url={"products"}
        btnTitle={"Все товары"}
      />
      <CategoryData category={category} setCategory={setCategory} data={data} />
      <section id="products">
        <div className="container">
          <div className="product__wrapper">
            {new Array(8).fill("").map((product, inx) => (
              <div key={inx} className="product__card">
                <div className="product__image">
                  <img src={img} alt="" />
                  <IoHeartOutline />
                </div>
                <div className="product__desc">
                  Встраиваемый светильник Novotech Встраиваемый светильник
                  Novotech
                </div>
                <div className="product__row">
                  <div className="product__price">
                    <span>7000$</span>
                    <h4>6 399₽</h4>
                  </div>
                  <button>
                    <IoCartOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
