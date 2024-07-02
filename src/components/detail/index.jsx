import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Detail = ({ model, setModel }) => {
  const navigate = useNavigate();
  const swiperItem = model.images.map((image, inx) => (
    <SwiperSlide key={inx}>
      <div className="detail-image">
        <img src={image} alt={model.title} />
      </div>
    </SwiperSlide>
  ));
  return (
    <section id="detail">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination={true}
      >
        {swiperItem}
      </Swiper>
      <button onClick={() => navigate(`/product/${model.id}`)}>see more</button>
    </section>
  );
};

export default Detail;
