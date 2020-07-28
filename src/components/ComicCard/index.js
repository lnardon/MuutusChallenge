import React from "react";

import "./index.css";

function ComicCard({ thumbnail, title, format, price }) {
  return (
    <div className="comicCardContainer">
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt="Comic Cover"
        className="comicCardCoverImage"
      />
      <div className="comicInfo">
        <h2 className="comicTitle">{title}</h2>
        <div className="pricesContainer">
          <h4 className="format">{format}</h4>
          <h3 className="price">{price}</h3>
        </div>
        <button className="ctaBtn"> Add to Cart </button>
      </div>
    </div>
  );
}

export default ComicCard;
