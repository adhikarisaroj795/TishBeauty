import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { navItem } from "../../constants/Constants";
import icons from "../../constants/icons";

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
  return (
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

      <div className="header-right flex">
        <div className="header-right-icon">
          <img src={icons.search} alt="search" />
        </div>
        <div className="header-right-icon">
          <img src={icons.profile} alt="profile" />
        </div>
        <div className="header-right-icon">
          <img src={icons.cart} alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
