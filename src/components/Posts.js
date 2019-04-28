import React, { Component } from "react";
import { connect } from "react-redux";
import { axiosPost } from "../reducers/actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.axiosPost();
  }

  render() {
    let postItems = this.props.posts.map(post => (
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

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { axiosPost }
)(Posts);
