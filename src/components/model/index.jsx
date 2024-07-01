import React, { useEffect } from "react";

const Model = ({ close, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <div onClick={close} className="owerlay owerlay-model"></div>
      <div className="model__children">{children}</div>
    </>
  );
};

export default Model;
