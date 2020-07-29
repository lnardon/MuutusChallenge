import React from "react";
import { useSelector } from "react-redux";

import "./index.css";

function CartIcon() {
  const itemsInCart = useSelector((state) => state.cartReducer.total);

  return (
    <div className="cartIconContainer">
      <img
        src={require("../../assets/icons/cart.svg")}
        alt="Cart"
        className="cartIcon"
      />
      {itemsInCart > 0 && <span className="cartCounter">{itemsInCart}</span>}
    </div>
  );
}

export default CartIcon;
