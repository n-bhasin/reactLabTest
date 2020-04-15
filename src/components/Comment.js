import React, { Component } from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";

class Comment extends Component {
  state = {
    value: this.props.comment,
  };
  render() {
    // console.log(this.props);
    console.log(this.state.value);
    return (
      <>
        <Timer />
        <span>{this.props.comment}</span>
        <LikeButton />
      </>
    );
  }
}

export default Comment;
