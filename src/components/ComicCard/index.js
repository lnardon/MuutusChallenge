import React from "react";
import { useDispatch } from "react-redux";

import "./index.css";
import ComicPriceStripe from "../../components/ComicPriceStripe";
import { ADD_TO_CART } from "../../actions/types";

function ComicCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="comicCardContainer">
      <img
        src={`${product.thumbnail.path}.${product.thumbnail.extension}`}
        alt="Comic Cover"
        className="comicCardCoverImage"
      />
      <div className="comicInfo">
        <h2 className="comicTitle">{product.title}</h2>
        {product.prices.map((info, index) => {
          return (
            <ComicPriceStripe type={info.type} price={info.price} key={index} />
          );
        })}
        <button
          className="ctaBtn"
          onClick={() => {
            dispatch({
              type: ADD_TO_CART,
              product,
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ComicCard;
