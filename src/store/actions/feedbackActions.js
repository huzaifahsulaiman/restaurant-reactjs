import axios from "axios";

import { GET_ERROR } from "./index";

export const submitFeedback = (feedbackData, history) => dispatch => {
  axios
    .post("http://13.58.187.48/api/restaurants/managers/feedback", feedbackData)
    .then(res => {
      alert(res.data.message);
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
      alert(err);
    });
};
