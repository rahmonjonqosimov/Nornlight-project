import React, { useEffect } from "react";
import Cart from "../../components/cart";
import Url from "../../components/url";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Url title={"Корзина"} path={"/cart"} />
      <Cart />
    </>
  );
};

export default CartPage;
