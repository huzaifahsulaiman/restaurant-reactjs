import isEmpty from "../../validation/isEmpty";
import { updateObject } from "../../utility/utility";
import { SET_CURRENT_USER } from "../actions/index";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: //simpan info pasal user from login
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
