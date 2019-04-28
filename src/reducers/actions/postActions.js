import { AXIOS_POST, NEW_POST } from "./types";
import axios from "axios";

export const axiosPost = () => dispatch => {
  console.log("im here tho");
  axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
    dispatch({
      type: AXIOS_POST,
      payload: response.data
    });
  });
};
