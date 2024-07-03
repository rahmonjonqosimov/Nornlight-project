import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { deleteIcon } from "../../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  decrementCart,
  incrementCart,
} from "../../context/slices/cartSlice";
import { emptyCart } from "../../assets/images";
import Order from "../order";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((s) => s.cart.value);

  const totalPrice = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

  const cartItem = cart?.map((product) => (
    <div key={product.id} className="tr">
      <div className="td">
        <div className="cart__image-box">
          <img src={product?.images[0]} alt="" />
        </div>
      </div>
      <div className="td">
        <div className="tovar">
          <h3>{product.title}</h3>
          <span>{product.price * product.quantity}₽</span>
        </div>
      </div>
      <div className="td">
        <p>{product.desc}</p>
      </div>
      <div className="td">
        <p>RAD-COMBO-50 / XXX / 230 / XXX / XXX / S4/ XS</p>
      </div>
      <div className="td respon">
        <div className="cart__qny">
          <button
            disabled={product.quantity <= 1}
            onClick={() => dispatch(decrementCart(product))}
          >
            <FiMinus />
          </button>
          <span>{product.quantity}</span>
          <button
            disabled={product.quantity >= 10}
            onClick={() => dispatch(incrementCart(product))}
          >
            <FiPlus />
          </button>
        </div>
        <img
          onClick={() => dispatch(removeFromCart(product.id))}
          src={deleteIcon}
          alt="Delete"
          className="delete-btn"
        />
      </div>
      <div className="td delete">
        <img
          onClick={() => dispatch(removeFromCart(product.id))}
          src={deleteIcon}
          alt="Delete"
        />
      </div>
    </div>
  ));

  return (
    <>
      {cart.length ? (
        <section id="cart">
          <div className="container">
            <div className="cart">
              <h1>
                Корзина <sup>{cart.length}</sup>
              </h1>
              <div className="table">
                <div className="thead">
                  <div className="tr">
                    <div className="th">Фото</div>
                    <div className="th">Товары</div>
                    <div className="th">Описание</div>
                    <div className="th">Описание</div>
                    <div className="th">Количество</div>
                  </div>
                </div>
                <div className="tbody">{cartItem}</div>
              </div>

              <Order data={cart} totalPrice={totalPrice} />
            </div>
          </div>
        </section>
      ) : (
        <section id="empty-cart">
          <div className="container emp">
            <div className="empty-cart-image">
              <img src={emptyCart} alt="empty-cart" />
            </div>
            <h1>Ваша корзина пока пуста.</h1>
            <p>
              Before proceed to checkout you must add some products to your
              shopping cart. You will find a lot of interesting products on our
              "Shop" page.
            </p>
            <button onClick={() => navigate("/")}> Главная</button>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
