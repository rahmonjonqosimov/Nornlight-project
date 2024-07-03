import React from "react";
import Url from "../../components/url";
import Map from "../../components/map/Map";

const ContactPage = () => {
  return (
    <>
      <Url title={"Контакты"} path={"/contact"} />
      <section id="contact">
        <div className="container">
          <div className="contact">
            <h1>Контакты</h1>
            <div className="text">
              <h4>8 (800) 890-46-56</h4>
              <p>Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны:</p>
            </div>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
};

export default ContactPage;
