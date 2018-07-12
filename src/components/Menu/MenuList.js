import React, { Component } from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import EditMenu from "./EditMenu";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  card: {
    display: "flex",

    width: "75vw",
    alignSelf: "center",
    paddingTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  },
  left: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    marginLeft: theme.spacing.unit * 5
  },
  right: {
    width: "25%",
    display: "flex",

    justifyContent: "space-between",
    marginRight: theme.spacing.unit * 5
  },
  rightItem: {
    alignSelf: "center",
    margin: theme.spacing.unit
  }
});

class Menu extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <div className={classes.left}>
            <Typography variant="subheading" gutterBottom>
              {this.props.name}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {this.props.des}
            </Typography>
          </div>
          <div className={classes.right}>
            <Typography
              className={classes.rightItem}
              variant="body1"
              gutterBottom
            >
              RM {this.props.price}
            </Typography>

            <EditMenu
              dish_id={this.props.dish_id}
              food_name={this.props.name}
              description={this.props.des}
              price={this.props.price}
              data={this.props.data}
              category_id={this.props.category_id}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Menu);
