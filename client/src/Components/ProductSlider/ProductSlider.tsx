import React from "react";
import images from "../../constants/images";
import "./ProductSlider.css";

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

const ProductSlider = () => {
  return (
    <div className="ProductySinglePage-slider flex">
      <div className="ProductySinglePage-slider-left">
        <div className="product-single-page-slider-img">
          <img src={images.productImage1} alt="" />
        </div>
        <div className="product-single-page-small-photos-holder">
          <div className="product-single-page-small-img">
            <img src={images.productimage2} alt="" />
          </div>
          <div className="product-single-page-small-img">
            <img src={images.productimage2} alt="" />
          </div>
          <div className="product-single-page-small-img">
            <img src={images.productimage2} alt="" />
          </div>
          <div className="product-single-page-small-img">
            <img src={images.productimage2} alt="" />
          </div>
          <div className="product-single-page-small-img">
            <img src={images.productimage2} alt="" />
          </div>
        </div>
      </div>
      <div className="ProductySinglePage-slider-right">
        <h3>Dewy Glow Jelly Cream</h3>
        <div className="product-single-rating">
          {"★".repeat(Math.round(sampleProduct.rating))}
          {"☆".repeat(5 - Math.round(sampleProduct.rating))}

          <span className="review-count">({sampleProduct.reviewCount})</span>
        </div>
        <span>Rs {sampleProduct.price}</span>

        <p>{sampleProduct.description}</p>
        <div className="product-single-page-addtocart-buttons">
          <button className="btn">Add to cart</button>

          <button className="btn">Add to Favourate</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
