import React from "react";

const Model = ({ close, children }) => {
  return (
    <>
      <div onClick={close} className="owerlay owerlay-model"></div>
      <div className="model__children">{children}</div>
    </>
  );
};

export default Model;
