import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Call from "../../call";
import Model from "../../model";

const TopNav = ({ menu }) => {
  const [call, setCall] = useState(false);
  return (
    <>
      <section className={menu ? "menu-show" : ""} id="top-navbar">
        <div className="container">
          <div className="top-navbar">
            <ul className="top__nav-item">
              <li>
                <NavLink to={"/about"}>О компании</NavLink>
              </li>
              <li>
                <NavLink to={"/payment"}>Доставка и оплата</NavLink>
              </li>
              <li>
                <NavLink to={"/return"}>Возврат</NavLink>
              </li>
              <li>
                <NavLink to={"/garant"}>Гарантии</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Контакты</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Блог</NavLink>
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
      </section>

      {call ? (
        <Model close={() => setCall(false)}>
          <Call setCall={setCall} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default TopNav;
