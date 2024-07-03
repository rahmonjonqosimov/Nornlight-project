import React, { useState } from "react";
import { Link } from "react-router-dom";
import Model from "../../model";
import Call from "../../call";

const TopNav = ({ menu }) => {
  const [call, setCall] = useState(false);
  return (
    <section className={menu ? "menu-show" : ""} id="top-navbar">
      <div className="container">
        <div className="top-navbar">
          <ul className="top__nav-item">
            <li>
              <Link to={"/about"}>О компании</Link>
            </li>
            <li>
              <Link to={"/payment"}>Доставка и оплата</Link>
            </li>
            <li>
              <Link to={"/about"}>Возврат</Link>
            </li>
            <li>
              <Link to={"/about"}>Гарантии</Link>
            </li>
            <li>
              <Link to={"/contact"}>Контакты</Link>
            </li>
            <li>
              <Link to={"/blog"}>Блог</Link>
            </li>
          </ul>
          <ul className="top__nav-item">
            <li>8 (800) 890-46-56</li>
            <li onClick={() => setCall(true)}>
              <Link to={"/"}>Заказать звонок</Link>
            </li>
          </ul>
        </div>
      </div>
      {call ? (
        <Model close={() => setCall(false)}>
          <Call setCall={setCall} />
        </Model>
      ) : (
        <></>
      )}
    </section>
  );
};

export default TopNav;
