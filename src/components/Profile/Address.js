import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import Verify from "../../components/Auth/Verify";
import {
  editRestaurantAddress,
  getRestaurantProfile,
  getCountryList,
  getStateList,
  getCityList
} from "../../store/actions/restaurantActions";
import { MenuItem } from "material-ui";

//************************************************************************

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "80vw"
  },
  title: {
    marginTop: "25px"
  },
  button: {
    display: "block",
    marginTop: "50px",
    marginBottom: "25px",
    margin: "auto"
  },
  formControl: {
    width: "80%",
    margin: "auto"
  },
  save: {
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center"
  }
});

// *************************************************************************

class NewPassword extends Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    address: "",
    postcode: "",
    countries: [],
    states: [],
    cities: [],
    country_id: "",
    state_id: "",
    city_id: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClick = name => event => {
    for (var i in name) {
      this.setState({
        [name[i]]: ""
      });
    }
  };

  childTrigger = name => fromChild => {
    this.props.editRestaurantAddress(name, fromChild);
  };

  componentDidMount() {
    const userData = {
      manager_id: this.state.manager_id
    };
    this.props.getRestaurantProfile(userData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurant) {
      const { restaurant } = nextProps;

      this.setState({
        restaurant_name: restaurant.restaurant_name,
        alias: restaurant.alias,
        phone: restaurant.phone,
        address: restaurant.address,
        city: restaurant.city,
        city_id: parseFloat(restaurant.city_id),
        state: restaurant.state,
        state_id: parseFloat(restaurant.state_id),
        country: restaurant.country,
        country_id: parseFloat(restaurant.country_id),
        postcode: restaurant.postcode,
        social_facebook: restaurant.social_facebook,
        social_twitter: restaurant.social_twitter,
        social_instagram: restaurant.social_instagram,
        social_youtube: restaurant.social_youtube
      });
    }

    getCountryList().then(response => {
      this.setState({
        countries: response
      });
    });

    if (this.state.state_id !== "") {
      getCityList(this.state.state_id).then(response => {
        this.setState({ cities: response });
      });
    }

    if (this.state.country_id !== "") {
      getStateList(this.state.country_id).then(response => {
        this.setState({ states: response });
      });
    }
  }

  componentDidUpdate() {}

  showCountries = () =>
    this.state.countries.map((item, i) => (
      <MenuItem value={item.id} key={item.id} name={item.name}>
        {item.name}
      </MenuItem>
    ));

  showStates = () =>
    this.state.states.map((item, i) => (
      <MenuItem value={item.id} key={item.id}>
        {item.name}
      </MenuItem>
    ));

  showCities = () =>
    this.state.cities.map((item, i) => (
      <MenuItem value={item.id} key={item.id}>
        {item.name}
      </MenuItem>
    ));

  render() {
    // const { errors } = this.state;
    const { classes } = this.props;
    const addressData = {
      manager_id: this.state.manager_id,
      address: this.state.address,
      city_id: this.state.city_id,
      state_id: this.state.state_id,
      country_id: this.state.country_id,
      postcode: this.state.postcode
    };

    return (
      <Paper className={classes.container}>
        <Typography
          className={classes.title}
          variant="display1"
          color="primary"
          align="center"
        >
          Change Address
        </Typography>
        <TextField
          className={classes.formControl}
          value={this.state.address}
          onChange={this.handleChange("address")}
          label="Street"
        />
        <TextField
          className={classes.formControl}
          value={this.state.postcode}
          onChange={this.handleChange("postcode")}
          label="Postcode"
        />

        <FormControl className={classes.formControl}>
          <InputLabel>Country</InputLabel>
          <Select
            value={this.state.country_id}
            onChange={this.handleChange("country_id")}
            onClick={this.handleClick(["state_id", "city_id"])}
          >
            {/* {this.showCountries()} */}
            {this.showCountries()}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>State</InputLabel>
          <Select
            value={this.state.state_id}
            onChange={this.handleChange("state_id")}
            onClick={this.handleClick(["city_id"])}
          >
            {/* {this.showStates()} */}
            {this.showStates()}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>City</InputLabel>
          <Select
            value={this.state.city_id}
            onChange={this.handleChange("city_id")}
            onClick={this.handleClick([])}
          >
            {/* {this.showCities()} */}
            {this.showCities()}
          </Select>
        </FormControl>
        <List>
          <ListItem disableGutters divider className={classes.save}>
            <Verify
              data={addressData.manager_id}
              triggered={this.childTrigger(addressData)}
              redirect={() => this.props.history.push("/restaurant-profile")}
            />
          </ListItem>
        </List>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(
  mapStateToProps,
  { editRestaurantAddress, getRestaurantProfile }
)(withStyles(styles)(NewPassword));
