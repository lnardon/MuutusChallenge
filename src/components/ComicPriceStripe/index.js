import React from "react";

import "./index.css";

const ComicPriceStripe = ({ type, price }) => {
  // A little function to transform the camelCase response to Regular English
  const formatText = (t) => {
    var text = t;
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };

  return (
    <div className="comicPriceStripeContainer">
      <h4 className="format">{formatText(type)}</h4>
      <h3 className="price">$ {price}</h3>
    </div>
  );
};

export default ComicPriceStripe;
