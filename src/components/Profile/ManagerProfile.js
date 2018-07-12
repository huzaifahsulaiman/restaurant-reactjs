import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PopUp from "./PopUp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import Verify from "../../components/Auth/Verify";
import {
  getManagerProfile,
  editManagerProfile
} from "../../store/actions/managerActions";

const styles = theme => ({
  container: {
    width: "75vw",
    maxWidth: 700,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px auto 100px",
    paddingBottom: "50px",
    paddingTop: "25px"
  },
  formControl: {
    width: "100%"
  },
  dialogForm: {
    width: "100%"
  },
  button: {
    marginTop: "50px"
  },
  buttonIn: {
    width: "10%",
    height: "1px"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  save: {
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center"
  }
});

class ManagerProfile extends React.Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    name: "",
    email: "",
    phone: ""
  };

  handleChange = name => fromChild => {
    this.setState({
      [name]: fromChild
    });
  };

  handleClick = () => {
    this.props.history.push("/manager-profile/change-password");
  };

  childTrigger = name => fromChild => {
    this.props.editManagerProfile(name, fromChild);
  };

  componentDidMount() {
    const userData = {
      manager_id: this.state.manager_id
    };
    this.props.getManagerProfile(userData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.manager) {
      const { manager } = nextProps;

      this.setState({
        name: manager.name,
        email: manager.email,
        phone: manager.phone
      });
    }
  }

  render() {
    const { classes } = this.props;
    const managerData = {
      manager_id: this.state.manager_id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    return (
      <Paper className={classes.container} elevation="3">
        <Typography variant="display1" gutterBottom color="primary">
          Manager Profile
        </Typography>

        <List className={classes.formControl}>
          <Divider />

          {/* Name */}
          <ListItem divider>
            <ListItemText primary="Manager Name" secondary={this.state.name} />
            <PopUp
              title={"Manager's Name"}
              label="Manager's Name"
              triggered={this.handleChange("name")}
            />
          </ListItem>

          {/* Email */}
          <ListItem divider>
            <ListItemText
              primary="Manager Email"
              secondary={this.state.email}
            />
            <PopUp
              title={"Manager's Email"}
              label="Manager's Email"
              triggered={this.handleChange("email")}
            />
          </ListItem>

          {/* Phone */}
          <ListItem divider>
            <ListItemText
              primary="Manager Phone Number"
              secondary={this.state.phone}
            />
            <PopUp
              title={"Manager's Phone Number"}
              label="Manager's Phone Number"
              triggered={this.handleChange("phone")}
            />
          </ListItem>

          <ListItem disableGutters divider className={classes.save}>
            <Verify
              data={managerData.manager_id}
              triggered={this.childTrigger(managerData)}
              redirect={() => this.props.history.push("/manager-profile")}
            />
          </ListItem>
          <ListItem button divider onClick={this.handleClick}>
            <ListItemText primary="Change password" />
          </ListItem>
        </List>
      </Paper>
    );
  }
}

ManagerProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  manager: state.manager
});

export default connect(
  mapStateToProps,
  {
    getManagerProfile,
    editManagerProfile
  }
)(withStyles(styles)(ManagerProfile));
