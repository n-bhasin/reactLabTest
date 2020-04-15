import React, { Component } from "react";
import Comment from "./Comment";

class TweetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      comments: ["tags"],
      isPost: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    this.setState({ comments: this.state.message, isPost: true });
    this.setState({ message: "" });
  };

  handleChange = (event) => {
    let message = event.target.value;
    this.setState({ message });
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

        {/* {this.state.isPost ?

        <Comment comment={this.state.post}></Comment> : ""} */}
      </div>
    );
  }
}

export default TweetContainer;
