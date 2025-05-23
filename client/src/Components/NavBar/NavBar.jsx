import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { navItem } from "../../constants/Constants";
import icons from "../../constants/icons";
import AddtoCart from "../AddtoCart/AddtoCart";

import { useCart } from "../../context/cart/CartContext";

const MenuItems = ({ navItem }) => {
  return (
    <ul className="flex">
      {navItem.map(({ path, label }) => (
        <li key={path}>
          <Link to={path}> {label}</Link>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [addToCart, setAddToCart] = useState(false);
  const { getItemsCount, cart } = useCart();

  console.log(addToCart);

  const handleAddtoCartToggle = () => {
    setAddToCart((prev) => !prev);
  };
  return (
    <div className="header-wrapper">
      <header className="container flex spc-btwn header-height">
        <div className="header-icon">
          <Link to={"/"}>
            <span>Tish </span>
            <span>Beauty</span>
          </Link>
        </div>

        <nav>
          <MenuItems navItem={navItem} />
        </nav>

        <div className="header-right-wrapper flex">
          <div className="nav-bar-login">
            <button className="btn">Login</button>
          </div>
          <div className="header-right flex">
            <div className="header-right-icon">
              <Link to={"search"}>
                <img src={icons.search} alt="search" />
              </Link>
            </div>
            <div className="header-right-icon">
              <img src={icons.profile} alt="profile" />
            </div>
            <div className="header-right-icon nav-cart">
              {cart.length === 0 ? (
                ""
              ) : (
                <div className="cart-nav-counter">{getItemsCount}</div>
              )}
              <img
                src={icons.cart}
                alt="cart"
                onClick={handleAddtoCartToggle}
              />
            </div>
          </div>
        </div>
        {addToCart && <AddtoCart closeCart={handleAddtoCartToggle} />}
      </header>
    </div>
  );
};

export default NavBar;
