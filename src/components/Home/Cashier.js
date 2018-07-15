import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import CashierCard from "../Cards/CashierCard";
import { cashierDishes } from "../../store/actions/homeActions";
import isEmpty from "../../validation/isEmpty";

const styles = theme => ({
  root: {
    display: "flex",
    width: "75vw",
    maxWidth: 700,
    flexDirection: "column"
  }
});

class Cashier extends React.Component {
  state = {
    order: "",
    isCashierEmpty: true
  };

  componentDidMount() {
    const restaurant_id = {
      restaurant_id: this.props.id
    };

    this.props.cashierDishes(restaurant_id);
  }

  componentWillReceiveProps(nextProps) {
    const { cashier } = nextProps.home;
    // Check the existence of order in Cashier
    if (isEmpty(cashier)) {
      this.setState({
        order: cashier,
        isCashierEmpty: true
      });
    } else {
      this.setState({
        order: cashier,
        isCashierEmpty: false
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* show mapped CashierCard here */}
        {this.state.isCashierEmpty ? (
          <p>Empty</p>
        ) : (
          this.state.order.map(data => (
            <CashierCard
              key={data.order_id}
              restaurant_id={this.props.id}
              order_id={data.order_id}
              customer_name={data.customer_name}
              total_price={data.total_price}
              items={data.items}
            />
          ))
        )}
      </div>
    );
  }
}

Cashier.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(
  mapStateToProps,
  { cashierDishes }
)(withStyles(styles)(Cashier));
