import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const Single = ({ data, isLoading }) => {
  const [imageUrl, setImageUrl] = useState(data?.images[0]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="single-page">
      <div className="container">
        <div className="single__wrapper">
          <div className="product__images">
            <div className="single-image">
              <img src={imageUrl || data?.images[0]} alt={data?.title} />
            </div>
            <div className="single-images-wrapper">
              {data?.images?.slice(0, 4)?.map((image, inx) => (
                <img
                  onClick={(e) => setImageUrl(e.target.src)}
                  key={inx}
                  src={image}
                  alt={data?.title}
                />
              ))}
            </div>
          </div>
          <div className="single__product__about">
            <h4 className="single-title">{data?.title}</h4>
            <p className="single-scott">Scott</p>
            <div className="single__row">
              <p className="single-scott">Артикул : 7655-188</p>
              <div className="single-icons">sa</div>
            </div>
            <p className="single-scott">В наличии</p>
            <div className="single-price">
              <div className="now-price">{data?.price} ₽</div>
              <div className="old-price">{parseInt(data?.price * 1.2)} ₽</div>
            </div>
            <div className="single-desc">{data?.desc}</div>
            <div className="single-cart">
              <div className="single-cart-count">
                <button>
                  <FiMinus />
                </button>
                <span>1</span>
                <button>
                  <FiPlus />
                </button>
              </div>
              <button className="add-to-cart">В корзину</button>
              <button className="heart-toggle">
                <IoMdHeartEmpty />
              </button>
            </div>
          </div>
        </div>

        <div className="characteristic">
          <h3>Характеристика</h3>
          <div className="characteristic__row">
            <div className="characteristic-title">Цвет</div>
            <div className="characteristic-desc">Жёлтый</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Год</div>
            <div className="characteristic-desc">2016</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Диаметр колеса</div>
            <div className="characteristic-desc">27.5</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Материал рамы</div>
            <div className="characteristic-desc">Карбон</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Размер</div>
            <div className="characteristic-desc">L</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Страна</div>
            <div className="characteristic-desc">Швейцария</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Производитель</div>
            <div className="characteristic-desc">Scott</div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Покрышки</div>
            <div className="characteristic-desc">
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Рама</div>
            <div className="characteristic-desc">
              Scale Carbon / HMX-технология / технология IMP / Коническая
              рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
            </div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Подседельный Штырь</div>
            <div className="characteristic-desc">
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Седло</div>
            <div className="characteristic-desc">
              Ritchey WCS Streem V3 Titanium rails
            </div>
          </div>
          <div className="characteristic__row">
            <div className="characteristic-title">Вилка</div>
            <div className="characteristic-desc">
              Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
              коническая рулевая труба / Удалённая блокировка, регулировка
              отскока / ход 100mm
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single;
