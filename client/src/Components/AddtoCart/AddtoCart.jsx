import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Addtocart.scss";
import images from "../../constants/images";

import { useCart } from "../../context/cart/CartContext";

const AddtoCart = ({ closeCart }) => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="addtocart-wrapper container">
      <div className="addto-cart-title">
        <h3>CART</h3>
        <RxCross2 onClick={closeCart} />
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-product-wrapper">
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex">
                <div className="product-cart-img">
                  <img src={item.imageUrl} alt="product" />
                </div>

                <div className="product-cart-details">
                  <span className="product-title-name">{item.name}</span>
                  <div className="produt-cart-price">{item.price}</div>
                  <div className="product-cart-increase-decrease flex">
                    <div className="product-cart-increase-decrease-left">
                      <span className="flex cart-counter-holder">
                        <span className="btn-cart-decrease">
                          <FaMinus />
                        </span>
                        <span className="btn-cart-counter">
                          {item.quantity}
                        </span>
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
            ))}
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
      )}
    </div>
  );
};

export default AddtoCart;
