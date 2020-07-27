import { combineReducers } from "redux";

const cartReducer = () => {
  return [];
};

const productsReducer = () => {
  return [];
};

const currentCategoryReducer = (currentCategory = "ALL", action) => {
  if (action.type === "CHANGED_CATEGORY") {
    return action.payload;
  }

  return currentCategory;
};

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  currentCategory: currentCategoryReducer,
});
