import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { orderHistoryDishesDetail } from "../../store/actions/historyActions";

const styles = theme => ({
  date: {
    display: "flex",
    width: "20%",
    alignItems: "center"
  },
  name: {
    display: "flex",
    width: "30%",
    alignItems: "center"
  },
  orderID: {
    display: "flex",
    width: "25%",
    alignItems: "center"
  },
  priceContainer: {
    display: "flex",
    width: "25%",
    alignItems: "center",
    justifyContent: "center"
  },
  panel: {
    width: "80vw",
    padding: "10px 0px",
    [theme.breakpoints.up("md")]: {
      width: "750px"
    }
  },
  list: {
    width: "100%"
  },
  summary: {
    padding: "20px auto"
  }
});

class OrderDetails extends React.Component {
  state = {
    dishes: "",
    isDetailsEmpty: true,
    key: 0
  };
  handleClick = () => {
    const order_id = {
      order_id: this.props.order_id
    };
    orderHistoryDishesDetail(order_id).then(response => {
      if (response.status === "200") {
        this.setState({
          dishes: response.history_items,
          isDetailsEmpty: false
        });
      } else {
        this.setState({
          dishes: response.history_items,
          isDetailsEmpty: true
        });
      }
    });
  };

  render() {
    const { classes, expanded } = this.props;

    return (
      <ExpansionPanel
        expanded={expanded === this.props.order_id}
        onChange={this.props.childHandleChange(this.props.order_id)}
        onClick={this.handleClick}
        className={classes.panel}
      >
        <ExpansionPanelSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
        >
          <div className={classes.date}>
            <Typography variant="caption">
              Date: 01-01-1995 {this.props.date}
            </Typography>
          </div>
          <div className={classes.name}>
            <Typography variant="subheading">
              {this.props.customers_name}
            </Typography>
          </div>
          <div className={classes.orderID}>
            <Typography variant="caption">
              Order ID: {this.props.order_id}
            </Typography>
          </div>
          <div className={classes.priceContainer}>
            <Typography variant="subheading">
              Total: RM {this.props.total_price}
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.list}>
            {this.state.isDetailsEmpty ? (
              <p>Empty</p>
            ) : (
              <div>
                <Divider />
                {this.state.dishes.map(data => (
                  <ListItem dense disableGutters divider>
                    <ListItemText
                      primary={data.dish_name}
                      secondary={data.dish_price}
                    />
                  </ListItem>
                ))}
              </div>
            )}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

OrderDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrderDetails);
