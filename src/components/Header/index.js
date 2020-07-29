import React from "react";

import "./index.css";
import CartIcon from "../../components/CartIcon";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContentContainer">
        <img
          src={require("../../assets/images/marvelLogo.png")}
          alt="Marvel Logo"
          className="logo"
        />
        <div className="cartIconDiv">
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
