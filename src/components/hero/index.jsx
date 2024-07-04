import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  swiperItem,
  swiperItem1,
  swiperItem2,
  swiperItem3,
} from "../../assets/images";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container" style={{ maxWidth: "1700px" }}>
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
                Скидка 10% на все подвесные светильники <br />
                <span>до 18 февраля</span>
              </h1>
              <img src={swiperItem1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 20% на все подвесные светильники <br />
                <span>до 10 февраля</span>
              </h1>
              <img src={swiperItem2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <h1 className="swiper-title ">
                Скидка 30% на все подвесные светильники <br />
                <span>до 15 февраля</span>
              </h1>
              <img src={swiperItem3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Hero;
