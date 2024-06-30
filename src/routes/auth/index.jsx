import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const token = useSelector((s) => s.auth.token);
  const isLogin = token;
  return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
