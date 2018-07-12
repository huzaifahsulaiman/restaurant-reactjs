import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { submitFeedback } from "../../store/actions/feedbackActions";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px"
  },

  container: {
    width: "80vw",
    [theme.breakpoints.up("md")]: {
      width: "750px"
    },
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "100px",
    paddingTop: "25px",
    paddingBottom: "50px"
  },
  header: {
    fontSize: "2rem"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "90%",
    maxWidth: "90%"
  },
  textArea: {
    minWidth: "90%",
    maxWidth: "90%"
  },
  button: {
    marginTop: "50px"
  }
});

class Feedback extends React.Component {
  state = {
    feedback_type: "1",
    title: "",
    description: ""
  };

  handleSubmit = () => {
    const feedbackData = {
      manager_id: localStorage.getItem("manager_id"),
      feedback_type: this.state.feedback_type,
      title: this.state.title,
      description: this.state.description
    };

    this.props.submitFeedback(feedbackData);

    this.setState({
      feedback_type: "1",
      title: "",
      description: ""
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.container} elevation="3">
          <Typography className={classes.header} color="primary" align="center">
            We want to hear from you
          </Typography>

          <FormControl
            component="fieldset"
            required
            className={classes.formControl}
          >
            <FormLabel component="legend">Choose your response</FormLabel>
            <RadioGroup
              id="feedback_type"
              value={this.state.feedback_type}
              onChange={this.handleChange("feedback_type")}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="Feedback"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="Report"
              />
            </RadioGroup>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Title</InputLabel>
            <Input
              id="title"
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
          </FormControl>
          <FormControl className={classes.textArea}>
            <InputLabel>Description</InputLabel>
            <Input
              id="description"
              multiline
              rows={5}
              inputProps={{ maxLength: "250" }}
              value={this.state.description}
              onChange={this.handleChange("description")}
            />
          </FormControl>

          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={this.handleSubmit}
          >
            Send Feedback
          </Button>
        </Paper>
      </div>
    );
  }
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, { submitFeedback })(withStyles(styles)(Feedback));
