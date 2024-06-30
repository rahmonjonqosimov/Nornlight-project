import React, { useEffect, useState } from "react";
import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";
import Search from "./search";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { menu, menuX } from "../../../assets/images";

const BottomNav = ({ setMenu, menu: menuShow }) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else if (window.scrollY <= 0) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={show ? "navbar__show" : ""} id="bottom-navbar">
      <div className="container">
        <div className="bottom-navbar">
          <div onClick={() => setMenu((p) => !p)} className="menu">
            <img src={menuShow ? menuX : menu} alt="" />
          </div>

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
