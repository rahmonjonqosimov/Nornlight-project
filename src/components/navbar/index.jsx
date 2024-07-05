import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "./bottom-navbar";
import TopNav from "./top-navbar";
const Navbar = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  document.body.style.overflow = menu ? "hidden" : "auto";
  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  if (pathname.includes("login") || pathname.includes("admin")) {
    return <></>;
  }
  return (
    <>
      <TopNav menu={menu} />
      <BottomNav setMenu={setMenu} menu={menu} />
    </>
  );
};

export default Navbar;
