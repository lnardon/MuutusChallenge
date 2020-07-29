import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components && Style
import "./index.css";
import Header from "../../components/Header";
import ShoppingCartItem from "../../components/ShoppingCartItem";

function ShoppingCart() {
  const items = useSelector((state) => state.cartReducer.items);
  // Gets the total amount of the cart based on the price and quantity
  const totalAmount = (() => {
    let total = 0;
    items.forEach((item) => {
      total += item.product.prices[0].price * item.amount;
    });
    return total;
  })();
  return (
    <div className="shoppingCartContainer">
      <Header />
      <Link to={"/"} className="backBtn">
        Back
      </Link>
      <div className="shoppingCartItemsListContainer">
        <div className="shoppingCartContentContainer">
          {items.map((item, index) => {
            return <ShoppingCartItem key={index} item={item} />;
          })}
        </div>
        <div className="totalAmountContainer">
          <h2 className="totalTitle">TOTAL:</h2>
          <h2 className="totalAmount">$ {totalAmount.toFixed(2)}</h2>
        </div>
      </div>
      <div className="buyBtnContainer">
        <button className="buyBtn" onClick={() => alert("Successful Purchase")}>
          {" "}
          Finish Purchase{" "}
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
