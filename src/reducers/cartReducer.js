import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_FROM_CART,
} from "../actions/types";

const INITIAL_STATE = {
  items: [],
  total: 0,
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      // Checks if the item already exists in the cart
      let item = state.items.filter(
        (item) => item.product.id === action.product.id
      );
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
        newitems[index].amount = newitems[index].amount + 1;
        return {
          ...state,
          items: newitems,
        };
      }

    case REMOVE_FROM_CART:
      // Removes the select element from the array of items
      return {
        ...state,
        total: state.total - 1,
        items: state.items.filter(
          (item) => item.product.id !== action.product.id
        ),
      };

    case DECREASE_FROM_CART:
      // Checks if the item is more than once on the cart
      let index = state.items.findIndex(
        (item) => item.product.id === action.product.id
      );
      if (state.items[index].amount <= 1) {
        // If yes, delete the item from the items array and updates the cart's total products amount
        return {
          ...state,
          total: state.total - 1,
          items: state.items.filter(
            (item) => item.product.id !== action.product.id
          ),
        };
      } else {
        // If no, decreases the amount of the product on the cart
        let newitems = state.items;
        newitems[index].amount = newitems[index].amount - 1;
        return {
          ...state,
          items: newitems,
        };
      }

    default:
      return state;
  }
};
