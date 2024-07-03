import React, { useEffect, useState } from "react";
import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";
import Search from "./search";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { menu, menuX } from "../../../assets/images";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const BottomNav = ({ setMenu, menu: menuShow }) => {
  const [show, setShow] = useState(false);
  const wishlist = useSelector((s) => s.wishlist.value);
  const cart = useSelector((s) => s.cart.value);
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
          <Link to={"/category"}>
            <button className="nav__katalog">
              {" "}
              <HiOutlineMenuAlt1 /> Каталог
            </button>
          </Link>
          <Search />
          <div className="nav__links">
            <Link to={"/wishlist"} className="nav__link">
              <IoHeartOutline />
              <span>Избранное</span>
              <sup>{wishlist?.length}</sup>
            </Link>
            <div className="nav__link">
              <MdOutlineDarkMode />
              <span>Dark</span>
            </div>
            <Link to={"/cart"} className="nav__link">
              <IoCartOutline />
              <span>Корзина</span>
              <sup>{cart.length}</sup>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
