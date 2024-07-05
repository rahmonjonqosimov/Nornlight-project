import React, { useEffect } from "react";
import Map from "../../components/map/Map";
import Url from "../../components/url";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Url title={"Контакты"} path={"/contact"} />
      <section id="contact">
        <div className="container">
          <div className="contact">
            <h1>Контакты</h1>
            <div className="contact__text">
              <h4>8 (800) 890-46-56</h4>
              <p>Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны:</p>
            </div>
          </div>
        </div>
      </section>
      <Map />
      <div className="map__container">
        <div className="map__addres">
          <div className="map__col">
            <h3>Адрес магазина</h3>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
          </div>
          <div className="map__col">
            <h3>Почта </h3>
            <p>NORNLIGHT@mail.ru</p>
          </div>
          <div className="map__col">
            <h3>Телефон</h3>
            <p>8 (800) 890-46-56</p>
          </div>
          <div className="map__col">
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
