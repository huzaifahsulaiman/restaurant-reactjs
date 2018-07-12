import { SET_HISTORY_LIST } from "../actions";

const initialState = {
  order_history: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_HISTORY_LIST:
      return {
        ...state,
        order_history: action.payload
      };

    default:
      return state;
  }
}
