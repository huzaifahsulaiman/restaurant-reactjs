import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { TimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  container: {
    width: "500px",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "100px"
    // marginRight: "10",
    // marginLeft: "10",
    // paddingLeft: "15",
    // paddingRight: "15"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "350px"
  }
});

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      restaurantName: event.target.value,
      restaurantAlias: event.target.value,
      address: event.target.value,
      city: event.target.value,
      state: event.target.value,
      counrty: event.target.value,
      phone: event.target.value,
      hours: event.target.value,
      email: event.target.value,
      password: event.target.value
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container} elevation="3">
        <Typography variant="display1" color="secondary" noWrap>
          Edit Profile
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel>Restaurant name</InputLabel>
          <Input
            id="restaurantName"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Restaurant alias</InputLabel>
          <Input
            id="restaurantAlias"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Address</InputLabel>
          <Input
            id="address"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>City</InputLabel>
          <Select id="city" value={this.state.value} onChange={this.onChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>State</InputLabel>
          <Select
            id="state"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Country</InputLabel>
          <Select
            id="country"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Phone no.</InputLabel>
          <Input id="phone" value={this.state.value} onChange={this.onChange} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>email</InputLabel>
          <Input
            type="email"
            id="email"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>password</InputLabel>
          <Input
            id="password"
            type="password"
            value={this.state.value}
            onChange={this.onChange}
          />
        </FormControl>
      </Paper>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfile);
