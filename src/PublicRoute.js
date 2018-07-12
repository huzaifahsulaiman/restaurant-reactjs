import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "./components/Layout/PublicLayout";

const PublicRoute = ({ component: Component, auth, ...rest }) => (
  <Layout>
    <Route {...rest} render={props => <Component {...props} />} />
  </Layout>
);

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PublicRoute);
