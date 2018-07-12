import { SEND_FEEDBACK, SEND_REPORT } from "../actions/index";

const initialState = {
  feedback_type: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_FEEDBACK:
      return action.payload;
    case SEND_REPORT:
      return action.payload;
    default:
      return state;
  }
}
