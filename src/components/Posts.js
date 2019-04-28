import React, { Component } from "react";
import axios from "axios";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  render() {
    let postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
