import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import WaiterCard from "../Cards/WaiterCard";
import { waiterDishes } from "../../store/actions/homeActions";
import isEmpty from "../../validation/isEmpty";

const styles = theme => ({
  root: {
    display: "flex",
    width: "75vw",
    maxWidth: 700,
    flexDirection: "column"
  }
});

class Waiter extends React.Component {
  state = {
    dishesList: "",
    isWaiterEmpty: true
  };

  componentDidMount() {
    const restaurant_id = {
      restaurant_id: this.props.id
    };

    this.props.waiterDishes(restaurant_id);
  }

  componentWillReceiveProps(nextProps) {
    const { waiter } = nextProps.home;
    // Check the existence of content of Waiter
    if (isEmpty(waiter)) {
      this.setState({
        dishesList: waiter,
        isWaiterEmpty: true
      });
    } else {
      this.setState({
        dishesList: waiter,
        isWaiterEmpty: false
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* show mapped KitchenCard here */}
        {this.state.isWaiterEmpty ? (
          <p>Empty</p>
        ) : (
          this.state.order.map(data => (
            <WaiterCard
              restaurant_id={this.props.id}
              item_id={data.item_id}
              order_id={data.order_id}
              dish_name={data.dish_name}
            />
          ))
        )}
      </div>
    );
  }
}

Waiter.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(
  mapStateToProps,
  { waiterDishes }
)(withStyles(styles)(Waiter));
