import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import { orderHistoryDishesDetail } from "../../store/actions/historyActions";

//************************************************************************

const styles = theme => ({
  container: {
    display: "flex",
    margin: "25px auto 150px",
    flexDirection: "column",
    justifyContent: "center",
    width: "75vw",
    maxWidth: 700
  },
  header: {
    display: "flex",
    backgroundColor: theme.palette.primary.main
  },
  details: {
    display: "flex",
    width: "75%",
    flexDirection: "column"
  },
  buttonContainer: {
    display: "flex",
    width: "25%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "8px"
  }
});

// *************************************************************************

class OrderDetails extends Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    order_id: "",
    totalPrice: "",
    date: "",
    order_status: "",
    disabled: false
  };

  componentDidMount() {
    const idFromURL = window.location.pathname;
    console.log(idFromURL);
    const id = idFromURL.split("order-id:");
    const order_id = {
      order_id: id[1]
    };

    orderHistoryDishesDetail(order_id).then(response => {
      this.setState({
        order_id: id[1],
        totalPrice: response.total_price
      });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.container}>
        <Paper elevation="3" className={classes.header}>
          <List dense disablePadding className={classes.details}>
            <ListItem>
              <ListItemText>
                <Typography gutterBottom variant="body1" color="secondary">
                  Order ID: {this.state.order_id}
                </Typography>
                <Typography gutterBottom variant="display1" color="secondary">
                  Total: RM {this.state.totalPrice}
                </Typography>
                <Typography variant="caption" color="secondary">
                  Date of Transaction: {this.state.date}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          {/* <div className={classes.buttonContainer}>
            <Button variant="raised" color="secondary">
              Pay
            </Button>
            <Typography variant="caption" color="secondary">
              Status: {this.state.order_status}
            </Typography>
          </div> */}
        </Paper>
        <List
          disablePadding
          subheader={<ListSubheader>Order Details</ListSubheader>}
        >
          <Divider />
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText primary="Nasi Kerabu Celop Tepung" />
            <Typography variant="body1">RM 12.00</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText>
              <Typography variant="headline">Total</Typography>
            </ListItemText>
            <Typography variant="title">RM 25.00</Typography>
          </ListItem>
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(OrderDetails);
