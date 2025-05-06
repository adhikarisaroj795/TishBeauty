import React from "react";
import "./DetailsCard.scss";

const DetailsCard = ({ image, title, description, className }) => {
  return (
    <div className={`details-card-wrapper flex ${className}`}>
      <div className="details-card-left">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn">Shop now</button>
      </div>
      <div className="details-card-right">
        <div className="details-card-right-img">
          <img src={image} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
