import axios from "axios";

//Get Theme Image list

export const getThemeImages = () => {
  return axios
    .get(
      "http://13.58.187.48/api/restaurants/managers/restaurant-account/get-theme-images"
    )
    .then(res => {
      return res.data.theme_images;
    });
};

//Save Theme Image

export const saveThemeImages = userData => {
  return axios
    .post(
      "http://13.58.187.48/api/restaurants/managers/restaurant-account/edit-theme-image",
      userData
    )
    .then(res => {
      if (res.data.status === "200") {
        return true;
      } else {
        alert(res.data.message);
      }
    });
};
