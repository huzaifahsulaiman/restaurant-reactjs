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
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Slide from "@material-ui/core/Slide";
import { MenuItem } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { deleteDish, editDish } from "../../store/actions/menuActions";

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

class EditMenu extends React.Component {
  state = {
    open: false,
    dish_id: this.props.dish_id,
    selected_id: this.props.category_id,
    food_name: this.props.food_name,
    description: this.props.description,
    price: this.props.price,
    note: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
    this.setState({
      open: false,
      selected_id: "",
      food_name: this.props.food_name,
      description: this.props.description,
      price: this.props.price,
      note: ""
    });
  };

  handleConfirm = () => {
    if (this.state.selected_id) {
      const editDishData = {
        dish_id: this.state.dish_id,
        category_id: this.state.selected_id,
        food_name: this.state.food_name,
        description: this.state.description,
        price: this.state.price,
        note: this.state.note
      };

      editDish(editDishData);

      this.handleClose();
    } else {
      alert("Please select the category");
    }
  };

  handleDelete = () => {
    const deleteDishData = {
      dish_id: this.state.dish_id
    };
    deleteDish(deleteDishData);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    let showCategory = "";

    if (this.props.data) {
      showCategory = this.props.data.map(data => (
        <MenuItem value={data.category_id}>{data.category_name}</MenuItem>
      ));
    }

    return (
      <div>
        <IconButton
          color="primary"
          className={classes.rightItem}
          aria-label="Edit Menu"
          onClick={this.handleClickOpen}
        >
          <EditIcon />
        </IconButton>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle>{"Edit Menu"}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onChange={this.handleChange("food_name")}
              className={classes.textField}
              value={this.state.food_name}
              type="text"
              label="Food Name"
            />
            <TextField
              multiline
              onChange={this.handleChange("description")}
              className={classes.textField}
              value={this.state.description}
              inputProps={{ maxlength: 100 }}
              type="text"
              rows="4"
              label="Food Description"
            />
            <TextField
              onChange={this.handleChange("price")}
              className={classes.textField}
              value={this.state.price}
              type="text"
              label="Price"
            />
            <FormControl className={classes.textField}>
              <InputLabel>Category</InputLabel>
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
              onChange={this.handleChange("note")}
              className={classes.textField}
              value={this.state.note}
              type="text"
              label="Note"
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

export default withStyles(styles)(EditMenu);
