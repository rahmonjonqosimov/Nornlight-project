import React from "react";
import { najotTalim } from "../../../assets/images";

const LazyLoading = () => {
  return (
    <section id="lazy">
      <div className="lazy--image">
        <img src={najotTalim} alt="" />
      </div>
    </section>
  );
};

export default LazyLoading;
