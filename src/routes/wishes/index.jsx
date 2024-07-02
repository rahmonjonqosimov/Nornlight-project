import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products";

const Wishes = () => {
  const wishlist = useSelector((s) => s.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Products data={wishlist} />
    </>
  );
};

export default Wishes;
