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
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Slide from "@material-ui/core/Slide";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { addDish } from "../../store/actions/menuActions";

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

class AddMenu extends React.Component {
  state = {
    open: false,
    selected_id: "",
    food_name: "",
    description: "",
    price: "",
    note: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickChange = event => {
    this.setState({
      selected_id: event.target.value
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
      selected_id: "",
      food_name: "",
      description: "",
      price: "",
      note: ""
    });
  };

  handleConfirm = () => {
    if (this.state.selected_id && this.state.food_name && this.state.price) {
      const addMenuData = {
        category_id: this.state.selected_id,
        restaurant_id: this.props.restaurant_id,
        food_name: this.state.food_name,
        description: this.state.description,
        price: this.state.price,
        note: this.state.note
      };

      console.log(addMenuData);

      addDish(addMenuData);

      this.handleClose();
    } else {
      alert("Not enough information");
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
          <AddIcon className={classes.icon} />
          Add Menu
        </Button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle>{"Add Menu"}</DialogTitle>
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
              autoFocus
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
              autoFocus
              onChange={this.handleChange("price")}
              className={classes.textField}
              value={this.state.price}
              type="text"
              label="Price"
            />
            {/* <FormControl fullWidth className={classes.margin}>
              <InputLabel>Price</InputLabel>
              <Input
                value={this.state.price}
                onChange={this.handleChange("price")}
                startAdornment={
                  <InputAdornment position="start">RM</InputAdornment>
                }
              />
            </FormControl> */}
            <FormControl className={classes.textField}>
              <InputLabel>Choose Category</InputLabel>
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
              onChange={this.handleChange("note")}
              className={classes.textField}
              value={this.state.note}
              type="text"
              label="Note"
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
              onClick={this.handleConfirm}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(AddMenu);
