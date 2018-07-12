import axios from "axios";
import { SET_KITCHEN_LIST, SET_WAITER_LIST, SET_CASHIER_LIST } from ".";

//Kitchen------------------------------------------------------------

//Fetch dishes (restaurant_id)
export const kitchenDishes = restaurant_id => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/kitchen/fetch-dishes",
      restaurant_id
    )
    .then(res => {
      if (res.data.status === "200") {
        dispatch(fetchKitchen(res.data.kitchen_items));
      } else {
        dispatch(fetchKitchen(""));
      }
    });
};

//Item ready (item_id)
export const kitchenItemReady = item_id => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/kitchen/dish-ready",
      item_id
    )
    .then(res => res.data);
};

const fetchKitchen = payload => {
  return {
    type: SET_KITCHEN_LIST,
    payload: payload
  };
};

//Waiter-------------------------------------------------------------

//Fetch dishes (restaurant_id)
export const waiterDishes = restaurant_id => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/waiter/fetch-dishes",
      restaurant_id
    )
    .then(res => {
      if (res.data.status === "200") {
        dispatch(fetchWaiter(res.data.waiter_items));
      } else {
        dispatch(fetchWaiter(""));
      }
    });
};

//Item served (item_id)
export const waiterItemServed = item_id => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/waiter/dish-served",
      item_id
    )
    .then(res => res.data);
};

const fetchWaiter = payload => {
  return {
    type: SET_WAITER_LIST,
    payload: payload
  };
};

//Cashier------------------------------------------------------------

//Fetch orders (restaurant_id)
export const cashierDishes = restaurant_id => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/cashier/fetch-orders",
      restaurant_id
    )
    .then(res => {
      if (res.data.status === "200") {
        dispatch(fetchCashier(res.data.details));
      } else {
        dispatch(fetchCashier(""));
      }
    });
};

//Item paid (order_id)
export const cashierOrderPaid = order_id => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/cashier/order-paid",
      order_id
    )
    .then(res => res.data);
};

const fetchCashier = payload => {
  return {
    type: SET_CASHIER_LIST,
    payload: payload
  };
};
