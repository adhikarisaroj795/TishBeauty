import React from "react";
import images from "../../constants/images";
import "./ProductSlider.css";
import { sliderImages } from "../../constants/Constants";

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
    <div className="ProductSinglePage-slider flex">
      <div className="ProductSinglePage-slider-left">
        <div className="product-single-page-slider-img-holder">
          {sliderImages.map((image, index) => (
            <div className="sliderimg-wrapper">
              <img src={image} alt={`Product view ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="product-single-page-small-photos-holder">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="product-single-page-small-img">
              <img
                src={images.productimage2}
                alt={`Product thumbnail ${item}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="ProductSinglePage-slider-right">
        <h3>{sampleProduct.name}</h3>
        <div className="product-single-rating">
          {"★".repeat(Math.round(sampleProduct.rating))}
          {"☆".repeat(5 - Math.round(sampleProduct.rating))}
          <span className="review-count">({sampleProduct.reviewCount})</span>
        </div>
        <span>Rs {sampleProduct.price.toLocaleString()}</span>
        <p>{sampleProduct.description}</p>
        <div className="product-single-page-addtocart-buttons">
          <button className="btn">Add to cart</button>
          <button className="btn">Add to Favourites</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
