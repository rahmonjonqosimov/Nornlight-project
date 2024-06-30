import React from "react";
import Path from "../path";
import { blog1, blog2, blog3, right } from "../../assets/images";
import { useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Blog = ({ count }) => {
  const { pathname } = useLocation();

  const data = [
    {
      id: 1,
      url: blog1,
      title: "Как правильно освещать дом снаружи?",
    },
    {
      id: 2,
      url: blog2,
      title: "Как правильно освещать дом снаружи?",
    },
    {
      id: 3,
      url: blog3,
      title: "Как правильно освещать дом снаружи?",
    },
    {
      id: 4,
      url: blog1,
      title: "Как правильно освещать дом снаружи?",
    },
    {
      id: 5,
      url: blog2,
      title: "Как правильно освещать дом снаружи?",
    },
    {
      id: 6,
      url: blog3,
      title: "Как правильно освещать дом снаружи?",
    },
  ];

  const blogItem = data?.slice(0, count)?.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="blog__card">
        <div className="blog__image">
          <img src={item.url} alt={item.title} />
        </div>
        <div className="blog__row">
          <span>{item.title}</span>
          <img src={right} alt="" />
        </div>
        <p>01.01.2024</p>
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <Path title={"Блог"} btnTitle={"Перейти в блог"} url={"blog"} />

      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            600: {
              slidesPerView: 1,
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
          loop={true}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper blog__wrapper"
        >
          {blogItem}
        </Swiper>
        {pathname === "/" ? (
          <div className="blog__text">
            <h1>Производство светильников</h1>
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют.
              <br />
              <br />
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Blog;
