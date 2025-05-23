import React from "react";
import "./SearchProduct.scss";
import icons from "../../constants/icons";

import ProductCard from "../../Components/Card/Card";
import { FaMinus } from "react-icons/fa";

const SearchProduct = () => {
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
  return (
    <div className="search-page-wrapper container">
      <section>
        <div className="searchProduct-left">
          <h3>Category</h3>

          <ul>
            <li>All</li>
            <li>HairCare</li>
            <li>SkinCare</li>
            <li>MakeUp</li>
            <li>Fragnance</li>
          </ul>
          <h3>Brand</h3>
          <ul>
            <li>All</li>
            <li>HairCare</li>
            <li>SkinCare</li>
            <li>MakeUp</li>
            <li>Fragnance</li>
          </ul>
          <h3>Price</h3>
          <div className="search-price-holder">
            <input type="text" placeholder="min" />
            <FaMinus />
            <input type="text" placeholder="max" />
            <button>
              <img src={icons.search} alt="search" />
            </button>
          </div>

          <div className="searchProduct-third">
            <h3>Sort by</h3>

            <div className="searchproduct-third-sort">
              <input type="checkbox" />
              <label htmlFor="">A-Z</label>
            </div>
            <div className="searchproduct-third-sort">
              <input type="checkbox" />
              <label htmlFor="">Z-A</label>
            </div>
          </div>
        </div>
        <div className="searchProduct-right">
          <h3>Search Results</h3>

          <div className="search-product-products-wrapper">
            {productList.map((item, index) => (
              <ProductCard product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchProduct;
