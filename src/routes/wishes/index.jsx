import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyHeart } from "../../assets/images";
import Products from "../../components/products";

const Wishes = () => {
  const wishlist = useSelector((s) => s.wishlist.value);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <section id="empty-cart">
          <div className="container emp">
            <div className="empty-cart-image">
              <img src={emptyHeart} alt="empty-cart" />
            </div>
            <h1>Список желаний пуст</h1>
            <p>У вас еще нет ни одного товара в списке желаний</p>
            <button onClick={() => navigate("/")}> Главная</button>
          </div>
        </section>
      )}
    </>
  );
};

export default Wishes;
