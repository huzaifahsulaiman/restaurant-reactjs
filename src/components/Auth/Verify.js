import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  textField: {
    width: "100%"
  }
});

class Verify extends React.Component {
  state = {
    open: false,
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, password: "" });
  };

  handleConfirm = () => {
    const verifyData = {
      manager_id: this.props.data,
      password: this.state.password
    };
    this.props.triggered(verifyData);
    this.handleClose();
    this.props.redirect();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="raised" color="primary" onClick={this.handleClickOpen}>
          Save Changes
        </Button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Verify your account"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Typography variant="caption">
                Please enter your password
              </Typography>
            </DialogContentText>
            <TextField
              autoFocus
              onChange={this.handleChange("password")}
              className={classes.textField}
              value={this.state.password}
              margin="dense"
              type="password"
              label="Password"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="raised"
              onClick={this.handleConfirm}
              color="primary"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Verify);
