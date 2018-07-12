import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "10px"
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
    justifyContent: "space-around"
  },

  list: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    }
  }
});

class HistoryCard extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <Card onClick={this.handleClick} className={classes.root}>
        <List dense disablePadding className={classes.details}>
          <Link
            to={`/order-history/order-details:${this.props.order_id}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem classes={{ root: classes.list }} button>
              <ListItemText>
                <Typography gutterBottom variant="caption">
                  {this.props.customers_name}
                </Typography>
                <Typography gutterBottom variant="subheading">
                  Total: RM {this.props.total_price}
                </Typography>
                <Typography variant="caption" color="primary">
                  Click for details
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
        </List>

        <div className={classes.buttonContainer}>
          <Typography gutterBottom variant="caption">
            Order ID: {this.props.order_id}
          </Typography>
          <Typography variant="caption">Date: {this.props.date}</Typography>
        </div>
      </Card>
    );
  }
}

HistoryCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HistoryCard);
