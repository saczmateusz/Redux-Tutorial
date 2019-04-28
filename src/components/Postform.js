import React, { Component } from "react";
import axios from "axios";

export default class Postform extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: this.state.title,
          body: this.state.body
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div>
        <h1> Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
