import React from "react";

import "./index.css";

const ComicPriceStripe = ({ type, price }) => {
  return (
    <div className="comicPriceStripeContainer">
      <h4 className="format">{type}</h4>
      <h3 className="price">$ {price}</h3>
    </div>
  );
};

export default ComicPriceStripe;
