import React from "react";
import { useDispatch } from "react-redux";

import { REMOVE_FROM_CART } from "../../actions/types";

import "./index.css";

const ShoppingCartItem = ({ item, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="shoppingCartItemContainer">
      <div className="itemCoverContainer">
        <img
          src={`${item.product.thumbnail.path}.${item.product.thumbnail.extension}`}
          alt="Cover"
          className="productCover"
        />
      </div>
      <div className="contentContainer">
        <div className="itemInfoContainer">
          <h2 className="comicTitle">{item.product.title}</h2>
          <h3 className="comicPrice">${item.product.prices[0].price}</h3>
        </div>
        <div className="itemAmountContainer">
          <div className="amountButtons">
            <button>+</button>
            <h4>{amount}</h4>
            <button>-</button>
          </div>
        </div>
        <div className="itemDeleteContainer">
          <button
            className="removeBtn"
            onClick={() =>
              dispatch({
                type: REMOVE_FROM_CART,
                product: item.product,
              })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
