import React from "react";
import useGetInputValue from "../../hooks/userGetInputValue";
import { IoCloseOutline } from "react-icons/io5";
const initialState = {
  name: "",
  tel: "",
};

const Call = ({ setCall }) => {
  const { handleChange, setUser, user } = useGetInputValue(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setCall(false);
  };
  return (
    <section id="call">
      <h1>Заполните, и мы перезвоним</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="ФИО"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          placeholder="телефон"
          name="tel"
          onChange={handleChange}
          required
        />
        <button>Весь каталог</button>
      </form>
      <div onClick={() => setCall(false)} className="close">
        <IoCloseOutline />
      </div>
    </section>
  );
};

export default Call;
