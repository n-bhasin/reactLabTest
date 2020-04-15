import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    like: 0,
  };

  handleLike = () => {
    const like = this.state.like + 1;
    this.setState({ like });
  };
  formatLike() {
    // const { like } = this.state;
    return this.state.like === 0 ? "Like" : "Likes";
  }
  render() {
    return (
      <span>
        <button onClick={this.handleLike}>Like</button>{" "}
        <span>{this.state.like} &nbsp; Likes</span>
      </span>
    );
  }
}

export default LikeButton;
