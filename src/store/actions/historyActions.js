import axios from "axios";
import { SET_HISTORY_LIST } from ".";

//order history (restaurant_id)
export const orderHistory = restaurant_id => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/order-history",
      restaurant_id
    )
    .then(res => {
      if (res.data.status === "200") {
        dispatch(fetchOrderHistory(res.data.history));
      } else {
        dispatch(fetchOrderHistory(""));
      }
    });
};

//order history dishes details (order_id)
export const orderHistoryDishesDetail = order_id => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/order-history/get-dishes",
      order_id
    )
    .then(res => res.data);
};

export const fetchOrderHistory = payload => {
  return {
    type: SET_HISTORY_LIST,
    payload: payload
  };
};
