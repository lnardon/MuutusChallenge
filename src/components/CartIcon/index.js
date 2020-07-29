import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.css";

function CartIcon() {
  const itemsInCart = useSelector((state) => state.cartReducer.total);

  return (
    <Link to="/cart">
      <div className="cartIconContainer">
        <img
          src={require("../../assets/icons/cart.svg")}
          alt="Cart"
          className="cartIcon"
        />
        {itemsInCart > 0 && <span className="cartCounter">{itemsInCart}</span>}
      </div>
    </Link>
  );
}

export default CartIcon;
