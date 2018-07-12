import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import managerReducer from "./managerReducer";
import feedbackReducer from "./feedbackReducer";
import restaurantReducer from "./restaurantReducer";
import historyReducer from "./historyReducer";
import homeReducer from "./homeReducer";
import menuReducer from "./menuReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  feedback: feedbackReducer,
  history: historyReducer,
  home: homeReducer,
  manager: managerReducer,
  menu: menuReducer,
  restaurant: restaurantReducer
});
