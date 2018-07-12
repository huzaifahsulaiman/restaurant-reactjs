import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Footer from "./Footer";
import SideList from "./SideList";
// import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,

    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },

  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    flexDirection: "column"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minHeight: "100vh"
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <main className={classes.main}>
            <div className={classes.toolbar} />
            {this.props.children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
