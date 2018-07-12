import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Login from "./components/Auth/Login";
import ResetPassword from "./components/Auth/ResetPassword";
import NewPassword from "./components/Auth/NewPassword";

import ManagerProfile from "./components/Profile/ManagerProfile";
import RestaurantProfile from "./components/Profile/RestaurantProfile";
import Address from "./components/Profile/Address";
import Tags from "./components/Profile/Tags";
import BusinessHours from "./components/Profile/BusinessHour";

import ThemeImage from "./components/ThemeImage/ThemeImage";

import Menu from "./components/Menu/Menu";

import Feedback from "./components/Feedback/Feedback";

import Legal from "./components/Legal/Legal";

import OrderDetails from "./components/OrderDetails/OrderDetails";

import Home from "./components/Home/Home";

import History from "./components/History/History";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

class App extends Component {
  render() {
    return (
      <div>
        {/* Private Page */}

        {/* Manager Profile */}
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
        </Switch>

        <Switch>
          <PrivateRoute
            exact
            path="/manager-profile"
            component={ManagerProfile}
          />
        </Switch>

        {/* Restaurant Profile */}
        <Switch>
          <PrivateRoute
            exact
            path="/restaurant-profile"
            component={RestaurantProfile}
          />
        </Switch>

        {/* Feedback */}
        <Switch>
          <PrivateRoute path="/feedback" component={Feedback} />
        </Switch>

        {/* Change Password */}
        <Switch>
          <PrivateRoute
            path="/manager-profile/change-password"
            component={NewPassword}
          />
        </Switch>

        {/* Change Address */}
        <Switch>
          <PrivateRoute
            path="/restaurant-profile/change-address"
            component={Address}
          />
        </Switch>

        {/* Change Image */}
        <Switch>
          <PrivateRoute
            path="/restaurant-profile/change-image"
            component={ThemeImage}
          />
        </Switch>

        {/* Business Hours */}
        <Switch>
          <PrivateRoute
            path="/restaurant-profile/hours"
            component={BusinessHours}
          />
        </Switch>

        {/* Restaurant Tags */}
        <Switch>
          <PrivateRoute
            path="/restaurant-profile/restaurant-tags"
            component={Tags}
          />
        </Switch>

        {/* Legal */}
        <Switch>
          <PrivateRoute path="/legal" component={Legal} />
        </Switch>

        {/* Menu*/}
        <Switch>
          <PrivateRoute path="/menu" component={Menu} />
        </Switch>

        {/* Order History */}
        <Switch>
          <PrivateRoute exact path="/order-history" component={History} />
        </Switch>

        <Switch>
          <PrivateRoute
            exact
            path="/order-history/order-details::handle"
            component={OrderDetails}
          />
        </Switch>

        {/* Public Page */}
        {/* Forgot Password */}
        <Switch>
          <PublicRoute path="/reset" component={ResetPassword} />
        </Switch>

        {/* Login */}
        <Switch>
          <PublicRoute path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
