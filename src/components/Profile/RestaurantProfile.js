import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

import Verify from "../../components/Auth/Verify";
import PopUp from "./PopUp";
import {
  editRestaurantProfile,
  getRestaurantProfile
} from "../../store/actions/restaurantActions";

const styles = theme => ({
  container: {
    width: "75vw",
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px auto 100px",
    paddingBottom: "50px",
    paddingTop: "25px"
  },
  formControl: {
    width: "100%"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  panelTitle: {
    display: "flex",
    justifyContent: "space-between"
  },
  buttonSave: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "25px",
    paddingBottom: "50px"
  }
});

class RestaurantProfile extends React.Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    restaurant_name: "",
    alias: "",
    phone: "",
    address: "",
    city: "",
    city_id: "",
    state: "",
    state_id: "",
    country: "",
    country_id: "",
    postcode: "",
    social_facebook: "",
    social_twitter: "",
    social_instagram: "",
    social_youtube: "",

    open: false
  };

  handleChange = name => fromChild => {
    this.setState({
      [name]: fromChild
    });
  };

  onClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleClickTags = () => {
    this.props.history.push("/restaurant-profile/restaurant-tags");
  };

  handleClickChange = () => {
    this.props.history.push("/restaurant-profile/change-address");
  };

  handleClickHours = () => {
    this.props.history.push("/restaurant-profile/hours");
  };

  handleClickImage = () => {
    this.props.history.push("/restaurant-profile/change-image");
  };

  childTrigger = name => fromChild => {
    this.props.editRestaurantProfile(name, fromChild);
  };

  componentDidMount() {
    const userData = {
      manager_id: this.state.manager_id
    };
    this.props.getRestaurantProfile(userData);
  }

  //Already reduxed
  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurant) {
      const { restaurant } = nextProps;

      this.setState({
        restaurant_name: restaurant.restaurant_name,
        alias: restaurant.alias,
        phone: restaurant.phone,
        address: restaurant.address,
        city: restaurant.city,
        city_id: restaurant.city_id,
        state: restaurant.state,
        state_id: restaurant.state_id,
        country: restaurant.country,
        country_id: restaurant.country_id,
        postcode: restaurant.postcode,
        social_facebook: restaurant.social_facebook,
        social_twitter: restaurant.social_twitter,
        social_instagram: restaurant.social_instagram,
        social_youtube: restaurant.social_youtube
      });
    }
  }

  render() {
    const { classes } = this.props;
    const restaurantData = {
      manager_id: localStorage.getItem("manager_id"),
      name: this.state.restaurant_name,
      alias: this.state.alias,
      phone: this.state.phone,
      social_facebook: this.state.social_facebook,
      social_twitter: this.state.social_twitter,
      social_instagram: this.state.social_instagram,
      social_youtube: this.state.social_youtube
    };

    const fullAddress =
      this.state.address +
      ", " +
      this.state.postcode +
      " " +
      this.state.city +
      ", " +
      this.state.state +
      ", " +
      this.state.country;

    const caption = (
      <Typography variant="caption">Click to toggle details</Typography>
    );

    return (
      <Paper className={classes.container} elevation="3">
        <Typography variant="display1" gutterBottom color="primary">
          Restaurant Profile
        </Typography>

        <List className={classes.formControl}>
          <Divider />

          {/* Name */}
          <ListItem divider>
            <ListItemText
              primary="Restaurant Name"
              secondary={this.state.restaurant_name}
            />
            <PopUp
              title={"Restaurant Name"}
              label="Name"
              triggered={this.handleChange("restaurant_name")}
            />
          </ListItem>

          {/* Alias */}
          <ListItem divider>
            <ListItemText
              primary="Restaurant Alias"
              secondary={this.state.alias}
            />
            <PopUp
              title={"Restaurant Alias"}
              label="Alias"
              triggered={this.handleChange("alias")}
            />
          </ListItem>

          {/* Phone */}
          <ListItem divider>
            <ListItemText primary="Phone Number" secondary={this.state.phone} />
            <PopUp
              title={"Restaurant Phone Number"}
              label="Phone Number"
              triggered={this.handleChange("phone")}
            />
          </ListItem>

          {/* Social Media */}
          <ListItem button onClick={this.onClick} divider>
            <ListItemText primary="Social Media Links" secondary={caption} />

            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          {/* List of Social Media */}
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem divider>
                <ListItemText
                  inset
                  primary="Facebook"
                  secondary={this.state.social_facebook}
                />
                <PopUp
                  title={"Facebook URL"}
                  label="Facebook"
                  triggered={this.handleChange("social_facebook")}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  inset
                  primary="Twitter"
                  secondary={this.state.social_twitter}
                />
                <PopUp
                  title={"Twitter URL"}
                  label="Twitter"
                  triggered={this.handleChange("social_twitter")}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  inset
                  primary="Instagram"
                  secondary={this.state.social_instagram}
                />
                <PopUp
                  title={"Instagram URL"}
                  label="Instagram"
                  triggered={this.handleChange("social_instagram")}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  inset
                  primary="Youtube"
                  secondary={this.state.social_youtube}
                />
                <PopUp
                  title={"Youtube URL"}
                  label="Youtube"
                  triggered={this.handleChange("social_youtube")}
                />
              </ListItem>
            </List>
          </Collapse>

          {/* Save Changes Button */}
          <ListItem className={classes.buttonSave} divider>
            <Verify
              data={restaurantData.manager_id}
              triggered={this.childTrigger(restaurantData)}
              redirect={() => this.props.history.push("/restaurant-profile")}
            />
          </ListItem>

          {/* Business Hours */}
          <ListItem button divider onClick={this.handleClickHours}>
            <ListItemText
              primary="Business Hours"
              secondary="Set Business Hours"
            />
          </ListItem>

          {/* Change Address */}
          <ListItem button divider onClick={this.handleClickChange}>
            <ListItemText primary="Change Address" secondary={fullAddress} />
          </ListItem>

          {/* Restaurant Tags */}
          <ListItem button divider onClick={this.handleClickTags}>
            <ListItemText
              primary="Restaurant Tags"
              secondary="Change your tags"
            />
          </ListItem>

          {/* Restaurant Image */}
          <ListItem button divider onClick={this.handleClickImage}>
            <ListItemText
              primary="Restaurant Image"
              secondary="Change your image"
            />
          </ListItem>
        </List>
      </Paper>
    );
  }
}

RestaurantProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(
  mapStateToProps,
  {
    getRestaurantProfile,
    editRestaurantProfile
  }
)(withStyles(styles)(RestaurantProfile));
