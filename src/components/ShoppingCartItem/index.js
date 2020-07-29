import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";

const ShoppingCartItem = ({ item, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="shoppingCartItemContainer">
      <div className="itemCoverContainer">
        <img
          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          alt="Cover"
          className="productCover"
        />
      </div>
      <div className="itemInfoContainer">
        <h2 className="comicTitle">{item.title}</h2>
        <h3 className="comicPrice">${item.prices[0].price}</h3>
      </div>
      <div className="itemAmountContainer">
        <div className="amountButtons">
          <button>+</button>
          <h4>{amount}</h4>
          <button>-</button>
        </div>
      </div>
      <div className="itemDeleteContainer">
        <button>x</button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
