import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { create, left, logOut, manage } from "../../assets/images";
import { logout } from "../../context/slices/authSlilce";

const AdminPage = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  console.log(show);
  return (
    <>
      <section className={`admin ${show ? "show" : ""}`}>
        <div></div>
        <div className={`aside ${show ? "show" : ""}`}>
          <div className="aside__top">
            <div className="admin__dashboard">
              <img
                className={show ? "img-show" : ""}
                onClick={() => setShow((p) => !p)}
                src={left}
                alt=""
              />
              <span className={show ? "title-show" : ""}>Admin Dashboard</span>
            </div>
            <ul>
              <li
                className={pathname.includes("create-product") ? "active" : ""}
              >
                <Link to={"create-product"}>
                  <img src={create} alt="Create" />
                  <span className={show ? "title-show" : ""}>
                    Create product
                  </span>
                </Link>
              </li>
              <li
                className={pathname.includes("manage-product") ? "active" : ""}
              >
                <Link to={"manage-product"}>
                  <img src={manage} alt="Create" />
                  <span className={show ? "title-show" : ""}>
                    Manage product
                  </span>
                </Link>
              </li>
              <li
                className={pathname.includes("create-category") ? "active" : ""}
              >
                <Link to={"create-category"}>
                  <img src={create} alt="Create" />

                  <span className={show ? "title-show" : ""}>
                    Create category
                  </span>
                </Link>
              </li>
              <li
                className={pathname.includes("manage-category") ? "active" : ""}
              >
                <Link to={"manage-category"}>
                  <img src={manage} alt="Create" />

                  <span className={show ? "title-show" : ""}>
                    Manage category
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={handleLogOut} className="aside__bottom">
            <img src={logOut} alt="log-out" />
            <span className={show ? "title-show" : ""}>Log out</span>
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AdminPage;
