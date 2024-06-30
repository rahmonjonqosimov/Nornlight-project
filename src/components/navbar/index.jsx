import React, { useEffect, useState } from "react";
import TopNav from "./top-navbar";
import BottomNav from "./bottom-navbar";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();

  const [menu, setMenu] = useState(false);
  document.body.style.overflow = menu ? "hidden" : "auto";
  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <>
      {menu ? (
        <div onClick={() => setMenu(false)} className="owerlay"></div>
      ) : (
        <></>
      )}
      <TopNav menu={menu} />
      <BottomNav setMenu={setMenu} menu={menu} />
    </>
  );
};

export default Navbar;
