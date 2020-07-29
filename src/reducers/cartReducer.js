import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_NUMBER_OF_ITEMS_IN_CART,
} from "../actions/types";

const INITIAL_STATE = {
  items: [],
  total: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Checks if the item already exists in the cart
      let item = state.items.filter(
        (item) => item.product.id === action.product.id
      );
      console.log(item);
      if (item.length === 0) {
        // If no, adds the item to the cart with 1 in the amount
        return {
          ...state,
          total: state.total + 1,
          items: [...state.items, { product: action.product, amount: 1 }],
        };
      } else {
        // If yes, just updates the item's amount
        let index = state.items.findIndex(
          (item) => item.product.id === action.product.id
        );
        let newitems = state.items;
        newitems[index].amount = newitems[index].amount++;
        return {
          ...state,
          items: newitems,
        };
      }

    case REMOVE_FROM_CART:
      if (state.items.product.amount === 1) {
        return {
          ...state,
          total: state.total - 1,
          items: state.items.filter(
            (item) => item.product.id !== action.product.id
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.product],
        };
      }

    case GET_NUMBER_OF_ITEMS_IN_CART:
      return state.total;

    default:
      return state;
  }
};
