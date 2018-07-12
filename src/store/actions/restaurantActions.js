import axios from "axios";

import { GET_ERROR, GET_RESTAURANT_PROFILE } from "./index";

//Get Restaurant Profile

export const getRestaurantProfile = userData => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/restaurant-account/get",
      userData
    )
    .then(res => {
      const isDone = {
        status: res.data.status,
        message: res.data.message
      };
      dispatch(showProfile(res.data.restaurant));
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
      alert(err);
    });
};

//Show Profile

export const showProfile = parameter => {
  var Data = {
    restaurant_name: parameter.restaurant_name,
    alias: parameter.alias,
    phone: parameter.phone,
    address: parameter.address,
    city: parameter.city,
    city_id: parameter.city_id,
    state: parameter.state,
    state_id: parameter.state_id,
    country: parameter.country,
    country_id: parameter.country_id,
    postcode: parameter.postcode,
    social_facebook: parameter.social_facebook,
    social_twitter: parameter.social_twitter,
    social_instagram: parameter.social_instagram,
    social_youtube: parameter.social_youtube
  };

  return {
    type: GET_RESTAURANT_PROFILE,
    payload: Data
  };
};

//Edit Restaurant Profile
export const editRestaurantProfile = (
  managerData,
  verification
) => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/manager-account/authentication",
      verification
    )
    .then(res => {
      let isDone = {
        status: res.data.status,
        message: res.data.message
      };
      //````````````````````````````````````````````````````````````````````````````````````
      if (isDone.status === "200") {
        alert("Sudah Verify");
        axios
          .post(
            "http://13.58.187.48/api/restaurants/managers/restaurant-account/edit",
            managerData
          )
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
      }
      //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
      alert(err);
    });
};

//Edit Restaurant Address
export const editRestaurantAddress = (
  managerData,
  verification
) => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/manager-account/authentication",
      verification
    )
    .then(res => {
      let isDone = {
        status: res.data.status,
        message: res.data.message
      };

      alert(isDone.message);

      //````````````````````````````````````````````````````````````````````````````````````
      if (isDone.status === "200") {
        axios
          .post(
            "http://13.58.187.48/api/restaurants/managers/restaurant-account/edit-address",
            managerData
          )
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
      }
      //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
      alert(err);
    });
};

//Get country

export function getCountryList() {
  const country = axios
    .get("http://13.58.187.48/api/components/fetch/countries")
    .then(response => {
      const countries = [];
      for (let key in response.data.countries) {
        countries.push({
          ...response.data.countries[key]
        });
      }

      return countries;
      // return response.data;
      // console.log(response.data.countries);
    });
  // console.log(request);
  return country;
}

//Get state

export function getStateList(id) {
  const state = axios
    .post("http://13.58.187.48/api/components/fetch/states", { country_id: id })
    .then(response => {
      const states = [];
      for (let key in response.data.states) {
        states.push({
          ...response.data.states[key]
        });
      }

      return states;
    });

  return state;
}

//Get city

export function getCityList(id) {
  const city = axios
    .post("http://13.58.187.48/api/components/fetch/cities", { state_id: id })
    .then(response => {
      const cities = [];
      for (let key in response.data.cities) {
        cities.push({
          ...response.data.cities[key]
        });
      }

      return cities;
    });

  return city;
}

//Get dropdown tags

export function getTags() {
  const tagList = axios
    .get(
      "http://13.58.187.48/api/restaurants/managers/restaurant-account/get-all-tags"
    )
    .then(response => {
      const tags = [];
      for (let key in response.data.tags) {
        tags.push({
          ...response.data.tags[key]
        });
      }

      return tags;
      // return response.data;
      // console.log(response.data.countries);
    });
  // console.log(tagList);
  return tagList;
}

//Get restaurant tags

export function getRestaurantTags(manager_id) {
  const restaurantTagList = axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/restaurant-account/get-restaurant-tags",
      { manager_id: manager_id }
    )
    .then(response => {
      const restaurantTags = response.data.tags;
      return restaurantTags;
    });

  return restaurantTagList;
}

//Edit restaurant tags

export function editRestaurantTags(data) {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/restaurant-account/edit-tags",
      data
    )
    .then(response => {
      alert(response.data.message);
    });
}
