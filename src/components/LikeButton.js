import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    like: 0,
  };

  handleLike = () => {
    const like = this.state.like + 1;
    this.setState({ like });
  };

  render() {
    return (
      <span>
        <button onClick={this.handleLike}>Like</button>
        {this.state.like}Likes
      </span>
    );
  }
}

export default LikeButton;
