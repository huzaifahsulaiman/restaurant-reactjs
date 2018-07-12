import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Kitchen from "./Kitchen";
import Waiter from "./Waiter";
import Cashier from "./Cashier";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  tab: {
    margin: "20px auto",
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  indicator: {
    height: "10%",
    borderRadius: "25px"
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "100px"
  }
});

class Home extends React.Component {
  state = {
    value: "1",
    restaurant_id: localStorage.getItem("restaurant_id")
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.tab}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            classes={{ indicator: classes.indicator }}
          >
            <Tab value="1" label="Kitchen" />
            <Tab value="2" label="Waiter" />
            <Tab value="3" label="Cashier" />
          </Tabs>
        </Paper>
        <div className={classes.tabContainer}>
          {value === "1" && <Kitchen id={this.state.restaurant_id} />}
          {value === "2" && <Waiter id={this.state.restaurant_id} />}
          {value === "3" && <Cashier id={this.state.restaurant_id} />}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
