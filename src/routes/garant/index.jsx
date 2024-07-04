import React from "react";
import Url from "../../components/url";

const Garant = () => {
  return (
    <>
      <Url title={"Гарантии"} path={"/garant"} />
      <section id="return">
        <div className="container">
          <div className="return">
            <h1>Garant</h1>
            <div className="return__text">
              <h3>Обмен и возврат по желанию покупателя</h3>
              <p>
                Все товары в магазине «NornLight» имеют гарантию. Она заявляется
                производителем и имеет определенный срок действия на различные
                группы товаров.
              </p>
              <p>
                Если ваше изделие вышло из строя в течение гарантийного срока вы
                можете обратиться к нам и получить бесплатный ремонт. Для этого
                нужно:
              </p>
              <ul>
                <li>
                  Предоставить чек, накладную или сообщить почту или номер
                  телефона, указанные при оформлении заказа.
                </li>
                <li>
                  Привезти товар к нам на склад или отправить его транспортной
                  компанией.
                </li>
                <li>
                  После товар отправляется на экспертизу и ремонт. Если ремонт
                  невозможен, мы обменяем изделие на аналогичное либо вернем
                  деньги за покупку.
                </li>
              </ul>
              <p>
                Обращаем внимание, что «А-Свет» не является сервисным центром, а
                выполняет роль посредника между клиентом и поставщиком.
              </p>
              <p>
                Поэтому сроки проведения ремонта могут отличаться для товаров
                различных брендов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Garant;
