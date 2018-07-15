import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ImageCard from "./ImageCard";
import {
  getThemeImages,
  saveThemeImages
} from "../../store/actions/imageActions";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "13vw",
    alignItems: "center"
  },
  title: {
    margin: "25px auto 50px"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "50px"
  },

  card: {
    maxWidth: " 430px",
    width: "75vw",
    margin: theme.spacing.unit * 2
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

class ThemeImage extends Component {
  state = {
    manager_id: localStorage.getItem("manager_id"),
    theme_images: [],
    selected_id: ""
  };

  handleRadioChange = fromChild => () => {
    this.setState({ selected_id: fromChild });
  };

  componentDidMount() {
    getThemeImages().then(response => {
      this.setState({
        theme_images: response,
        selected_id: response[0].theme_image_id
      });
    });
  }

  handleSubmit = () => () => {
    const userData = {
      manager_id: this.state.manager_id,
      theme_image_id: this.state.selected_id
    };

    const isSaved = saveThemeImages(userData);
    if (isSaved) {
      this.props.history.push("/restaurant-profile");
    }
  };

  showImages = () => {
    let list = <p>No available data</p>;
    if (this.state.theme_images) {
      list = this.state.theme_images.map(data => (
        <ImageCard
          key={data.theme_image_id}
          callChange={this.handleRadioChange}
          selected_id={this.state.selected_id}
          theme_image_id={data.theme_image_id}
          theme_image_title={data.theme_image_title}
          theme_image_path={data.theme_image_path}
        />
      ));
    }
    return list;
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          className={classes.title}
          variant="display1"
          color="primary"
        >
          Change Theme Image
        </Typography>
        <div className={classes.container}>
          {/* map each card */}
          {/* <ImageCard /> */}
          {this.showImages()}
        </div>
        <Button variant="raised" color="primary" onClick={this.handleSubmit()}>
          Save Changes
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ThemeImage);
