import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  getTags,
  getRestaurantTags,
  editRestaurantTags
} from "../../store/actions/restaurantActions";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

//************************************************************************

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "75vw",
    margin: "25px auto"
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
  }
});

// *************************************************************************

class Tag extends Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    tags: [],
    tag_1_id: "",
    tag_2_id: "",
    tag_3_id: ""
  };

  componentDidMount() {
    getTags().then(response => {
      this.setState({ tags: response });
    });
    getRestaurantTags(this.state.manager_id).then(response => {
      this.setState({
        tag_1_id: parseFloat(response.tag_1_id),
        tag_2_id: parseFloat(response.tag_2_id),
        tag_3_id: parseFloat(response.tag_3_id)
      });
    });
  }

  showTag = () =>
    this.state.tags.map((item, i) => (
      <MenuItem value={item.tag_id} key={item.tag_id}>
        {item.tag_name}
      </MenuItem>
    ));

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = () => event => {
    const data = {
      manager_id: this.state.manager_id,
      tag_1_id: this.state.tag_1_id,
      tag_2_id: this.state.tag_2_id,
      tag_3_id: this.state.tag_3_id
    };
    editRestaurantTags(data);
    this.props.history.push("/restaurant-profile");
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <Typography
          className={classes.title}
          variant="display1"
          color="primary"
          align="center"
        >
          Change Restaurant Tags
        </Typography>

        <FormControl className={classes.formControl}>
          <InputLabel>First</InputLabel>
          <Select
            value={this.state.tag_1_id}
            onChange={this.handleChange("tag_1_id")}
          >
            {this.showTag()}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Second</InputLabel>
          <Select
            value={this.state.tag_2_id}
            onChange={this.handleChange("tag_2_id")}
          >
            {this.showTag()}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Third</InputLabel>
          <Select
            value={this.state.tag_3_id}
            onChange={this.handleChange("tag_3_id")}
          >
            {this.showTag()}
          </Select>
        </FormControl>

        <Button
          onClick={this.handleSubmit()}
          variant="raised"
          className={classes.button}
          color="primary"
        >
          Save Changes
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default withStyles(styles)(Tag);
