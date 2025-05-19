
import React from "react";
import "./Layout.scss";
import NavBar from "../../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="pages">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
