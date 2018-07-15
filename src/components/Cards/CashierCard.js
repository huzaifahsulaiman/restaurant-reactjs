import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import {
  cashierOrderPaid,
  cashierDishes
} from "../../store/actions/homeActions";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: 0
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
    alignItems: "center"
  },

  list: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    }
  }
});

class CashierCard extends React.Component {
  state = {
    order_id: this.props.order_id
  };

  handleClick = () => {
    const order_id = {
      order_id: this.state.order_id
    };

    cashierOrderPaid(order_id).then(response => {
      if (response.status === "200") {
        const restaurant_id = {
          restaurant_id: this.props.restaurant_id
        };

        this.props.cashierDishes(restaurant_id);
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <List dense disablePadding className={classes.details}>
          <ListItem classes={{ root: classes.list }} button>
            <ListItemText>
              <Typography gutterBottom variant="caption">
                Order ID: {this.props.order_id}
              </Typography>
              <Typography gutterBottom variant="subheading">
                Total: RM {this.props.total_price}
              </Typography>
              <Typography variant="caption" color="primary">
                Click for details
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <div className={classes.buttonContainer}>
          <Button onClick={this.handleClick} variant="outlined" color="primary">
            Pay
          </Button>
        </div>
      </Card>
    );
  }
}

CashierCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { cashierDishes }
)(withStyles(styles)(CashierCard));
