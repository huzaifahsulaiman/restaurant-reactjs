import axios from "axios";

import { GET_ERROR, GET_MANAGER_PROFILE } from "./index";

//Get Manager Profile
export const getManagerProfile = userData => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/manager-account/get",
      userData
    )
    .then(res => {
      const isDone = {
        status: res.data.status,
        message: res.data.message,
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone
      };
      dispatch(showProfile(isDone));
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
      alert(err);
    });
};

//Edit Manager Profile
export const editManagerProfile = (managerData, verification) => dispatch => {
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
            "http://13.58.187.48/api/restaurants/managers/manager-account/edit",
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

export const editManagerPassword = managerData => dispatch => {
  axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/manager-account/edit-password",
      managerData
    )
    .then(res => {
      const isDone = {
        status: res.data.status,
        message: res.data.message
      };
      alert(isDone.message);
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
  return {
    type: GET_MANAGER_PROFILE,
    name: parameter.name,
    email: parameter.email,
    phone: parameter.phone
  };
};
