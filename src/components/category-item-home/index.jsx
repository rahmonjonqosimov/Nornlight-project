import React from "react";
import Path from "../path";
import { useGetCategotyQuery } from "../../context/api/categoryApi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CategoryItemHome = () => {
  const { data } = useGetCategotyQuery();
  console.log(data);
  const item = data?.slice(0, 6)?.map((item) => (
    <div key={item.id} className="caregory__card">
      <div className="category__card__text">
        <h3>{item.title}</h3>
        <Link to={"/"}>
          От 540₽ <GoArrowRight />{" "}
        </Link>
      </div>
      <img src={item.url[0]} alt="" />
    </div>
  ));
  return (
    <>
      <Path btnTitle={"Весь каталог"} title={"Каталог"} url={"category"} />

      <div className="container">
        <div className="caregory__wrapper">{item}</div>
      </div>
    </>
  );
};

export default CategoryItemHome;
