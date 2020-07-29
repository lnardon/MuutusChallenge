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
      return {
        ...state,
        total: state.total + 1,
        items: [...state.items, action.product],
      };
    case REMOVE_FROM_CART:
      return state;
    case GET_NUMBER_OF_ITEMS_IN_CART:
      console.log(state.total);
      return state.total;
    default:
      return state;
  }
};
