import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
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

class ImageCard extends Component {
  state = {
    theme_image_id: this.props.theme_image_id
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    // console.log(this.state.theme_image_id);

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={this.props.theme_image_path} //masuk redux untuk access image
        />
        <CardContent>
          <Typography gutterBottom variant="headline">
            {this.props.theme_image_title}
          </Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel
            control={
              <Radio
                color="primary"
                checked={this.props.selected_id === this.props.theme_image_id} //put image_id
                onChange={this.props.callChange(this.state.theme_image_id)}
                value={this.props.theme_image_id} //put image_id
              />
            }
            label={`Select ${this.props.theme_image_title}`}
          />
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageCard);
