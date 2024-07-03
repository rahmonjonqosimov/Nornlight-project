import React from "react";
import { Link } from "react-router-dom";

const Url = ({ title, path }) => {
  return (
    <section id="url">
      <div className="container">
        <div className="url">
          <Link to={"/"} className="url__home">
            Главная
          </Link>
          <span>{">"}</span>
          <Link className="url__title" to={path}>
            {" "}
            {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Url;
