import React, { Component } from "react";
import RestaurantProfile from "./RestaurantProfile";
import ManagerProfile from "./ManagerProfile";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  }
});

class Profile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <RestaurantProfile /> */}
        <ManagerProfile />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Profile);
