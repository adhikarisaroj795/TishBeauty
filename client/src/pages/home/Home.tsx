import React from "react";
import "./Home.scss";
import PromotionalBanner from "../../Components/Home/PromotionalBanner";
import ProductCard from "../../Components/Card/Card";

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

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <div className="promotional-sec">
        <PromotionalBanner />
      </div>

      <div className="newarrivals-sections container">
        <ProductCard product={sampleProduct} />
      </div>
    </div>
  );
};

export default Home;
