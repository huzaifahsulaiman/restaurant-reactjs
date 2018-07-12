import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";

import classess from "./Legal.css";

class Legal extends Component {
  render() {
    return (
      <Paper>
        <div className={classess.Legal}>I'm a legal</div>
      </Paper>
    );
  }
}

export default Legal;
