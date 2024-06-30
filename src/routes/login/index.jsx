import React from "react";
import useGetInputValue from "../../hooks/userGetInputValue";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slices/authSlilce";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "john32",
  password: "87654321",
};

const Login = () => {
  const { user, setUser, handleChange } = useGetInputValue(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.username === "john32" && user.password === "87654321") {
      dispatch(setToken("face-token"));
      navigate("/admin/create-product");
    } else {
      console.log("error");
      toast.error("Username and password incorrect", {
        position: "top-center",
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
    <section id="login">
      <div className="container">
        <form onSubmit={handleLogin} action="">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
