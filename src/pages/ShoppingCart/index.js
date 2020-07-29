import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./index.css";
import Header from "../../components/Header";
import ShoppingCartItem from "../../components/ShoppingCartItem";

function ShoppingCart() {
  const items = useSelector((state) => state.cartReducer.items);
  return (
    <div className="shoppingCartContainer">
      <Header />
      <div className="shoppingCartItemsListContainer">
        <div className="shoppingCartContentContainer">
          {items.map((item, index) => {
            return <ShoppingCartItem key={index} item={item.product} />;
          })}
        </div>
        <div className="totalAmountContainer">
          <h2 className="totalTitle">TOTAL:</h2>
          <h2 className="totalAmount">$35</h2>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
