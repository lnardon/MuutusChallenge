import React from "react";

import "./index.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerContentContainer">
        <img
          src={require("../../assets/images/marvelLogo.png")}
          alt="Marvel Logo"
          className="logo"
        />
      </div>
    </div>
  );
};

export default Header;
