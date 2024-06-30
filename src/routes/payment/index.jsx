import React, { useEffect } from "react";
import Url from "../../components/url";
import Payment from "../../components/payment";
import Map from "../../components/map/Map";

const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Url path={"/payment"} title={"Доставка и оплата"} />
      <Payment />
      <Map />
    </>
  );
};

export default PaymentPage;
