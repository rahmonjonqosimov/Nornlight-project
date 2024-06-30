import React from "react";

const Payment = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div className="about__wrapper">
            <h1 className="about__title">Доставка и оплата</h1>
          </div>
          <ul>
            <h3>Доставка</h3>
            <li>
              Мы осуществляем доставку со склада по Москве и Московской области
              собственной курьерской службой. Транспортными компаниями нашу
              продукцию мы доставляем по всей территории РФ, а так же по всем
              странам СНГ. Сроки доставки: 4—6 недель
            </li>
            <h3>Курьерская доставка</h3>
            <li>
              БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽. Заказы
              свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от
              МКАД
            </li>
            <h3>Самовывоз</h3>
            <li>
              Любой заказ можно забрать самостоятельно по адресу:  г.
              Москва, Дмитровское шоссе д.100с2
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Payment;
