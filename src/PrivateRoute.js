import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "./components/Layout/Dashboard";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Layout>
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          // <Component {...props} />
          <Redirect to="/login" />
        )
      }
    />
  </Layout>
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
