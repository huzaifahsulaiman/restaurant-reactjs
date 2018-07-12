import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = theme => ({
  footer: {
    display: "flex",
    flexWrap: "wrap",
    color: "#fff",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#333",
    width: "100vw",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    boxShadow: "0px -4px 3px #888888"
  },
  text: {
    display: "flex",
    fontSize: "90%",
    alignItems: "center"
  },
  social: {
    display: "flex",
    alignItems: "center"
  },
  icons: {
    color: "#fff",
    transition: "color 0.2s"
  }
});
class Footer extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <div className={classes.footer}>
          <div className={classes.text}>
            <p>FoodHub&copy; All rights reserved</p>
          </div>
          <div className={classes.social}>
            <i className="icon ion-logo-facebook" />
            <i className="icon ion-logo-twitter" />
            <i className="icon ion-logo-instagram" />
            <i className="icon ion-logo-youtube" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
