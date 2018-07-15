import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import OrderDetails from "./OrderDetails";
import { orderHistory } from "../../store/actions/historyActions";
import isEmpty from "../../validation/isEmpty";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px"
  },

  title: {
    marginBottom: "25px"
  },

  container: {
    width: "80vw",
    [theme.breakpoints.up("md")]: {
      width: "750px"
    },
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "100px",
    paddingTop: "25px"
  }
});

class OrderHistory extends React.Component {
  state = {
    order_history: "",
    restaurant_id: localStorage.getItem("restaurant_id"),
    isHistoryEmpty: true,
    expanded: null
  };

  handleChange = fromChild => (event, expanded) => {
    this.setState({
      expanded: expanded ? fromChild : false
    });
  };

  componentDidMount() {
    const restaurant_id = {
      restaurant_id: this.state.restaurant_id
    };

    this.props.orderHistory(restaurant_id);
  }

  componentWillReceiveProps(nextProps) {
    const { order_history } = nextProps.history;
    //Check the existence of order in History
    if (isEmpty(order_history)) {
      this.setState({
        order: order_history,
        isHistoryEmpty: true
      });
    } else {
      this.setState({
        order_history: order_history,
        isHistoryEmpty: false
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <Typography
          className={classes.title}
          variant="display2"
          color="primary"
        >
          Order History
        </Typography>

        <div className={classes.container}>
          {/* show mapped HistoryCard here */}
          {this.state.isHistoryEmpty ? (
            <p>Empty</p>
          ) : (
            this.state.order_history.map(data => (
              <OrderDetails
                key={data.order_id}
                order_id={data.order_id}
                customers_name={data.customers_name}
                total_price={data.total_price}
                childHandleChange={this.handleChange}
                expanded={expanded}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  history: state.history
});

export default connect(
  mapStateToProps,
  { orderHistory }
)(withStyles(styles)(OrderHistory));
