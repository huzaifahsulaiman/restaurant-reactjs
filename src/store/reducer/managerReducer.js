import { GET_MANAGER_PROFILE } from "../actions/index";

const initialState = {
  name: "",
  email: "",
  phone: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MANAGER_PROFILE:
      return {
        ...state,
        name: action.name,
        email: action.email,
        phone: action.phone
      };
    default:
      return state;
  }
}
