import React from "react";
import "./Card.scss"; // We'll create this CSS file next

const ProductCard = ({ product }) => {
  const {
    imageUrl,
    brand,
    name,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    isNew,
  } = product;

  return (
    <div className="product-card">
      {isNew && <div className="product-badge">New</div>}

      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
        <button className="quick-view-btn">Quick View</button>
      </div>

      <div className="product-details">
        <span className="product-brand">{brand}</span>
        <h3 className="product-title">{name}</h3>

        <div className="price-section">
          <span className="current-price">Rs {price.toFixed(2)}</span>
          {originalPrice && (
            <>
              <span className="original-price">
                Rs {originalPrice.toFixed(2)}
              </span>
              {discount && <span className="discount">{discount}% OFF</span>}
            </>
          )}
        </div>

        <div className="rating">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
          <span className="review-count">({reviewCount})</span>
        </div>

        <button className="add-to-cart-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
