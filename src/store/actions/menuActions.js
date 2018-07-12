import axios from "axios";
import { SET_CATEGORY } from ".";

//Fetch categories (need restaurant_id)
export const fetchCategories = restaurntId => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/menu/categories/fetch",
      restaurntId
    )
    .then(res => {
      dispatch(setCategory(res.data.categories));
    });
};

const setCategory = payload => {
  return {
    type: SET_CATEGORY,
    payload: payload
  };
};

//Get category (need category_id)
export const getCategory = categoryId => {
  return axios
    .post("http://13.58.187.48/api/restaurants/menu/category/get", categoryId)
    .then(res => res.data.category);
};

//Add category (need restaurant_id, category_name)
export const addCategory = userData => {
  return axios
    .post("http://13.58.187.48/api/restaurants/menu/category/add", userData)
    .then(res => res.data);
};

//Delete category (need category_id)
export const deleteCategory = userData => {
  return axios
    .post("http://13.58.187.48/api/restaurants/menu/category/delete", userData)
    .then(res => res.data);
};

//Edit category (need category_id, category_new_name)
export const editCategory = categoryData => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/menu/category/edit",
      categoryData
    )
    .then(res => res.data);
};

//Fetch all dishes
export const fetchAllDishes = restaurntId => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/menu/dishes/fetch-all",
      restaurntId
    )
    .then(res => res.data.dishes);
};

//Fetch dishes by category (need category_id)
export const fetchByCategory = categoryId => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/menu/dishes/fetch-by-category",
      categoryId
    )
    .then(res => res.data.dishes);
};

//Get dish (need dish_id)
export const getDish = dishId => {
  return axios
    .post("http://13.58.187.48/api/restaurants/menu/dish/get", dishId)
    .then(res => res.data.dish);
};

//Change dish category (need dish_id, new_category_id)
export const changeDishCategory = dishData => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/menu/dish/change-category",
      dishData
    )
    .then(res => {});
};

//Add dish (category_id,restaurant_id,food_name,description,price,note)
export const addDish = dishData => {
  axios
    .post("http://13.58.187.48/api/restaurants/menu/dish/add", dishData)
    .then(res => {});
};

//Delete dish (need dish_id)
export const deleteDish = dishId => {
  axios
    .post("http://13.58.187.48/api/restaurants/menu/dish/delete", dishId)
    .then(res => {});
};

//Edit dish (need dish_id,category_id, food_name, description, price, note)
export const editDish = dishData => {
  axios
    .post("http://13.58.187.48/api/restaurants/menu/dish/edit", dishData)
    .then(res => {});
};
