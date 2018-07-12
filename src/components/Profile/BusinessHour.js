import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "25px auto 150px",
    width: "75vw"
  },
  title: {
    margin: "25px auto 50px"
  },
  panel: {
    width: "100%"
  },
  details: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },

  action: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: "50px auto 25px"
  }
});

class BusinessHours extends Component {
  state = {
    disabled1: false,
    disabled2: false,
    disabled3: false,
    disabled4: false,
    disabled5: false,
    disabled6: false,
    disabled7: false,
    monOpen: "",
    monClose: "",
    monStatus: "",
    tueOpen: "",
    tueClose: "",
    tueStatus: "",
    wedOpen: "",
    wedClose: "",
    wedStatus: "",
    thuOpen: "",
    thuClose: "",
    thuStatus: "",
    friOpen: "",
    friClose: "",
    friStatus: "",
    satOpen: "",
    satClose: "",
    satStatus: "",
    sunOpen: "",
    sunClose: "",
    sunStatus: "",
    expanded: null
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleTick = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  handlePanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Paper className={classes.container}>
        <Typography
          className={classes.title}
          variant="display1"
          color="primary"
        >
          Change Business Hours
        </Typography>
        {/* Monday ***************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel1"}
          onChange={this.handlePanel("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Monday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled1}
                  onChange={this.handleTick("disabled1")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.monOpen}
                disabled={this.state.disabled1}
                onChange={this.handleChange("monOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.monClose}
                disabled={this.state.disabled1}
                onChange={this.handleChange("monClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Tuesday **************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel2"}
          onChange={this.handlePanel("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Tuesday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled2}
                  onChange={this.handleTick("disabled2")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.tueOpen}
                disabled={this.state.disabled2}
                onChange={this.handleChange("tueOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.tueClose}
                disabled={this.state.disabled2}
                onChange={this.handleChange("tueClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Wednesday ************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel3"}
          onChange={this.handlePanel("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Wednesday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled3}
                  onChange={this.handleTick("disabled3")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.wedOpen}
                disabled={this.state.disabled3}
                onChange={this.handleChange("wedOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.hours2}
                disabled={this.state.disabled3}
                onChange={this.handleChange("wedClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Thursday *************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel4"}
          onChange={this.handlePanel("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Thursday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled4}
                  onChange={this.handleTick("disabled4")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.thuOpen}
                disabled={this.state.disabled4}
                onChange={this.handleChange("thuOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.thuClose}
                disabled={this.state.disabled4}
                onChange={this.handleChange("thuClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Friday ***************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel5"}
          onChange={this.handlePanel("panel5")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Friday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled5}
                  onChange={this.handleTick("disabled5")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.friOpen}
                disabled={this.state.disabled5}
                onChange={this.handleChange("friOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.firClose}
                disabled={this.state.disabled5}
                onChange={this.handleChange("firClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Saturday *************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel6"}
          onChange={this.handlePanel("panel6")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Saturday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled6}
                  onChange={this.handleTick("disabled6")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.satOpen}
                disabled={this.state.disabled6}
                onChange={this.handleChange("satOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.satClose}
                disabled={this.state.disabled6}
                onChange={this.handleChange("satClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* Sunday ***************************************************************/}

        <ExpansionPanel
          className={classes.panel}
          expanded={expanded === "panel7"}
          onChange={this.handlePanel("panel7")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Sunday</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <FormControlLabel
              className={classes.toggle}
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.disabled7}
                  onChange={this.handleTick("disabled7")}
                />
              }
              label="Close"
            />
            <div className={classes.action}>
              <TextField
                id="time"
                label="From"
                type="time"
                value={this.state.sunOpen}
                disabled={this.state.disabled7}
                onChange={this.handleChange("sunOpen")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
              <TextField
                id="time"
                label="To"
                type="time"
                value={this.state.sunClose}
                disabled={this.state.disabled7}
                onChange={this.handleChange("sunClose")}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button className={classes.button} variant="raised" color="primary">
          Save
        </Button>
      </Paper>
    );
  }
}

BusinessHours.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BusinessHours);
