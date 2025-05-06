import React from "react";

import PromotionalBanner from "../../Components/Home/PromotionalBanner/PromotionalBanner";
import ProductCard from "../../Components/Card/Card";
import icons from "../../constants/icons";
import DetailsCard from "../../Components/Home/DetailsCard/DetailsCard";

import { BigDetailCardDetails } from "../../constants/Constants";

const sampleProduct = {
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWHlzy6nV3NdhQimm3XgWC3ypSYMVFIMMwg&s",
  brand: "PremiumBrand",
  name: "Elegant Comfort Sneakers - Summer Edition",
  price: 3000,
  originalPrice: 3500,
  discount: 18,
  rating: 4.5,
  reviewCount: 128,
  isNew: true,
};

const productList = Array(4).fill(sampleProduct);

const SkinCare = () => {
  return (
    <div className="home-page-wrapper">
      <div className="newarrivals-sections container">
        <div className="arrival-detail">
          <div className="arrivals-title">
            <img src={icons.flower} alt="flower" />
            <h2>NEW ARRIVALS</h2>
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
      <div className="newarrivals-sections container">
        <div className="arrival-detail">
          <div className="arrivals-title">
            <img src={icons.flower} alt="flower" />
            <h2>BEST SELLERS</h2>
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
      <div className="newarrivals-sections container">
        <div className="arrival-detail">
          <div className="arrivals-title">
            <img src={icons.flower} alt="flower" />
            <h2>BEST SELLERS</h2>
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
    </div>
  );
};

export default SkinCare;
