import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo, menu, menuX } from "../../../assets/images";
import Search from "./search";

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
    <>
      {menuShow ? (
        <div
          onClick={() => setMenu((p) => !p)}
          style={{ top: "200px", zIndex: "100" }}
          className="owerlay"
        ></div>
      ) : (
        <></>
      )}
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
                <sup className="heart">{wishlist?.length}</sup>
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
    </>
  );
};

export default BottomNav;
