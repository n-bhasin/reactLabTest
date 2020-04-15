import React, { Component } from "react";
import Comment from "./Comment";

class TweetContainer extends Component {
  state = {
    comments: [],
    message: "",
  };
  //     constructor(props) {
  //     super(props);
  //     this.

  //     this.handleSubmit = this.handleSubmit.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //   }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    let m = this.state.comments;
    m.push(this.state.message);
    this.setState({ comments: m, message: "" });
  };

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            placeholder="enter text"
            onChange={this.handleChange}
          />
          <button type="submit">Post</button>
        </form>
        <ul>
          {this.state.comments.map((p) => (
            <li>
              <Comment comment={p} />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TweetContainer;
