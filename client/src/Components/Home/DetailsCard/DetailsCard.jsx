import React from "react";
import "./DetailsCard.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const DetailsCard = ({ image, title, description, className }) => {
  return (
    <div className={`details-card-wrapper flex ${className}`}>
      <div className="details-card-left">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-explore">
          <button className="btn">Shop Now</button>
          <span className="">
            Explore More
            <FaArrowRightLong />
          </span>
        </div>
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
