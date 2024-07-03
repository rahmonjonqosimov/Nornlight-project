import React, { memo } from "react";
const initialState = {
  name: "",
  tel: "",
  email: "",
  addres: "",
  comment: "",
};

import useGetInputValue from "../../hooks/userGetInputValue";
import { toast } from "react-toastify";
import { deleteAllCart } from "../../context/slices/cartSlice";
import { useDispatch } from "react-redux";

const BOT__TOKEN = "7039163383:AAHAschkQDggIAsrj6Oj6R3odtcTRRPXhms";
const USER__ID = "5980648858";

//  https://api.telegram.org/bot[your_token]/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Order = ({ totalPrice, data }) => {
  const dispatch = useDispatch();
  const { handleChange, setUser, user } = useGetInputValue(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.trim() &&
      user.tel.trim() &&
      user.email.trim() &&
      user.addres.trim()
    ) {
      let text = "User %0A%0A";
      text += `User Name: ${user.name} %0A`;
      text += `Tel: ${user.tel} %0A`;
      text += `Email: ${user.email} %0A`;
      text += `Address: ${user.addres} %0A`;
      text += `Comment: ${user.comment} %0A%0A`;

      data?.map((el, inx) => {
        text += `Product ${inx + 1} %0A`;
        text += `Title: ${el.title} %0A`;
        text += `Quantity: ${el.quantity} %0A`;
        text += `Price: $${el.price} %0A%0A`;
      });

      text += `Total price: $${totalPrice} %0A%0A`;

      let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      setUser(initialState);
      toast.success("Заявка принята!");

      dispatch(deleteAllCart());
      localStorage.removeItem("cart");
      window.scrollTo(0, 0);
    } else {
      toast.warning("Заполните форму");
    }
  };

  return (
    <div className="payment">
      <form onSubmit={handleSubmit} action="">
        <div className="form__top">
          <h2>Оформление</h2>
          <div className="inp__row">
            <input
              value={user.name}
              required
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="ФИО"
            />
            <input
              value={user.tel}
              required
              name="tel"
              onChange={handleChange}
              type="text"
              placeholder="телефон"
            />
            <input
              value={user.email}
              required
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Электронная почта"
            />
          </div>
          <div className="payment__line"></div>
          <h2>Доставка</h2>
          <div className="inp__row-1">
            <input
              value={user.addres}
              required
              onChange={handleChange}
              name="addres"
              type="text"
              placeholder="Адрес доставки"
            />
            <textarea
              value={user.comment}
              required
              onChange={handleChange}
              name="comment"
              placeholder="Комментарий"
              id=""
            ></textarea>
          </div>
        </div>
        <div className="form__bottom">
          <h2>Оплата</h2>
          <div className="tovar__row">
            <p>
              Товары......................................
              <span>{totalPrice}₽</span>
            </p>
            <p>
              Доставка.....................................
              <span>50₽</span>
            </p>
          </div>
          <div className="total__price">{totalPrice + 50}₽</div>
          <button>Купить</button>
        </div>
      </form>
    </div>
  );
};
export default memo(Order);
