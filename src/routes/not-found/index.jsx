import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notFound } from "../../assets/images";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
