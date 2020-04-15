import React, { Component } from "react";
import Moment from "react-moment";

class Timer extends Component {
  state = {
    time: "",
  };
  componentDidMount() {
    if (this.state.time === "") {
      this.setState({
        time: new Date(),
      });
    }
  }
  render() {
    return <Moment format="HH:mm:ss">{this.state.time}</Moment>;
  }
}

export default Timer;
