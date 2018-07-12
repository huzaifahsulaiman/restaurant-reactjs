import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Slide from "@material-ui/core/Slide";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  deleteCategory,
  editCategory,
  fetchCategories
} from "../../store/actions/menuActions";
import { MenuItem } from "@material-ui/core";

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

class EditCategory extends React.Component {
  state = {
    open: false,
    selected_id: "",
    category_new_name: ""
  };

  handleChange = event => {
    this.setState({
      category_new_name: event.target.value
    });
  };

  handleClickChange = event => {
    this.setState({
      selected_id: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, category_new_name: "", selected_id: "" });
  };

  handleRefresh = () => {
    const restaurant_id = {
      restaurant_id: this.props.restaurant_id
    };

    this.props.fetchCategories(restaurant_id);
  };

  handleDelete = () => {
    if (this.state.selected_id) {
      const deleteCategoryData = {
        category_id: this.state.selected_id
      };

      deleteCategory(deleteCategoryData).then(response => {
        if (response.status === "200") {
          this.handleRefresh();
        }
      });

      this.handleClose();
    } else {
      alert("Please select the category you want to delete");
    }
  };

  handleConfirm = () => {
    if (this.state.selected_id && this.state.category_new_name) {
      const editData = {
        category_id: this.state.selected_id,
        category_new_name: this.state.category_new_name
      };

      editCategory(editData).then(response => {
        if (response.status === "200") {
          this.handleRefresh();
        }
      });

      this.handleClose();
    } else {
      alert(
        "Please select the category you want to edit and enter the new name"
      );
    }
  };

  render() {
    const { classes } = this.props;
    let showCategory = <MenuItem>No Available Data</MenuItem>;

    if (this.props.data) {
      showCategory = this.props.data.map(data => (
        <MenuItem value={data.category_id}>{data.category_name}</MenuItem>
      ));
    }

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          style={{ borderRadius: "25px" }}
          onClick={this.handleClickOpen}
        >
          <EditIcon className={classes.icon} />
          Edit Categories
        </Button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle>{"Edit Category"}</DialogTitle>
          <DialogContent>
            <FormControl className={classes.textField}>
              <InputLabel>Choose Category </InputLabel>
              <Select
                value={this.state.selected_id}
                onChange={this.handleClickChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {showCategory}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              onChange={this.handleChange}
              className={classes.textField}
              value={this.state.category_new_name}
              type="text"
              label="Category New Name"
            />
          </DialogContent>

          <DialogActions
            classes={{
              root: classes.buttons
            }}
          >
            <DialogActions>
              <Button
                variant="raised"
                onClick={this.handleDelete}
                className={classes.errorButton}
                onClick={this.handleDelete}
              >
                Delete
              </Button>
            </DialogActions>
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
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchCategories }
)(withStyles(styles)(EditCategory));
