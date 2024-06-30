import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <section id="top-navbar">
      <div className="container">
        <div className="top-navbar">
          <ul className="top__nav-item">
            <li>
              <Link to={"/about"}>О компании</Link>
            </li>
            <li>
              <Link to={"/about"}>Доставка и оплата</Link>
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
            <li>
              <Link to={"/"}>Заказать звонок</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
