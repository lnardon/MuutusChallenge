import React from "react";
import { Link } from "react-router-dom";

import "./index.css";
import CartIcon from "../../components/CartIcon";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContentContainer">
        <Link to="/">
          <img
            src={require("../../assets/images/marvelLogo.png")}
            alt="Marvel Logo"
            className="logo"
          />
        </Link>
        <div className="cartIconDiv">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
