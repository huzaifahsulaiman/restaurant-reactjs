import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

import Slide from "@material-ui/core/Slide";

import { addCategory, fetchCategories } from "../../store/actions/menuActions";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  textField: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  buttons: {
    justifyContent: "space-between",
    marginTop: "25px"
  },
  errorButton: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    }
  }
});

class AddCategory extends React.Component {
  state = {
    open: false,
    category_name: ""
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
    this.setState({ open: false, category_name: "" });
  };

  handleConfirm = () => {
    if (this.state.category_name) {
      const addData = {
        category_name: this.state.category_name,
        restaurant_id: this.props.restaurant_id
      };

      const restaurant_id = {
        restaurant_id: this.props.restaurant_id
      };

      addCategory(addData).then(response => {
        if (response.status === "200") {
          this.props.fetchCategories(restaurant_id);
        }
      });

      this.handleClose();
    } else {
      alert("Please enter desired new category name");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          style={{ borderRadius: "25px" }}
          onClick={this.handleClickOpen}
        >
          <AddIcon className={classes.icon} />
          Add Categories
        </Button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle>{"Add Category"}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus={true}
              onChange={this.handleChange("category_name")}
              className={classes.textField}
              value={this.state.category_name}
              type="text"
              label="Category Name"
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
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchCategories }
)(withStyles(styles)(AddCategory));
