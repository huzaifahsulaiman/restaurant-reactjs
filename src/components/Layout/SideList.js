import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 1
  }
});

class SideList extends React.Component {
  state = { open: false };

  handleRedirect = link => () => {
    this.props.history.push(link);
    this.props.toggleDrawer();
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleRedirect("/")}>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick={this.handleRedirect("/menu")}>
            <ListItemText primary="Menu" />
          </ListItem>

          <ListItem button>
            <ListItemText
              primary="History"
              onClick={this.handleRedirect("/order-history")}
            />
          </ListItem>

          <ListItem button onClick={this.handleClick}>
            <ListItemText primary="Profile" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="nav" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={this.handleRedirect("/restaurant-profile")}
              >
                <ListItemText inset secondary="Restaurant" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={this.handleRedirect("/manager-profile")}
              >
                <ListItemText inset secondary="Manager" />
              </ListItem>
            </List>
          </Collapse>
          <Divider light />
          <ListItem button onClick={this.handleRedirect("/feedback")}>
            <ListItemText primary="Feedback" />
          </ListItem>

          <ListItem button>
            <ListItemText
              primary="Legal"
              onClick={this.handleRedirect("/legal")}
            />
          </ListItem>
        </List>
      </div>
    );
  }
}
SideList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(SideList));
