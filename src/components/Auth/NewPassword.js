import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { editManagerPassword } from "../../store/actions/managerActions";

//************************************************************************

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
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
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 200
  }
});

// *************************************************************************

class NewPassword extends Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    old_password: "",
    password_1: "",
    password_2: ""
  };

  handleSubmit = () => {
    const userData = {
      manager_id: this.state.manager_id,
      old_password: this.state.old_password,
      password_1: this.state.password_1,
      password_2: this.state.password_2
    };
    console.log(userData);
    this.props.editManagerPassword(userData);

    this.props.history.push("/manager-profile");
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    // const { errors } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <Typography
          className={classes.title}
          variant="display1"
          color="primary"
          align="center"
        >
          Change Password
        </Typography>
        <TextField
          id="old"
          type="password"
          label="Current Password"
          className={classes.textField}
          value={this.state.old_password}
          onChange={this.handleChange("old_password")}
          margin="normal"
        />
        <TextField
          id="password_1"
          type="password"
          label="New Password"
          className={classes.textField}
          value={this.state.password_1}
          onChange={this.handleChange("password_1")}
          margin="normal"
        />
        <TextField
          id="password_2"
          type="password"
          label="Confirm New Password"
          className={classes.textField}
          value={this.state.password_2}
          onChange={this.handleChange("password_2")}
          margin="normal"
        />

        <Button
          onClick={this.handleSubmit}
          variant="raised"
          className={classes.button}
          color="primary"
        >
          RESET
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(
  mapStateToProps,
  { editManagerPassword }
)(withStyles(styles)(NewPassword));
