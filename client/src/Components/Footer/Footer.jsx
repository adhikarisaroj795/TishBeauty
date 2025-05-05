import React from "react";
import { Link } from "react-router-dom";
import icons from "../../constants/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-wrapper flex spc-btwn">
        <div className="footer-col-1">
          <Link>
            <span>Tish</span> <span>Beauty</span>
          </Link>
          <p>Discover nature's beauty with our natural care products.</p>

          <ul className="footer-col-1-ul">
            <li className="">
              <img src={icons.Call} alt="call" /> +977 9840341137
            </li>
            <li>
              <img src={icons.Message} alt="Message" />{" "}
              maskeyprashamsa@gmail.com
            </li>
            <li>
              <img src={icons.Location} alt="location" /> patan, Nepal
            </li>
          </ul>
        </div>
        <div className="footer-col-2">
          <span>HELP</span>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div className="footer-col-3">
          <span>MY ACCOUNT</span>
          <ul>
            <li>Addresses</li>
            <li>Order Status</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="footer-col-4">
          <span>CUSTOMER CARE</span>
          <ul>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
