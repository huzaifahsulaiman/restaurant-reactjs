import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import Slide from "@material-ui/core/Slide";

const styles = theme => ({
  container: {
    width: "750px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "100px",
    paddingBottom: "50px",
    paddingTop: "25px"
  },
  formControl: {
    width: "100%"
  },
  dialogForm: {
    width: "100%"
  },
  button: {
    marginTop: "50px"
  },
  buttonIn: {
    width: "10%",
    height: "1px"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
  state = {
    open: false,
    temp: ""
  };

  handleSave = () => {
    const value = this.state.temp;
    this.props.triggered(value);
    this.handleClose();
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
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Edit
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>Set New {this.props.title}</DialogTitle>
          <DialogContent>
            <TextField
              value={this.state.temp}
              onChange={this.handleChange("temp")}
              type={this.props.type}
              className={classes.dialogForm}
              autoFocus
              margin="dense"
              label={this.props.label}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="raised" onClick={this.handleSave} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AlertDialogSlide);
