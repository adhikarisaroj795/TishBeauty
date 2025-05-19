import React from "react";
import images from "../../constants/images";
import "./ProductySinglePage.css";
import ProductSlider from "../ProductSlider/ProductSlider";
import icons from "../../constants/icons";
import CommentCard from "../CommentCard/CommentCard";
import { commentData } from "../../constants/Constants";
import CommentInput from "../CommentInput/CommentInput";
import ProductCard from "../Card/Card";

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

const productList = Array(4).fill(sampleProduct);

const ProductySinglePage = () => {
  return (
    <div className="product-single-page-wrapper container">
      <ProductSlider />

      <section className="single-page-comment-section">
        <div className="arrival-detail">
          <div className="arrivals-title">
            <img src={icons.flower} alt="flower" />
            <h2>Read the reviews</h2>
            <img src={icons.flower} alt="flower" />
          </div>
          <span>See All</span>
          <div className="product-single-rating">
            {"★".repeat(Math.round(sampleProduct.rating))}
            {"☆".repeat(5 - Math.round(sampleProduct.rating))}

            <span className="review-count">({sampleProduct.reviewCount})</span>
          </div>
        </div>
        {commentData.map((item, index) => (
          <CommentCard key={item.id} commentData={item} />
        ))}

        <div className="commet-input-holder p-b-40">
          <h3>Write a Review</h3>
          <CommentInput />
        </div>

        <div className="single-page-other-products-wrapper">
          <div className="arrival-detail">
            <div className="arrivals-title">
              <img src={icons.flower} alt="flower" />
              <h2>Recently Viewed Products</h2>
              <img src={icons.flower} alt="flower" />
            </div>
            <span>See All</span>
          </div>

          <div className="products-grid">
            {productList.map((product, index) => (
              <ProductCard key={`product-${index}`} product={product} />
            ))}
          </div>
        </div>
        <div className="single-page-other-products-wrapper p-b-30">
          <div className="arrival-detail">
            <div className="arrivals-title">
              <img src={icons.flower} alt="flower" />
              <h2>You may also like</h2>
              <img src={icons.flower} alt="flower" />
            </div>
            <span>See All</span>
          </div>

          <div className="products-grid">
            {productList.map((product, index) => (
              <ProductCard key={`product-${index}`} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductySinglePage;
