import React from "react";
import images from "../../constants/images";

import "./CommentCard.scss";

const sampleProduct = {
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWHlzy6nV3NdhQimm3XgWC3ypSYMVFIMMwg&s",
  brand: "PremiumBrand",
  name: "Elegant Comfort Sneakers - Summer Edition",
  price: 3000,
  originalPrice: 3500,
  description:
    "A gel moisturizer packed with glow-boosting Cherry Blossom Extracts, visibly brightening niacinamide, and hydrating betaine from sugar beets. Advanced with glycerin and Cherry Blossom flavanoids with visibly soothing and moisturizing benefits for skin that’s ready for makeup! Dermatologist tested.",
  discount: 18,
  rating: 4.5,
  reviewCount: 128,
  isNew: true,
};

const CommentCard = ({ commentData }) => {
  return (
    <div className="comment-card-wrapper flex">
      <div className="comment-card-left">
        <div className="comemnt-card-profile">
          <img src={commentData.profileImage} alt="image" />
        </div>
      </div>
      <div className="comment-card-right">
        <h4>Cathy K.</h4>
        <div className="product-single-rating">
          {"★".repeat(Math.round(commentData.rating))}
          {"☆".repeat(5 - Math.round(commentData.rating))}
        </div>
        <h3>{commentData.hookLine}</h3>

        <p>{commentData.commentDescription}</p>
        <div className="comment-post-img-holder">
          {commentData?.randomImage?.map((img, index) => (
            <div key={index} className="comment-post-img">
              <img src={img} alt="productimage" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
