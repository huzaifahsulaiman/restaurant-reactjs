import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {
  kitchenItemReady,
  kitchenDishes
} from "../../store/actions/homeActions";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  details: {
    display: "flex",
    width: "75%",
    flexDirection: "column",
    margin: theme.spacing.unit * 2
  },
  buttonContainer: {
    display: "flex",
    width: "25%",
    justifyContent: "center",
    alignItems: "center"
  }
});

class KitchenCard extends React.Component {
  state = {
    order_id: this.props.order_id,
    item_id: this.props.item_id,
    dish_name: this.props.dish_name
  };

  handleClick = () => {
    const item_id = {
      item_id: this.state.item_id
    };

    kitchenItemReady(item_id).then(response => {
      if (response.status === "200") {
        const restaurant_id = {
          restaurant_id: this.props.restaurant_id
        };

        this.props.kitchenDishes(restaurant_id);
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <Typography variant="caption">
            Order ID: {this.state.order_id}
          </Typography>
          <Typography variant="subheading">{this.state.dish_name}</Typography>
        </div>
        <div className={classes.buttonContainer}>
          <Button onClick={this.handleClick} variant="outlined" color="primary">
            Ready
          </Button>
        </div>
      </Card>
    );
  }
}

KitchenCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { kitchenDishes }
)(withStyles(styles)(KitchenCard));
