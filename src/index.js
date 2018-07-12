import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { MuiThemeProvider } from "@material-ui/core/styles";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import combinedReducer from "./store/reducer/combinedReducer";
import { theme } from "./theme";

import { setCurrentUser } from "./store/actions/authActions";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  combinedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//check token
if (localStorage.manager_id) {
  const user = {
    manager_id: localStorage.getItem("manager_id"),
    manager_name: localStorage.getItem("manager_name"),
    restaurant_id: localStorage.getItem("restaurant_id"),
    restaurant_name: localStorage.getItem("restaurant_name")
  };
  // console.log(localStorage.manager_name);
  store.dispatch(setCurrentUser(user));
  // this.props.setCurrentUser(user);
  //logout user
  // store.dispatch(logoutUser());
  //clear current profile
  // store.dispatch(clearCurrentProfile());
  //redirect to login
} else {
  window.location.href = "/login";
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
