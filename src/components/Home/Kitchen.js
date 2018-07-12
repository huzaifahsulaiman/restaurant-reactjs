import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import KitchenCard from "../Cards/KitchenCard";
import { kitchenDishes } from "../../store/actions/homeActions";
import isEmpty from "../../validation/isEmpty";

const styles = theme => ({
  root: {
    display: "flex",
    width: "75vw",
    maxWidth: 700,
    flexDirection: "column"
  }
});

class Kitchen extends React.Component {
  state = {
    dishesList: "",
    isKitchenEmpty: true
  };

  componentDidMount() {
    const restaurant_id = {
      restaurant_id: this.props.id
    };

    this.props.kitchenDishes(restaurant_id);
  }

  componentWillReceiveProps(nextProps) {
    const { kitchen } = nextProps.home;
    //Check the existence of content in Kitchen
    if (isEmpty(kitchen)) {
      this.setState({
        dishesList: kitchen,
        isKitchenEmpty: true
      });
    } else {
      this.setState({
        dishesList: kitchen,
        isKitchenEmpty: false
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* show mapped KitchenCard here */}
        {this.state.isKitchenEmpty ? (
          <p>Empty</p>
        ) : (
          this.state.dishesList.map(data => (
            <KitchenCard
              item_id={data.item_id}
              order_id={data.order_id}
              dish_name={data.dish_name}
              restaurant_id={this.props.id}
            />
          ))
        )}
      </div>
    );
  }
}

Kitchen.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  home: state.home
});

export default connect(
  mapStateToProps,
  { kitchenDishes }
)(withStyles(styles)(Kitchen));
