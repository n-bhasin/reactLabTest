import React, { Component } from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";

class Comment extends Component {
  render() {
    // console.log(this.props);
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
