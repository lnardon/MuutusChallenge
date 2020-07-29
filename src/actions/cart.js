import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_NUMBER_OF_ITEMS_IN_CART,
} from "./types";

export const addToCart = () => {
  console.log(`called`);
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
    });
  };
};

export function removeFromCart() {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
    });
  };
}

export function getNumberOfItemsInCart() {
  return (dispatch) => {
    dispatch({
      type: GET_NUMBER_OF_ITEMS_IN_CART,
    });
  };
}
