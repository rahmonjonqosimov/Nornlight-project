import React from "react";
import { swiperItem } from "../../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 15% на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
              <img src={swiperItem} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 15% на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
              <img src={swiperItem} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 15% на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
              <img src={swiperItem} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 15% на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
              <img src={swiperItem} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 15% на все подвесные светильники <br />
                <span>до 5 февраля</span>
              </h1>
              <img src={swiperItem} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Hero;
