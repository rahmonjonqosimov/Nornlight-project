import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { IoEye, IoEyeOff } from "react-icons/io5";
import { loginSvg } from "../../assets/images";
import { setToken } from "../../context/slices/authSlilce";
import useGetInputValue from "../../hooks/userGetInputValue";

const initialState = {
  username: "john32",
  password: "87654321",
};

const LoginSection = () => {
  const { user, setUser, handleChange } = useGetInputValue(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.username === "john32" && user.password === "87654321") {
      dispatch(setToken("face-token"));
      toast.success("Welcome !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/admin/create-product");
    } else {
      toast.error("Username and password incorrect", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <section id="login">
        <div className="login__image">
          <img src={loginSvg} alt="" />
        </div>
        <form onSubmit={handleLogin} action="">
          <h4>Kirish</h4>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <label htmlFor="password">
            <input
              id="password"
              type={eye ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <div onClick={() => setEye((p) => !p)} className="eye">
              {eye ? <IoEyeOff /> : <IoEye />}
            </div>
          </label>
          <button>Log In</button>
        </form>
      </section>
    </>
  );
};

export default LoginSection;
