import React from "react";
import { brend1, brend2, brend3 } from "../../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Brend = () => {
  return (
    <section id="brend">
      <div className="container">
        <h1>Только проверенные бренды</h1>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          loop={true}
          pagination={true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="brend__item">
              <img src={brend1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brend__item">
              <img src={brend2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brend__item">
              <img src={brend3} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="brend__item">
              <img src={brend1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brend__item">
              <img src={brend2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="brend__item">
              <img src={brend3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brend;
