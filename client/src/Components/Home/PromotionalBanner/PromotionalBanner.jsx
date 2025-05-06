import React from "react";
import "./PromotionalBanner.scss";
import images from "../../../constants/images";

const PromotionalBanner = () => {
  return (
    <div className="promotional-banner-wrapper container ">
      <div className="promotional-banner-left">
        <h1>Radiant hue of you, thanks to Tish and you.</h1>
        <p>The best for you, and your loved onces.</p>
        <button className="btn">Shop now</button>
      </div>
      <div className="promotional-banner-right">
        <figure>
          <img src={images.promotionalbanner} alt="promotionalbanner" />
        </figure>
      </div>
    </div>
  );
};

export default PromotionalBanner;
