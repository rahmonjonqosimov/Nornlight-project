import React from "react";
import Path from "../path";
import { why1, why2, why3, why4 } from "../../assets/images";

const Why = () => {
  const data = [
    {
      id: 1,
      title: "Только проверенные бренды",
      desc: "Бренды, проверенные временем и качеством",
      url: why1,
    },
    {
      id: 2,
      title: "Самые низкие цены",
      desc: "Ниже не будет нигде",
      url: why2,
    },
    {
      id: 3,
      title: "Быстрая доствка",
      desc: "Доставляем по всей РФза 1-10 дней",
      url: why3,
    },
    {
      id: 4,
      title: "Большой ассортимент",
      desc: "Более 1000 товаров",
      url: why4,
    },
  ];

  const item = data?.map((item) => (
    <div key={item.id} className="why__card">
      <div className="why__logo">
        <img src={item.url} alt="" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ));

  return (
    <>
      <Path title={"Почему NORNLIGHT?"} btnTitle={"О компании"} url={"about"} />
      <div className="container">
        <div className="why__wrapper">{item}</div>
      </div>
    </>
  );
};

export default Why;
