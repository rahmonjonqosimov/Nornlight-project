import React from "react";
import { Link, Outlet } from "react-router-dom";
import { create, manage, logOut } from "../../assets/images";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slices/authSlilce";

const AdminPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <section id="admin">
        <div></div>
        <div className="aside">
          <div className="aside__top">
            <div className="admin__dashboard">
              <span>Admin Dashboard</span>
            </div>
            <ul>
              <li
                className={pathname.includes("create-product") ? "active" : ""}
              >
                <Link to={"create-product"}>
                  <img src={create} alt="Create" />
                  <span>Create product</span>
                </Link>
              </li>
              <li
                className={pathname.includes("manage-product") ? "active" : ""}
              >
                <Link to={"manage-product"}>
                  <img src={manage} alt="Create" />
                  <span>Manage product</span>
                </Link>
              </li>
              <li
                className={pathname.includes("create-category") ? "active" : ""}
              >
                <Link to={"create-category"}>
                  <img src={create} alt="Create" />

                  <span>Create category</span>
                </Link>
              </li>
              <li
                className={pathname.includes("manage-category") ? "active" : ""}
              >
                <Link to={"manage-category"}>
                  <img src={manage} alt="Create" />

                  <span>Manage category</span>
                </Link>
              </li>
            </ul>
          </div>
          <div onClick={handleLogOut} className="aside__bottom">
            <img src={logOut} alt="log-out" />
            <span>Log out</span>
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
