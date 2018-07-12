import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { loginUser } from "../../store/actions/authActions";

//************************************************************************

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 200
  }
});

// *************************************************************************

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert("Success");
    const userData = {
      email: this.state.email
    };
    //this.props.loginUser(userData);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    // const { errors } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="email"
            name="email"
            label="Enter Your Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
          />
        </form>
        <Button
          onClick={this.handleSubmit}
          variant="outlined"
          className={classes.button}
          color="primary"
        >
          SUBMIT
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
});

export default connect(mapStateToProps, { loginUser })(
  withStyles(styles)(Login)
);
