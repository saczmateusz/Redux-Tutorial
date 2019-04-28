import { AXIOS_POST, NEW_POST } from "./types";
import axios from "axios";

export const axiosPost = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    dispatch({
      type: AXIOS_POST,
      payload: response.data
    });
  });
};

export const createPost = postData => dispatch => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", postData, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      dispatch({
        type: NEW_POST,
        payload: response.data
      });
    });
};
