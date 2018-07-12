import { GET_RESTAURANT_PROFILE, GET_COUNTRIES } from "../actions/index";

const initialState = {
  restaurant_name: "",
  alias: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "",
  city_id: "",
  state_id: "",
  country_id: "",
  postcode: "",
  social_facebook: "",
  social_twitter: "",
  social_instagram: "",
  social_youtube: "",
  countries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANT_PROFILE:
      return {
        ...state,
        restaurant_name: action.payload.restaurant_name,
        alias: action.payload.alias,
        phone: action.payload.phone,
        address: action.payload.address,
        city: action.payload.city,
        city_id: action.payload.city_id,
        state: action.payload.state,
        state_id: action.payload.state_id,
        country: action.payload.country,
        country_id: action.payload.country_id,
        postcode: action.payload.postcode,
        social_facebook: action.payload.social_facebook,
        social_twitter: action.payload.social_twitter,
        social_instagram: action.payload.social_instagram,
        social_youtube: action.payload.social_youtube
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    default:
      return state;
  }
}
