import axios from "axios";

import { GET_ERROR, SET_CURRENT_USER } from "./index";

//Login (need email, password)
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("http://13.58.187.48/api/restaurants/managers/login", userData)
    .then(res => {
      if (res.data.status === "200") {
        localStorage.setItem("manager_id", res.data.manager_id);
        localStorage.setItem("manager_name", res.data.manager_name);
        localStorage.setItem("restaurant_id", res.data.restaurant_id);
        localStorage.setItem("restaurant_name", res.data.restaurant_name);
        let parameters = {
          manager_id: res.data.manager_id,
          manager_name: res.data.manager_name,
          restaurant_id: res.data.restaurant_id,
          restaurant_name: res.data.restaurant_name
        };
        dispatch(setCurrentUser(parameters));
      } else {
        let err = {
          status: res.data.status,
          message: res.data.message
        };
        dispatch({
          type: GET_ERROR,
          payload: err
        });
        alert(err.message);
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
      alert(err);
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("manager_id");
  localStorage.removeItem("manager_name");
  dispatch(setCurrentUser({}));
};
