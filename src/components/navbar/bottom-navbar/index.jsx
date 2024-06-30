import React from "react";
import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";
import Search from "./search";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

const BottomNav = () => {
  return (
    <section id="bottom-navbar">
      <div className="container">
        <div className="bottom-navbar">
          <Link to={"/"} className="nav__logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to={"/catalog"}>
            <button className="nav__katalog">Каталог</button>
          </Link>
          <Search />
          <div className="nav__links">
            <Link to={"/wishlist"} className="nav__link">
              <IoHeartOutline />
              <span>Избранное</span>
            </Link>
            <div className="nav__link">
              <MdOutlineDarkMode />
              <span>Dark</span>
            </div>
            <Link to={"/cart"} className="nav__link">
              <IoCartOutline />
              <span>Корзина</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
