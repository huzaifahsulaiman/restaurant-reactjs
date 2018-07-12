import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Footer from "./Footer";
import SideList from "./SideList";
import { logoutUser } from "../../store/actions/authActions";
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
  appBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  left: {
    display: "flex",
    alignItems: "center"
  },
  right: {
    display: "flex",
    alignItems: "center"
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "0 8px",
    ...theme.mixins.toolbar
  },
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

  handleClick = event => {
    event.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <div className={classes.drawerHeader}>
          <Divider />
          <SideList toggleDrawer={this.handleDrawerToggle} />
        </div>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar color="secondary">
          <Toolbar className={classes.appBar}>
            <div className={classes.left}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                FoodHub
              </Typography>
            </div>
            <div className={classes.right}>
              <Button
                onClick={this.handleClick}
                variant="raised"
                color="primary"
              >
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={this.state.mobileOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
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

export default connect(
  null,
  { logoutUser }
)(withStyles(styles, { withTheme: true })(ResponsiveDrawer));
