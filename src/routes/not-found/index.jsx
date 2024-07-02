import React from "react";
import { notFound } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section id="not-found">
      <div className="container">
        <div className="not__found">
          <img src={notFound} alt="Not Found" />
          <h3>Похоже, ничего не нашлось {":("}</h3>
          <button onClick={() => navigate("/")}>На главную</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
