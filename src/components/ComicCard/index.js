import React from "react";

import "./index.css";
import ComicPriceStripe from "../../components/ComicPriceStripe";

function ComicCard({ thumbnail, title, format }) {
  return (
    <div className="comicCardContainer">
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt="Comic Cover"
        className="comicCardCoverImage"
      />
      <div className="comicInfo">
        <h2 className="comicTitle">{title}</h2>
        {format.map((info, index) => {
          return (
            <ComicPriceStripe type={info.type} price={info.price} key={index} />
          );
        })}
        <button
          className="ctaBtn"
          onClick={() => {
            alert("ADDED TO CART");
          }}
        >
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ComicCard;
