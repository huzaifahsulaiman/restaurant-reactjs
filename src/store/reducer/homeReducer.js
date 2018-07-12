import {
  SET_KITCHEN_LIST,
  SET_WAITER_LIST,
  SET_CASHIER_LIST
} from "../actions";

const initialState = {
  kitchen: "",
  waiter: "",
  cashier: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_KITCHEN_LIST:
      return {
        ...state,
        kitchen: action.payload
      };
    case SET_WAITER_LIST:
      return {
        ...state,
        waiter: action.payload
      };
    case SET_CASHIER_LIST:
      return {
        ...state,
        cashier: action.payload
      };
    default:
      return state;
  }
}
