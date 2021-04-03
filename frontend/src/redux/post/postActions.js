import axios from "axios";
import {
  GET_POSTS,
  GET_POSTS_FAIL,
  CLEAR_POSTS,
  GET_POSTS_REQUEST,
  ADD_POST,
  ADD_POST_FAIL,
} from "./PostTypes";
import setAuthToken from "../../utils/setAuthToken";

export const getPosts = () => async (dispatch) => {
  try {
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }

    dispatch({
      type: GET_POSTS_REQUEST,
    });
    const { data } = await axios.get("/api/post/newsfeed");

    dispatch({
      type: GET_POSTS,
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearPosts = () => async (dispatch) => {
  dispatch({
    type: CLEAR_POSTS,
  });
};

export const addPost = (text) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post("/api/post", { text: text }, config);

    dispatch({
      type: ADD_POST,
      payload: data.post,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
