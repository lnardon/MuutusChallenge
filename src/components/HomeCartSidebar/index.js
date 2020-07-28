import React from "react";

import "./index.css";

function HomeCartSidebar() {
  return (
    <div className="homeCartSidebarContainer">
      <h1 className="title">SHOPPING CART</h1>
      <div className="itemsList"></div>
      <button className="ctaBtn">GO TO CART</button>
    </div>
  );
}

export default HomeCartSidebar;
