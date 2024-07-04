import React from "react";
import Path from "../path";
import { useGetCategotyQuery } from "../../context/api/categoryApi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const CategoryItemHome = ({ count }) => {
  const { pathname } = useLocation();
  const { data } = useGetCategotyQuery();
  const item = data?.slice(0, count)?.map((item) => (
    <div key={item.id} className="caregory__card">
      <div className="category__card__text">
        <h3>{item.title}</h3>
        <Link to={"/"}>
          От 540₽ <GoArrowRight />{" "}
        </Link>
      </div>
      <div className="img">
        <img src={item.url[0]} alt="" />
      </div>
    </div>
  ));

  const swiperItem = data?.map((item) => (
    <SwiperSlide key={item.id}>
      <div key={item.id} className="caregory__card-swiper">
        <div className="category__card__text__swiper">
          <h3>{item.title}</h3>
          <Link to={"/"}>
            От 540₽ <GoArrowRight />{" "}
          </Link>
        </div>
        <img src={item.url[0]} alt="" />
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Path
        btnTitle={"Весь каталог"}
        btn={pathname.includes("category") ? false : true}
        title={"Каталог"}
        url={"category"}
      />

      <div className="container">
        <div
          className={`caregory__wrapper ${
            pathname.includes("category") ? "category__wrapper-page" : ""
          }`}
        >
          {item}
        </div>
      </div>

      {!pathname.includes("category") ? (
        <div className="container category-swiper">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper blog__wrapper"
          >
            {swiperItem}
          </Swiper>
        </div>
      ) : (
        <></>
      )}
      {!pathname.includes("category") ? (
        <Link to={"/category"} className="phone__link">
          <button>
            Весь каталог <GoArrowRight />
          </button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryItemHome;
