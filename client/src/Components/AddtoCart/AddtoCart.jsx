import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Addtocart.scss";
import images from "../../constants/images";

const AddtoCart = () => {
  return (
    <div className="addtocart-wrapper container">
      <div className="addto-cart-title">
        <h3>CART</h3>
        <RxCross2 />
      </div>

      <div className="cart-product-wrapper">
        <ul>
          <li className="flex">
            <div className="product-cart-img">
              <img src={images.productImage1} alt="product" />
            </div>

            <div className="product-cart-details">
              <span className="product-title-name">Soft Finish</span>
              <div className="produt-cart-price">{"Rs 3000"}</div>
              <div className="product-cart-increase-decrease flex">
                <div className="product-cart-increase-decrease-left">
                  <span className="flex cart-counter-holder">
                    <span className="btn-cart-decrease">
                      <FaMinus />
                    </span>
                    <span className="btn-cart-counter">1</span>
                    <span className="btn-cart-increase">
                      <FaPlus />
                    </span>
                  </span>
                </div>
                <div className="product-cart-increase-decrease-right">
                  <RxCross2 />
                </div>
              </div>
            </div>
          </li>
          <li className="flex">
            <div className="product-cart-img">
              <img src={images.productImage1} alt="product" />
            </div>

            <div className="product-cart-details">
              <span className="product-title-name">Soft Finish</span>
              <div className="produt-cart-price">{"Rs 3000"}</div>
              <div className="product-cart-increase-decrease flex">
                <div className="product-cart-increase-decrease-left">
                  <span className="flex cart-counter-holder">
                    <span className="btn-cart-decrease">
                      <FaMinus />
                    </span>
                    <span className="btn-cart-counter">1</span>
                    <span className="btn-cart-increase">
                      <FaPlus />
                    </span>
                  </span>
                </div>
                <div className="product-cart-increase-decrease-right">
                  <RxCross2 />
                </div>
              </div>
            </div>
          </li>
          <li className="flex">
            <div className="product-cart-img">
              <img src={images.productImage1} alt="product" />
            </div>

            <div className="product-cart-details">
              <span className="product-title-name">Soft Finish</span>
              <div className="produt-cart-price">{"Rs 3000"}</div>
              <div className="product-cart-increase-decrease flex">
                <div className="product-cart-increase-decrease-left">
                  <span className="flex cart-counter-holder">
                    <span className="btn-cart-decrease">
                      <FaMinus />
                    </span>
                    <span className="btn-cart-counter">1</span>
                    <span className="btn-cart-increase">
                      <FaPlus />
                    </span>
                  </span>
                </div>
                <div className="product-cart-increase-decrease-right">
                  <RxCross2 />
                </div>
              </div>
            </div>
          </li>
          <li className="flex">
            <div className="product-cart-img">
              <img src={images.productImage1} alt="product" />
            </div>

            <div className="product-cart-details">
              <span className="product-title-name">Soft Finish</span>
              <div className="produt-cart-price">{"Rs 3000"}</div>
              <div className="product-cart-increase-decrease flex">
                <div className="product-cart-increase-decrease-left">
                  <span className="flex cart-counter-holder">
                    <span className="btn-cart-decrease">
                      <FaMinus />
                    </span>
                    <span className="btn-cart-counter">1</span>
                    <span className="btn-cart-increase">
                      <FaPlus />
                    </span>
                  </span>
                </div>
                <div className="product-cart-increase-decrease-right">
                  <RxCross2 />
                </div>
              </div>
            </div>
          </li>
          <li className="flex">
            <div className="product-cart-img">
              <img src={images.productImage1} alt="product" />
            </div>

            <div className="product-cart-details">
              <span className="product-title-name">Soft Finish</span>
              <div className="produt-cart-price">{"Rs 3000"}</div>
              <div className="product-cart-increase-decrease flex">
                <div className="product-cart-increase-decrease-left">
                  <span className="flex cart-counter-holder">
                    <span className="btn-cart-decrease">
                      <FaMinus />
                    </span>
                    <span className="btn-cart-counter">1</span>
                    <span className="btn-cart-increase">
                      <FaPlus />
                    </span>
                  </span>
                </div>
                <div className="product-cart-increase-decrease-right">
                  <RxCross2 />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="cart-amount-details">
          <div className="cart-amount-details-row1">
            <div className="cart-amount-details-row1-left">
              <span>TOTAL</span> <span>Rs 3000</span>
            </div>
            <div className="cart-amount-details-row1-left">
              <span>DISCOUNT</span> <span>10%</span>
            </div>
            <div className="cart-amount-details-row1-left">
              <span>TOTAL PAYABLE</span> <span>Rs 2700</span>
            </div>
            <button className="btn">Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
